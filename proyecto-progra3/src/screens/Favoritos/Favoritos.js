import React, { Component } from "react";
import Pelicula from "../../components/Pelicula/Pelicula";
import Home from "../Home/Home";

class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            favs: [],
            id: this.props.match.params.id,
        }
        console.log(this.props.match.params.id)
        console.log(this.state.favs)
    };

    componentDidMount(){
        let favs = [];
        let recuperoStorage = localStorage.getItem('favs')

        if (recuperoStorage !== null) {

            let storageToArray = JSON.parse(recuperoStorage)
            favs = storageToArray
        }
        let peliculasFavs = [];

        favs.map(unIdDelArray => (
            fetch(`https://api.themoviedb.org/3/movie/${unIdDelArray}?api_key=d1566b6a7005fc1288c0cf8495a15e2e&language=en-US`)
            .then(response => response.json())
            .then(data => {
                peliculasFavs.push(data);
                this.setState({
                    favs: peliculasFavs,
                })
            })
            .catch(error => console.log(error)) 
            ))
        }
        
    borrarPelicula(idPeliABorrar){
        let arrayFiltrado = this.state.favs.filter(unaPeli => unaPeli.id !== idPeliABorrar)
        
        this.setState({
            favs: arrayFiltrado
        })
    }
                
            
    

    render(){
        return(
            console.log('Traigo las pelis'),
            console.log(this.state.favs),
            <React.Fragment>
                <h3 className="titulo1"> FAVORITOS</h3>
                <section className="container">
                <article className="articulo"> 
                    <h2> {this.state.favs.title}</h2>
                        <img className="imagen" src={`https://image.tmdb.org/t/p/w500/${this.state.favs.poster_path}`} alt={`${this.state.favs.title}`} />
                </article>
                </section> 
            </React.Fragment>
        )

    }
        
        

    
}

export default Favoritos;
