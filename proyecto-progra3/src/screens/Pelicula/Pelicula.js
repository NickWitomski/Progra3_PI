import React, {Component} from "react"
import detailPelicula from "../components/DetallePelicula/detailPelicula.js";

class detallePelicula extends Component {
    constructor (props){
        super(props);
        this.state = {
            pelicula: {},
        }
    };

    componentDidMount(){
        fetch (`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
        .then(resp => resp.json())
        .then(data =>
            this.setState({
                pelicula:data
            })
        )
        .catch (error => console.log(error))
    }

    render(){
        return(
            <detailPelicula titulo={this.state.pelicula.title} portada ={this.state.pelicula.poster_path} fecha_de_estreno={this.state.pelicula.release_date} rating={this.state.pelicula.vote_average} sinopsis={this.state.pelicula.overview} duracion={this.state.pelicula.runtime}/>
        )
    }

}

export default detallePelicula;
