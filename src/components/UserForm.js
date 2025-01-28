import React, { useState, useEffect } from "react";
import "./UserForm.css";

const UserForm = ({ addUser, updateUser, editingUser, setEditingUser, setIsAddingUser }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (editingUser) {
      const [firstName, lastName] = editingUser.name.split(" ");
      setUserData({
        ...editingUser,
        firstName: firstName || "",
        lastName: lastName || "",
      });
    } else {
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      updateUser({ ...userData, name: `${userData.firstName} ${userData.lastName}` });
    } else {
      addUser({ ...userData, name: `${userData.firstName} ${userData.lastName}` });
    }

    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
    setEditingUser(null);
    setIsAddingUser(false);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>

      <label>First Name: <span className="required">*</span></label>
      <input
        type="text"
        value={userData.firstName}
        placeholder="First Name"
        required
        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
      />

      <label>Last Name: <span className="required">*</span></label>
      <input
        type="text"
        value={userData.lastName}
        placeholder="Last Name"
        required
        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
      />

      <label>Email: <span className="required">*</span></label>
      <input
        type="email"
        value={userData.email}
        placeholder="Email"
        required
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />

      <label>Department: <span className="required">*</span></label>
      <input
        type="text"
        value={userData.department}
        placeholder="Department"
        required
        onChange={(e) => setUserData({ ...userData, department: e.target.value })}
      />

      <button type="submit">{editingUser ? "Update User" : "Save"}</button>
      <button
        type="button"
        onClick={() => {
          setEditingUser(null);
          setIsAddingUser(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
