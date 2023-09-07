import React, { Component } from "react";
import Home from "../../screens/Home/Home";
import "./Pelicula.css"

class Pelicula extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peliculasArray: this.props.peliculas,
    }
  }
  render() {
    return (
      this.state.peliculasArray.map(pelicula =>
        <article className="articulo">
          <img className="imagen" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
          <p className="titulocategorias">{pelicula.title}</p>
          <p className="descripcion">{pelicula.overview}</p>
          <button className="botonPelicula"> Ver más</button>
          <button className="botonPelicula"> Ir a detalle </button>
          <button className="botonPelicula"> Agregar a favoritos</button>
        </article>
      )

    )
  }

}
export default Pelicula;



