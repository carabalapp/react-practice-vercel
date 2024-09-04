import React from 'react';

const UserItem = ({ user, deleteUser, editUser }) => {
  const truncatedName = user.nombre.length > 10 ? user.nombre.slice(0, 10) + '...' : user.nombre;

  return (
    <div>
      <h4>{truncatedName}</h4>
      <p>{user.correo}</p>
      <p>{user.edad}</p>
      <button onClick={() => editUser(user)}>Editar</button>
      <button onClick={() => deleteUser(user.correo)}>Eliminar</button>
    </div>
  );
};

export default UserItem;