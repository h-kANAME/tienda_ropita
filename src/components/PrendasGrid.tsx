import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function createData(
  nombre: string,
  id: number,
  descripcion: string,
  precio: number,
  tipo_prenda: string,
) {
  return { nombre, id, descripcion, precio, tipo_prenda };
}

const rows = [
  createData('Campera Adidas', 1, 'Campera Gym', 65.00, 'Campera'),
  createData('Campera Adidas', 1, 'Campera Gym', 65.00, 'Campera'),
  createData('Campera Adidas', 1, 'Campera Gym', 65.00, 'Campera'),
  createData('Campera Adidas', 1, 'Campera Gym', 65.00, 'Campera'),
  createData('Campera Adidas', 1, 'Campera Gym', 65.00, 'Campera'),
  createData('Campera Adidas', 1, 'Campera Gym', 65.00, 'Campera')
];

export default function DenseTable() {
  return (
    <div style={{width: '80%',
    margin: 'auto',
    paddingTop: 50}}>
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
          {rows.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right">{row.tipo_prenda}</TableCell>
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
