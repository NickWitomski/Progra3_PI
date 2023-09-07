// import React, { Component } from "react";
import React from "react";
// import Home from "../../screens/Home/Home";
import "./Pelicula.css"

// function Pelicula (props){
//     return(
//         <React.Fragment>
//             <article className="articulo">
//               <img className="imagen" src={`https://image.tmdb.org/t/p/w500${portada}`} alt={titulo} />
//               <p className="titulocategorias"> ${titulo} </p>
//               <p> {descripcion}</p>
//               <button> Ver más</button>
//               <button> Ir a detalle </button>
//               <button> Agregar a favoritos</button>
//             </article>
//         </React.Fragment>
//     )
// }

// export default Pelicula;

// class detailPelicula extends Component{
//     constructor(props){
//         super(props)
//         this.state = {

//         }
//     }

// }

function Pelicula(props) {
  return (
    <React.Fragment>
      {
        props.peliculas.map(pelicula =>
          <p>{pelicula.title}</p>
        )
      }
    </React.Fragment>
  )
}

export default Pelicula;

