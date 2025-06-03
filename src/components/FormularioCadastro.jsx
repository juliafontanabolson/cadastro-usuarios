import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const FormularioCadastro = ({ onAdicionarUsuario }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoUsuario = { nome, email };
    onAdicionarUsuario(novoUsuario);
    setNome('');
    setEmail('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Button variant="contained" type="submit">Cadastrar</Button>
    </Box>
  );
};

export default FormularioCadastro;
