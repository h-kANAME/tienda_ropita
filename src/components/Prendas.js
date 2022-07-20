import React, { Component } from 'react';
import '../App.css';
import '../css/Prendas.css'
import {PrendaService} from "../services/PrendaService";

export default class Prendas extends Component {
  constructor() {
    super();
    this.state = {};
    this.PrendaService = new PrendaService();
  }
  componentDidMount() {
    this.PrendaService.getAll().then(data => {
      console.log(data);
    })
  }

  // componentDidMount() {
  //   this.PrendaService.getAll().then(data => this.setState({ prendas: data }))
  // }
  
  render() {
    return (
      <div>Prendas</div>
    );
  }

}