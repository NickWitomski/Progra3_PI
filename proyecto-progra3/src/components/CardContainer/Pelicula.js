import React, {Component} from "react"

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
        <React.Fragment>
        <section className="section_peli1"> 
            <h1>{this.state.pelicula.title}</h1>
            <article className="a{rticulo1">
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
            </article>
        </section>
        <section className="section_peli2">
            <article class="articulo2">
                <p className="texto"> Fecha de estreno: {this.state.pelicula.release_date}</p>
                <p className="texto"> Rating: ${this.state.pelicula.vote_average}</p>
                <p className="texto"> Resumen: ${this.state.pelicula.overview}</p>
                <p className="texto"> Duración: ${this.state.pelicula.runtime} mins</p>
                {/* <p className="texto"> Generos: ${listaGeneros}</p> */}
            </article>
            {/* <article className="articulo_boton">
                <button className="favoritos"> ${textoInicial} </button>
            </article> */}
        </section>
            
        </React.Fragment>
    }

}