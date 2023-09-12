import React, {Component} from "react";
import "./detailPelicula.css";
import DetallePelicula2 from "../../screens/DetallePelicula/DetallePelicula2";

class DetailPelicula2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            textoFavoritos: "Agregar a favoritos",
            generosTraidos: this.props.generos,
            listaGeneros: [],
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
    //     } else if ()
    // }
   
render(){
    return(
        console.log(this.state.duracion),
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
                <p className="texto"> Duración: {`${this.state.duracion} mins`}</p> 
                {this.state.generosTraidos.map((genero,idx)=>
                    this.state.listaGeneros.push(genero)
                )}
                <p>Géneros:{this.state.listaGeneros}</p>
            {/* </article>
             <article className="articulo_boton">
                {/* <button className="favoritos"> ${this.state.peliculaTraida.textoInicial} </button> */}
            </article> 
        </section>
            
        </React.Fragment>
    )
}}
export default DetailPelicula2;