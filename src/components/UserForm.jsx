import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, currentUser }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');

  // Este efecto se ejecutará cada vez que currentUser cambie
  useEffect(() => {
    if (currentUser) {
      setNombre(currentUser.nombre);
      setCorreo(currentUser.correo);
      setEdad(currentUser.edad);
    } else {
      setNombre('');
      setCorreo('');
      setEdad('');
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      updateUser({ ...currentUser, nombre, correo, edad });
    } else {
      addUser({ nombre, correo, edad });
    }
    // Limpiar los campos después de agregar o actualizar
    setNombre('');
    setCorreo('');
    setEdad('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        required
      />
      <button type="submit">{currentUser ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
};

export default UserForm;