import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import Home from "../../screens/Home/Home";

class PeliculasContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        {this.props.movies.slice(0,6).map((data, idx) =>
          <Pelicula key={data + idx} peliculas={data} />)}
      </React.Fragment>
    )
  }
}

export default PeliculasContainer; 