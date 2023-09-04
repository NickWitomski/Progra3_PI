import React, {Component} from "react"
import detallePelicula from "../screens/DetallePelicula/detallePelicula";

function detailPelicula (props){
    return(
        <React.Fragment>
        <section className="section_peli1"> 
            <h1>{titulo}</h1>
            <article className="articulo1">
                <img className="imagen" src={portada} alt={titulo} />
            </article>
        </section>
        <section className="section_peli2">
            <article class="articulo2">
                <p className="texto"> Fecha de estreno: {fecha_de_estreno}</p>
                <p className="texto"> Rating: ${rating}</p>
                <p className="texto"> Sinopsis: ${sinopsis}</p>
                <p className="texto"> Duración: ${duracion} mins</p>
                {/* <p className="texto"> Generos: ${listaGeneros}</p> */}
            </article>
            {/* <article className="articulo_boton">
                <button className="favoritos"> ${textoInicial} </button>
            </article> */}
        </section>
            
        </React.Fragment>
    )
}
// class detailPelicula extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             textoFavoritos = "Agregar a favoritos"
//         }
//     }

//     componentDidMount(){
//         let peliculaTraida = localStorage.getItem("pelicula")
//         if(peliculaTraida === null){
//             this.state.textoFavoritos = "Agregar a favoritos"
//         } else if ()
//     }
   


export default detailPelicula;