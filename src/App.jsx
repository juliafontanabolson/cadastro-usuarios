import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Container, Typography } from '@mui/material';
import FormularioCadastro from './components/FormularioCadastro';
import ListaUsuarios from './components/ListaUsuarios';

const App = () => {
  const [abaAtual, setAbaAtual] = useState(0);
  const [usuarios, setUsuarios] = useState(() => {
    const salvos = localStorage.getItem('usuarios');
    return salvos ? JSON.parse(salvos) : [];
  });

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  const handleChange = (event, newValue) => {
    setAbaAtual(newValue);
  };

  const adicionarUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Cadastro de Usuários</Typography>
      <Tabs value={abaAtual} onChange={handleChange}>
        <Tab label="Cadastrar" />
        <Tab label="Ver Cadastrados" />
      </Tabs>
      <Box mt={2}>
        {abaAtual === 0 && <FormularioCadastro onAdicionarUsuario={adicionarUsuario} />}
        {abaAtual === 1 && <ListaUsuarios usuarios={usuarios} />}
      </Box>
    </Container>
  );
};

export default App;
