import React, { Component } from "react";
import Pelicula from "../../components/Pelicula/Pelicula";
import "./Favoritos.css";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favs: [],
        }
    };

    componentDidMount() {
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favs')
        if (recuperoStorage !== null) {
            let storageToArray = JSON.parse(recuperoStorage)
            favoritos = storageToArray

            let peliculasFavs = [];

            favoritos.map((unId) => (
                fetch(`https://api.themoviedb.org/3/movie/${unId}?api_key=d1566b6a7005fc1288c0cf8495a15e2e&language=en-US`)
                    .then(response => response.json())
                    .then(data => {
                        peliculasFavs.push(data);
                        this.setState({
                            favs: peliculasFavs,
                        })
                    })
                    .catch(error => console.log(error))
            ))

    
        }else{
           
        }

        
    }

    render() {
        return (
            console.log('Traigo las pelis'),
            console.log(this.state.favs),
            <React.Fragment>

                {this.state.favs ?
                    <div>
                        <h3 className="titulo1"> FAVORITOS</h3>
                        <section className="conteiner">
                            {this.state.favs.map((pelicula, idx) =>
                                <Pelicula key={pelicula + idx} peliculas={pelicula} />

                            )}
                        </section>
                    </div> : <h3> Cargando ... </h3>
                }
            </React.Fragment>
        )
    }
}

export default Favoritos;
