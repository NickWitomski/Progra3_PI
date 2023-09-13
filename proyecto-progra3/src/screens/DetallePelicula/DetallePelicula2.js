import React, { Component } from "react";
import DetailPelicula2 from "../../components/DetailPelicula/DetailPelicula2";

class DetallePelicula2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculaLlego: [],
            idPelicula: this.props.match.params.id
        }
    };

    componentDidMount() {
        console.log("Nicky pete, pero muy pete")
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
            console.log("trajo las peliculas"),
            console.log(this.state.peliculaLlego),
            console.log("generos"),
            console.log(this.state.peliculaLlego.genres),
            <article>
            <DetailPelicula2 portada={this.state.peliculaLlego.poster_path} titulo={this.state.peliculaLlego.original_title} fecha={this.state.peliculaLlego.release_date} rating={this.state.peliculaLlego.vote_average} sinopsis={this.state.peliculaLlego.overview} duracion={this.state.runtime} generos={this.state.genres}/>
            </article>
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

export default DetallePelicula2;
