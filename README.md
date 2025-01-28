
## **User Management Dashboard**
This project is a User Management Dashboard that allows users to add, update, and delete user profiles. It fetches data from an API and stores the user information in localStorage for persistent state across sessions. The dashboard includes features such as pagination, dynamic forms for adding or editing users, and local data handling.

## **Features**

**User List**: Displays a list of users fetched from an API or stored in localStorage.
**Add User**: Allows you to add new users through a dynamic form.
**Edit User**: Edit details of an existing user.
**Delete User**: Delete users from the list and update the display accordingly.
**Pagination**: Users are displayed in pages with 5 users per page, and you can navigate through the pages using "Previous" and "Next" buttons.
**Local Storage**: All user data is stored in the browser's localStorage so that the data persists even after a page reload.

## **Technologies Used**
**React.js**: For building the user interface and managing the state.
**Axios**: For fetching user data from an external API.
**CSS**: For styling the application.


## **Installation**

**Clone the repository**:
git clone https://github.com/yourusername/user-management-dashboard.git
cd user-management-dashboard

## **Install dependencies**:


npm install

**Start the development server**:

npm start

**The application will be available at http://localhost:3000.**


## **Code Structure**

**App.js**
    The main component that manages the state of the application and renders the UserList, UserForm, and Pagination components.

    State Management: Uses React's useState hook to store users, the current page, and the editing state.
    Fetching Users: The useEffect hook is used to fetch users from the API and store them in localStorage for persistence.
    UserList.js
    Displays the list of users and handles the delete and edit operations.

**UserForm.js**
    Handles the form logic for adding and editing users. It updates the parent component when a user is added or updated.

**Pagination.js**
    Manages the pagination controls, allowing the user to navigate between pages of users.


