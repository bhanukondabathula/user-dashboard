import React from "react";
import "./UserList.css";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            if (!user || !user.name) return null;
            const [firstName, lastName] = user.name.split(" ");
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{firstName || "-"}</td>
                <td>{lastName || "-"}</td>
                <td>{user.email || "-"}</td>
                <td>{user.department || "-"}</td>
                <td>
                  <button className="edit-button" onClick={() => onEdit(user)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.232 2.586a1.5 1.5 0 012.12 0l3.5 3.5a1.5 1.5 0 010 2.12l-11 11A1.5 1.5 0 018.5 20H5a1 1 0 01-1-1v-3.5a1.5 1.5 0 01.439-1.06l11-11zm-1.768 3.464l-9.939 9.94A.5.5 0 013.5 16.5V19h2.5a.5.5 0 01.354.146l9.94-9.94-2.83-2.83zm1.768-1.768l-1.768 1.768 2.83 2.83 1.768-1.768-2.83-2.83z" />
                    </svg>
                    Edit
                  </button>

                  <button
                    className="delete-button"
                    onClick={() => onDelete(user.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M5 6h14v14.5c0 1.5-1 2.5-2.5 2.5h-9C6 23 5 22 5 20.5V6zM3 4h18v2H3V4zm11.5 1a1 1 0 10-2 0h-8V4h18v1h-8z" />
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
