import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const ListaUsuarios = ({ usuarios }) => {
  return (
    <List>
      {usuarios.map((usuario, index) => (
        <ListItem key={index}>
          <ListItemText primary={usuario.nome} secondary={usuario.email} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListaUsuarios;
