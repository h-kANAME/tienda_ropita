import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';



function Clientes() {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8090/tienda/api/clientes/all')
      .then((response) => {
        return response.json()
      })
      .then((clientes) => {
        setClientes(clientes)
      })
  }, [])

  return (
    <div style={{width: '100%',
    margin: 'auto',
    paddingTop: 50,
    marginBottom: 50}}>
    <TableContainer component={Paper}>
      <Table size="small" aria-label="Tabla de Ventas">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Eliminar</TableCell>
            <TableCell align="right">Modificar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((row) => (
            <TableRow>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.apellido}</TableCell>
              <TableCell align="right">{row.razonSocial}</TableCell>
              <TableCell align="right"><DeleteForeverIcon/></TableCell>
              <TableCell align="right"><EditIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Clientes