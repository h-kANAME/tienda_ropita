//import logo from './logo.svg';

import './App.css';
import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

import Paper from '@mui/material/Paper';
import Clientes from './components/Clientes';
import Prendas from './components/Prendas';
import Ventas from './components/Ventas';

import { Checkroom, Storefront, People } from '@mui/icons-material/';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default class App extends Component {

  render() {
    return (
      <div className="marco">
        <Router>
        <Grid item sm={10} class='HomeBoton'>
              <Button component={Link} to={'/'} variant="contained" size="large"
              style={{
                borderRadius: 35,
                backgroundColor: "#04293A"
            }}>
                  <h1 className="titleHeader">Tienda Ropita</h1>
              </Button>
        </Grid>
          <Grid style={{margin: 10}} container spacing={10}>
            <Grid item sm={4}>
            <Button component={Link} to={'/Prendas'} variant="contained" size="large"
             style={{
              borderRadius: 35,
              backgroundColor: "#04293A"
          }}>
                  <Checkroom />
                  <p>Prendas</p>
            </Button>
            </Grid>

            <Grid item sm={4}>
            <Button component={Link} to={'/Clientes'} variant="contained" size="large"
             style={{
              borderRadius: 35,
              backgroundColor: "#04293A"
          }}>
                  <People />
                  <p>Clientes</p>
            </Button>
            </Grid>
            <Grid item sm={4}>
            <Button component={Link} to={'/Ventas'} variant="contained" size="large"
             style={{
              borderRadius: 35,
              backgroundColor: "#04293A"
          }}>
                  <Storefront />
                  <p>Ventas</p>
            </Button>
            </Grid>
          </Grid>
          <Routes>
            <Route path="/Prendas" element={<Prendas />} />
            <Route path="/Clientes" element={<Clientes />} />
            <Route path="/Ventas" element={<Ventas />} />
          </Routes>
        </Router>
      </div>
    );
  }
}