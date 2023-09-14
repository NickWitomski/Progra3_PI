import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "../../screens/Home/Home";
import PeliculasContainer from "../PeliculasContainer/PeliculasContainer";
import VerTodasPopulares from "../../screens/VerTodas/VerTodasPopulares";
import VerTodasCartelera from "../../screens/VerTodas/VerTodasCartelera";
import Favoritos from "../../screens/Favoritos/Favoritos";
import SearchResults from "../../screens/SearchResults/SearchResults";
import "./Pelicula.css"

class Pelicula extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peliculasArray: this.props.peliculas,
      texto: "Ver descripcion",
      descripcionMostrada: true,
      textoBotonFavs: "Agregar a favoritos",
      id: this.props.peliculas.id,
    }

  }

  metodoVerDescripcion() {
    if (this.state.texto === "Ver descripcion") {
      this.setState({
        texto: "Ocultar descripcion",
        descripcionMostrada: false
      })
    } else {
      this.setState({
        texto: "Ver descripcion",
        descripcionMostrada: true
      })
    }
  }

  componentDidMount() {
    //Necesito ver si el id esta en el array de favs
    let chequearStorage = localStorage.getItem('favs')

    if (chequearStorage !== null) {
      let favs = JSON.parse(chequearStorage)
      //Ahors si es nullo, cambio el texto
      if (favs.includes(this.state.id)) {
        this.setState({
          textoBotonFavs: "Eliminar de favoritos"
        })
      }
    }
  }

  agregarySacarDeFavoritos(idBuscado) {
    let favs = []
    let chequearStorage = localStorage.getItem('favs');

    if (chequearStorage !== null) {
      //Agregar el id
      favs = JSON.parse(chequearStorage)
    }

    if (favs.includes(this.state.id)) {
      //sacar el id
      favs = favs.filter(i => i !== idBuscado)
      //Cambiar el texto del boton
      this.setState({
        textoBotonFavs: "Agregar a favoritos"
      })
    } else {
      favs.push(idBuscado);
      this.setState({
        textoBotonFavs: "Eliminar de favoritos"
      })
    }

    //Guardar los cambios en el localStorage (convertir en strings)

    let favsToStrings = JSON.stringify(favs);
    localStorage.setItem('favs', favsToStrings);

    console.log(localStorage)
  }

  render() {
    console.log(this.state.peliculasArray);
    let pelicula = this.state.peliculasArray;

    return (
      <React.Fragment>
        <article className="articulo">
          <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title} />
          <p className="titulocategorias">{pelicula.title}</p>
          <button className="botonPelicula" onClick={() => this.metodoVerDescripcion()}>
            {this.state.texto}
          </button>
          <p className={this.state.descripcionMostrada ? "MostrarDescripcion" : "OcultarDescripcion"}>{pelicula.overview}</p>
          <button className="botonPelicula" > <Link to={`/detallePelicula/${pelicula.id}`}> Ir a detalle </Link> </button>
          <button onClick={() => this.agregarySacarDeFavoritos(pelicula.id)} className="botonPelicula" >{this.state.textoBotonFavs}</button>
        </article>
      </React.Fragment>

    )


  }

}
export default Pelicula;



