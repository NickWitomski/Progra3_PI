import React, {Component} from "react"
import detallePelicula from "../screens/Pelicula/Pelicula.js";

function detailPelicula(props){
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

export default detailPelicula;