import React, { Component } from "react";
import "./detailPelicula.css";
import DetallePelicula2 from "../../screens/DetallePelicula/DetallePelicula2";

class DetailPelicula2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textoBotonFavs: "Agregar a favoritos",
            pelicula: this.props.peliculas,
            favs: [],
        }
    }

    componentDidMount() {
        let chequearStorage = localStorage.getItem('favs')

        if (chequearStorage !== null) {
            let favs = JSON.parse(chequearStorage)

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
        return (
            <React.Fragment>
                <section className="section_peli1">
                    <h1>{this.state.pelicula.title}</h1>
                    <article className="articulo1">
                        <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                    </article>
                </section>
                <section className="section_peli2">
                    <article class="articulo2">
                        <p className="texto"> Fecha de estreno: {this.state.pelicula.release_date}</p>
                        <p className="texto"> Rating: {this.state.pelicula.vote_average}</p>
                        <p className="texto"> Sinopsis: {this.state.pelicula.overview}</p>
                        <p className="texto"> Duración: {this.state.pelicula.runtime} mins</p>
                        <p className="texto">Géneros: {this.state.pelicula.genres.map(genero=>
                    <li> {genero.name}</li>
                )}
                </p> 
                    </article>
                    <article className="articulo_boton">
                        <button onClick={() => this.agregarySacarDeFavoritos(this.state.id)} className="botonPelicula" >{this.state.textoBotonFavs}</button>
                    </article>
                </section>
            </React.Fragment>
        )
    }
}
export default DetailPelicula2;