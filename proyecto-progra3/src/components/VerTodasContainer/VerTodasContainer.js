import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";

class VerTodasContainer extends Component {
    
  render() {
    return (
      <React.Fragment>
        {this.props.movies.map((data, idx) =>
          <Pelicula key={data + idx} peliculas={data} />)}
      </React.Fragment>
    )
  }
}

export default VerTodasContainer;