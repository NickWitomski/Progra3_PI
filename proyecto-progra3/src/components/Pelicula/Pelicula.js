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
      descripcion: this.props.peliculas.overview,
      descripcionMostrada: true
    }
  }
  metodoVerDescripcion(){
    if (this.state.texto === "Ver descripcion"){
        this.setState ({
            texto: "Ocultar descripcion",
            descripcionMostrada: false 
        })
    } else{
        this.setState ({
            texto: "Ver descripcion",
            descripcionMostrada: true
        })
    }
  }

  render() {
    return (
      this.state.peliculasArray.map(pelicula =>
        <article className="articulo">
          <img className="imagen" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
          <p className="titulocategorias">{pelicula.title}</p>
          <button className="botonPelicula" onClick= {() => this.metodoVerDescripcion()}> 
          {this.state.texto}
          </button>
          <p className={this.state.descripcionMostrada ? "MostrarDescripcion" : "OcultarDescripcion"}>{pelicula.overview}</p>
          <button className="botonPelicula" > <Link to={`/detallePelicula/${pelicula.id}`}> Ir a detalle </Link> </button>
          <button className="botonPelicula" > Agregar a favoritos</button>
        </article>
      )

    )
  }

}
export default Pelicula;



