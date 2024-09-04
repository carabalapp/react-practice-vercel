import React from 'react';
import UserItem from './UserItems';

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.correo} user={user} deleteUser={deleteUser} editUser={editUser} />
      ))}
      <h3>Total de usuarios: {users.length}</h3>
    </div>
  );
};

export default UserList;