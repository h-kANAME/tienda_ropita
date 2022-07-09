//import logo from './logo.svg';

import './App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Clientes from './components/Clientes';
import Prendas from './components/Prendas';
import Ventas from './components/Ventas';

import { Checkroom, Storefront, People } from '@mui/icons-material/';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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
          <Router>
          <Grid item sm={12}>
          <Link to="/">
            <Item>
              <h1 className="titleHeader">Tienda Ropita</h1>
            </Item>
          </Link>
          </Grid>

          <Grid item sm={4}>
          <Link to="/Prendas">
              <Item>
                <Checkroom />
                <p>Prendas</p>
              </Item>
          </Link>
          </Grid>

          <Grid item sm={4}>
            <Link to="/Clientes">
              <Item>
                <People />
                <p>Clientes</p>
              </Item>
            </Link>
          </Grid>
          <Grid item sm={4}>
          <Link to="/Ventas">
              <Item>
                <Storefront />
                <p>Ventas</p>
              </Item>
          </Link>
          </Grid>
          <Routes>
          <Route path="/Prendas" element={<Prendas/>}/>
          <Route path="/Clientes" element={<Clientes/>}/>
          <Route path="/Ventas" element={<Ventas/>}/>
          </Routes>
          </Router>
        
        
        </Grid>
      </div>
    </div>
  );
}

export default App;
