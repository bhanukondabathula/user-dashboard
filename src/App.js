import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import Pagination from "./components/Pagination";
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    } else {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const apiUsers = response.data.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            department: user.company?.name || "General",
          }));
          setUsers(apiUsers);
          localStorage.setItem("users", JSON.stringify(apiUsers));
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    }
  };

  const saveUsersToLocalStorage = (newUsers) => {
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  const addUser = (user) => {
    const newUser = {
      ...user,
      id: users.length + 1,
      name: `${user.firstName} ${user.lastName}`,
      department: user.department,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    setIsAddingUser(false);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? { ...updatedUser } : user
    );
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    const reIndexedUsers = updatedUsers.map((user, index) => ({
      ...user,
      id: index + 1,
    }));
    setUsers(reIndexedUsers);
    saveUsersToLocalStorage(reIndexedUsers);
    const totalPages = Math.ceil(reIndexedUsers.length / usersPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <ErrorBoundary>
        <div className="app">
          <h1>User Management Dashboard</h1>
          {!isAddingUser && !editingUser && (
            <div className="add-user-container">
              <button className="add-user-button" onClick={() => setIsAddingUser(true)}>
                Add User
              </button>
            </div>
          )}
          {(isAddingUser || editingUser) && (
            <UserForm
              addUser={addUser}
              updateUser={updateUser}
              editingUser={editingUser}
              setEditingUser={setEditingUser}
              setIsAddingUser={setIsAddingUser}
            />
          )}
          <UserList
            users={currentUsers}
            onDelete={deleteUser}
            onEdit={(user) => {
              setEditingUser(user);
              setIsAddingUser(false);
            }}
          />
          <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
    </ErrorBoundary>
    
  );
};

export default App;
