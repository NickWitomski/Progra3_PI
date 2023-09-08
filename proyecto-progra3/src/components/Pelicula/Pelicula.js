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
      descripcionMostrada: true,
      textoBotonFavs: "Agregar a favoritos"
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

  componentDidMount(){
    //Necesito ver si el id esta en el array de favs
    let chequearStorage = localStorage.getItem('favs')

    if(chequearStorage !== null){
      let favs = JSON.parse(chequearStorage)
      //Ahors si es nullo, cambio el texto
      if(favs.includes(this.props.peliculasArray.id)){
        this.setState({textoBotonFavs: "Eliminar de favoritos"})
      }
    }
  }

  agregarySacarDeFavoritos(id){
    let favs = []
    let chequearStorage = localStorage.getItem('favs');

    if(chequearStorage !== null){
      //Agregar el id
      favs = JSON.parse(chequearStorage)
    }

    if(favs.includes(id)){
      //sacar el id
      favs = favs.filter(i => i !== id)
      //Cambiar el texto del boton
      this.setState({textoBotonFavs: "Agregar a favoritos"})
    }else{
      favs.push(id);
      this.setState({textoBotonFavs: "Eliminar de favoritos"})
    }

    //Guardar los cambios en el localStorage (sonvertir en strings)

    let favsToStrings = JSON.stringify(favs);
    localStorage.setItem('favs', favsToStrings);

    console.log(localStorage)
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



