//import logo from './logo.svg';

import './App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Clientes from './components/Clientes';

import { Checkroom, Storefront, People } from '@mui/icons-material/';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App-header">
      <div className="fixed">

        <Grid container spacing={15}>
          <Grid item sm={12}>
            <Item>
              <h1 className="titleHeader">Tienda Ropita</h1>
            </Item>
          </Grid>

          <Grid item sm={4}>
            <a href="#">
              <Item>
                <Checkroom />
                <p>Prendas</p>
              </Item>
            </a>
          </Grid>

          <Grid item sm={4}>
              <Item>
                <People />
                <p>Clientes</p>
              </Item>
          </Grid>

          <Grid item sm={4}>
            <a href="#">
              <Item>
                <Storefront />
                <p>Ventas</p>
              </Item>
            </a>
          </Grid>

        </Grid>

      </div>
    </div>
  );
}

export default App;
