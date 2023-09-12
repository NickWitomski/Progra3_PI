import React, { Component } from "react";
import Pelicula from "../../components/Pelicula/Pelicula";
import Home from "../Home/Home";

class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliFav: [],
            id: this.props.match.params.id,
        }
        console.log(this.props.match.params.id)
        console.log(this.state.peliFav)
    };

    componentDidMount(){
        console.log('Mount')
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
        .then((res) => res.json())
        .then((data) =>
        this.setState({
            peliFav: data,
        })
        )
        .catch(error => console.log(error))
    }

    render(){
        return(
            console.log('Traigo las pelis'),
            console.log(this.state.peliFav),
            <React.Fragment>
                <h3 className="titulo1"> FAVORITOS:</h3>
                <section className="container">
                <article className="articulo"> 
                    <h2> ${this.state.peliFav.title}</h2>
                        <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${this.state.peliFav.poster_path}`} alt={`${this.state.peliFav.title}`} />
                </article>
                </section> 
            </React.Fragment>
        )

    }
        
        

    
}

export default Favoritos;
