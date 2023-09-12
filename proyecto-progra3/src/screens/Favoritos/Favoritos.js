import React, { Component } from "react";
import Pelicula from "../../components/Pelicula/Pelicula";
import Home from "../Home/Home";

class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliViene: [],
            id: this.props.match.params.id,
        }
        console.log(this.props.match.params.id)
    };

    componentDidMount(){
        console.log('Mount')
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
        .then((res) => res.json())
            .then((data) =>
                this.setState({
                    peliViene: data,
                })
            )
            .catch(error => console.log(error))
    }

    render(){
        return(
            console.log('Traigo las pelis'),
            console.log(this.state.peliViene),
            <React.Fragment>
                <h3 className="titulo1"> FAVORITOS:</h3>
                <section className="container">
                <article className="articulo"> 
                    <h2> ${peliViene.title}</h2>
                        <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${peliViene.poster_path}`} alt={`${peliViene.title}`} />
                </article>
                </section> 
            </React.Fragment>
        )

    }
        
        

    
}

export default Favoritos;
