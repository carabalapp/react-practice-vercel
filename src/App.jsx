
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.correo === updatedUser.correo ? updatedUser : user)));
    setCurrentUser(null);
  };

  const deleteUser = (correo) => {
    setUsers(users.filter((user) => user.correo !== correo));
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <UserForm addUser={addUser} updateUser={updateUser} currentUser={currentUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;