import React, {Component} from "react";
import "./detailPelicula.css";
import DetallePelicula2 from "../../screens/DetallePelicula/DetallePelicula2";

class DetailPelicula2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            textoFavoritos: "Agregar a favoritos",
            generosTraidos: this.props.generos,
            titulo: this.props.titulo,
            foto: this.props.portada,
            rating: this.props.rating,
            sinopsis: this.props.sinopsis,
            duracion: this.props.duracion,
            fecha_de_estreno: this.props.fecha
        }
    }

    // componentDidMount(){
    //     let peliculaTraida = localStorage.getItem("pelicula")
    //     if(peliculaTraida === null){
    //         this.state.textoFavoritos = "Agregar a favoritos"
    //     } 
    // }
   
render(){
    return(
        console.log("hola"),
        console.log(this.state.generosTraidos),
        <React.Fragment>
        <section className="section_peli1"> 
            <h1>{this.state.titulo}</h1>
            <article className="articulo1">
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${this.state.foto}`}  alt={this.state.titulo} />
            </article>
        </section>
        <section className="section_peli2">
            <article class="articulo2">
                <p className="texto"> Fecha de estreno: {this.state.fecha_de_estreno}</p>
                <p className="texto"> Rating: {this.state.rating}</p>
                <p className="texto"> Sinopsis: {this.state.sinopsis}</p>
                <p className="texto"> Duración: {this.state.duracion}</p> 
                <p className="texto">Géneros: {this.state.generosTraidos}
                </p>
            </article>
             {/* <article className="articulo_boton">
                <button className="favoritos"> ${this.state.textoFavoritos} </button>
            </article>  */}
        </section>
            
        </React.Fragment>
    )
}}
export default DetailPelicula2;