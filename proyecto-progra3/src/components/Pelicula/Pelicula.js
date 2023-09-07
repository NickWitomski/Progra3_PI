import React, { Component } from "react";
import {Link} from "react-router-dom"
import Home from "../../screens/Home/Home";
import "./Pelicula.css"

class Pelicula extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peliculasArray: this.props.peliculas,
      texto: "Ver descripcion",
      descripcion: this.props.peliculas.overview
    }
  }
  metodoVerDescripcion(){
    if (this.state.texto === "Ver descripcion"){
        this.setState ({
            texto: "Ocultar descripcion"
        })
    } else{
        this.setState ({
            texto: "Ver descripcion",
        })
    }
}

  render() {
    return (
      this.state.peliculasArray.map(pelicula =>
        <article className="articulo">
          <img className="imagen" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
          <p className="titulocategorias">{pelicula.title}</p>
          <p className="descripcion">{pelicula.overview}</p>
          <button className="botonPelicula" onClick= {() => this.metodoVerDescripcion()}> 
          {this.state.texto}
          </button>
          <button className="botonPelicula" > <Link to={`/detallePelicula/${pelicula.id}`}> Ir a detalle </Link> </button>
          <button className="botonPelicula" > Agregar a favoritos</button>
        </article>
      )

    )
  }

}
export default Pelicula;



