import React from 'react';
import '../App.css';
import '../css/Prendas.css'
// import PrendasGrid from "./PrendasGrid.tsx";
import PrendasService from "../services/PrendasService";

// function Prendas() {

//   return (  
//     // <PrendasGrid/>

//     <div>asd</div>
//   )
// };
// export default Prendas


class Prendas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      prendas: []
    }
  }

  componentDidMount() {
    PrendasService.getPrendas().then((response) => {
      this.setState({ prendas: response.data});
    });
  }

  render() {
    return (
      <div>

      {
        this.state.prendas.map(
          prenda =>
          <p key = {prenda.id}>{prenda.id}</p>
        )
      }
      </div>

    )
  }

}

export default Prendas