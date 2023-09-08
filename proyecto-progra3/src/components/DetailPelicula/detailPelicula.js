import React, {Component} from "react";
import DetallePelicula from "../../screens/DetallePelicula/detallePelicula.js"
import "./detailPelicula.css";

class DetailPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            textoFavoritos: "Agregar a favoritos",
            peliculaTraida: this.props.pelicula
        }
    }

    // componentDidMount(){
    //     let peliculaTraida = localStorage.getItem("pelicula")
    //     if(peliculaTraida === null){
    //         this.state.textoFavoritos = "Agregar a favoritos"
    //     } else if ()
    // }
   
render(){
    return(
        console.log("hola estamod en"),
        console.log(this.state.peliculaTraida),
        <React.Fragment>
        <section className="section_peli1"> 
            <h1>{this.state.peliculaTraida.original_title}</h1>
            <article className="articulo1">
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${this.state.peliculaTraida.poster_path}`}  alt={this.state.peliculaTraida.original_title} />
            </article>
        </section>
        <section className="section_peli2">
            <article class="articulo2">
                <p className="texto"> Fecha de estreno: {this.state.peliculaTraida.release_date}</p>
                <p className="texto"> Rating: ${this.state.peliculaTraida.vote_average}</p>
                <p className="texto"> Sinopsis: ${this.state.peliculaTraida.overview}</p>
                <p className="texto"> Duración: ${this.state.peliculaTraida.runtime} mins</p>
                {/* <p className="texto"> Generos: ${listaGeneros}</p> */}
            </article>
             <article className="articulo_boton">
                <button className="favoritos"> ${this.state.peliculaTraida.textoInicial} </button>
            </article> 
        </section>
            
        </React.Fragment>
    )
}}
export default DetailPelicula;