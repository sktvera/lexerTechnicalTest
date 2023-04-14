import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,} from '@material-ui/core';

import "./Assets/styles.css"

const data = [
  { id: 1, name: 'Item 1', quantity: 10 },
  { id: 2, name: 'Item 2', quantity: 20 },
  { id: 3, name: 'Item 3', quantity: 30 },
];

const theme = createTheme();

const Employees =()=> {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
          <div className='containedForm'>
              <div> 
                  <ThemeProvider theme={theme}>
                      <Container component="main" >   
                          <Box>
                              <div>
                                  <Typography component="h1" variant="h5">
                                      Agregar Empleado
                                  </Typography>
                              </div>
                              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                  <TextField
                                  margin="normal"
                                  fullWidth
                                  id="email"
                                  label="Nombre"
                                  name="email"
                                  />
                                  <TextField
                                  margin="normal"
                                  fullWidth
                                  name="password"
                                  label="Primer Apellido"
                                  type="text"
                                  id="password"
                                  />
                                  <TextField
                                  margin="normal"
                                  fullWidth
                                  name="password"
                                  label="Segundo Apellido"
                                  type="text"
                                  id="password"
                                  />
                                  <TextField
                                  margin="normal"
                                  fullWidth
                                  name="password"
                                  label="Departamento"
                                  type="text"
                                  id="password"
                                  />
                                  <Button
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  sx={{ mt: 3, mb: 2 }}
                                  >
                                  guardar
                                  </Button>
                              </Box>
                          </Box>
                      </Container>
                  </ThemeProvider>
              </div>

              <div className='containedTableEmployees'>
                  <TableContainer className='boderTable'>
                      <Table>
                          <TableHead>
                              <TableRow>
                                  <TableCell>ID</TableCell>
                                  <TableCell>Nombre</TableCell>
                                  <TableCell>Primer Apellido</TableCell>
                                  <TableCell>Segundo Apellido</TableCell>
                                  <TableCell>Departamento</TableCell>
                                  <TableCell>Opciones</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {data.map((row) => (
                              <TableRow key={row.id}>
                              <TableCell>{row.id}</TableCell>
                              <TableCell>{row.name}</TableCell>
                              <TableCell>{row.quantity}</TableCell>
                              <TableCell>{row.quantity}</TableCell>
                              <TableCell>{row.quantity}</TableCell>
                              <div className='itemIcons'>
                              <div>editar</div>
                              <div>eliminar</div>
                              </div>
                              </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </TableContainer>
              </div>
          </div>
  );
}



export default Employees







