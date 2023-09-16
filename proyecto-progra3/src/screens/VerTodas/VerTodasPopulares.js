import React, { Component } from "react";
import Filtrado from "../../components/Filtrado/Filtrado";
import Pelicula from "../../components/Pelicula/Pelicula";
import "./VerTodas.css"

class VerTodasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoDelInput: "",
            allMovies: [],
            textoBoton: "Cargar más inforamción",
            page: 2,
        }
    };

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    allMovies: data.results,
                })
            )
            .catch(error => console.log(error));
    }

    guardarCambios(event) {
        this.setState({ textoDelInput: event.target.value }, () => console.log(this.state.textoDelInput))
    }

    cargarMasInfo() {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=${this.state.page}`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    allMovies: this.state.allMovies.concat(data.results),
                    page: this.state.page + 1
                })
            )
            .catch(error => console.log(error));
    }

    render() {
        return (
            console.log("cambio el numero de pagina"),
            console.log(this.state.page),
            console.log(this.state.masMovies),
            <React.Fragment>
                {this.state.allMovies ?
                    <div>
                        <Filtrado textoDelInput={this.state.textoDelInput} guardarCambios={(evento) => this.guardarCambios(evento)} />
                        <h3 className='todas'> PELÍCULAS POPULARES </h3>
                        <section className="categoria2">
                            {this.state.allMovies.map((data, idx) => {
                                if (data.title.toLowerCase().includes(this.state.textoDelInput.toLowerCase())) {
                                    return <Pelicula key={data + idx} peliculas={data}/>
                                }
                            }
                            )

                            }
                        </section>
                        

                        <div className="divForm">
                           <button onClick={() => this.cargarMasInfo()} className="botonCargar"> {this.state.textoBoton} </button>
                        </div>

                        
                      
                    </div>

                    :
                    <h3> Cargando ... </h3>
                }

            </React.Fragment>
        )
    };
}

export default VerTodasPopulares;

