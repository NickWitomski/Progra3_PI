import React, { Component } from "react";
import DetailPelicula from "../../components/DetailPelicula/DetailPelicula";

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculaLlego: [],
            idPelicula: this.props.match.params.id
        }
    };

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    peliculaLlego: data,
                })
            )
            .catch(error => console.log(error))
    }

    render() {
        return (

            console.log("hola aca estan las props"),
            console.log(this.props.match.params.id),
            console.log(this.state.idPelicula),
            console.log("trajo las peliculas"),
            console.log(this.state.peliculaLlego),
            console.log("generos"),
            console.log(this.state.peliculaLlego.genres),

            <DetailPelicula unaPelicula={[this.state.peliculaLlego]} generos={this.state.peliculaLlego.genres} />
            // <div>
            //     {this.state.pelicula ?
            //     <detailPelicula pelicula={this.state.pelicula}/>
            //         // <detailPelicula titulo={this.state.pelicula.original_title} portada={this.state.pelicula.poster_path} fecha_de_estreno={this.state.pelicula.release_date} rating={this.state.pelicula.vote_average} sinopsis={this.state.pelicula.overview} duracion={this.state.pelicula.runtime} />
            //         :
            //         <h3> Cargando ... </h3> 
            //     }
            // </div>

        )
    }

}

export default DetallePelicula;
