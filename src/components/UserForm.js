import React, { useState, useEffect } from "react";
import "./UserForm.css";

const UserForm = ({ addUser, updateUser, editingUser, setEditingUser, setIsAddingUser }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const [errors, setErrors] = useState({});

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

  const validate = () => {
    const newErrors = {};
    if (!userData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!userData.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!userData.email.trim() || !/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Valid Email is required.";
    }
    if (!userData.department.trim()) newErrors.department = "Department is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

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
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <label>First Name:</label>
      <input
        type="text"
        value={userData.firstName}
        placeholder="First Name"
        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
      />
      {errors.firstName && <small>{errors.firstName}</small>}

      <label>Last Name:</label>
      <input
        type="text"
        value={userData.lastName}
        placeholder="Last Name"
        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
      />
      {errors.lastName && <small>{errors.lastName}</small>}

      <label>Email:</label>
      <input
        type="email"
        value={userData.email}
        placeholder="Email"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      {errors.email && <small>{errors.email}</small>}

      <label>Department:</label>
      <input
        type="text"
        value={userData.department}
        placeholder="Department"
        onChange={(e) => setUserData({ ...userData, department: e.target.value })}
      />
      {errors.department && <small>{errors.department}</small>}

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
