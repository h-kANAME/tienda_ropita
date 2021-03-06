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



function Prendas() {

  const [prendas, setPrendas] = useState([])

  useEffect(() => {
    fetch('http://localhost:8090/tienda/api/prendas/all')
      .then((response) => {
        return response.json()
      })
      .then((prendas) => {
        setPrendas(prendas)
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
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Tipo Prenda</TableCell>
            <TableCell align="right">Eliminar</TableCell>
            <TableCell align="right">Modificar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prendas.map((row) => (
            <TableRow>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.tipo}</TableCell>
              <TableCell align="right">{row.precioBase}</TableCell>
              <TableCell align="right">{row.precioFinal}</TableCell>
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

export default Prendas