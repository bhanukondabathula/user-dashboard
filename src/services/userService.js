// Simulating a backend with local users (for demo purposes)
let users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', department: 'HR' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', department: 'Finance' },
  ];
  
  /**
   * Adds a new user to the list
   * @param {Object} user The user data to add
   */
  export const addUser = (user) => {
    user.id = Date.now();  // Generate unique ID using timestamp
    users.push(user);  // Add the user to the list
  };
  
  /**
   * Deletes a user by ID
   * @param {number} id The ID of the user to delete
   */
  export const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);  // Remove the user with the given ID
  };
  
  /**
   * Updates an existing user's details
   * @param {Object} updatedUser The updated user data
   */
  export const updateUser = (updatedUser) => {
    const index = users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;  // Update the user in the list
    }
  };
  
  /**
   * Fetches all users
   * @returns {Array} The list of users
   */
  export const getUsers = () => {
    return users;  // Return all users
  };
  