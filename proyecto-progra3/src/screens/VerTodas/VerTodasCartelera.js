import React, { Component } from "react";
import Filtrado from "../../components/Filtrado/Filtrado";
import Pelicula from "../../components/Pelicula/Pelicula";
import "./VerTodas.css"
import VerTodasContainer from "../../components/VerTodasContainer/VerTodasContainer";

class VerTodasCartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoDelInput: "",
            allMovies: [],
            textoBoton: "Cargar más inforamción",
            masMovies: [],
            page: 2,
        }
    };

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
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
        let pageNumero = this.state.page;

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=${pageNumero}`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    masMovies: data.results.concat(this.state.masMovies),
                    page: pageNumero + 1,
                })
            )
            .catch(error => console.log(error));
    }


    render() {
        return (
            console.log("aca estan vertodas"),
            console.log(this.state.allMovies),
            <React.Fragment>
                {this.state.allMovies ?
                    <div>
                        <Filtrado textoDelInput={this.state.textoDelInput} guardarCambios={(evento) => this.guardarCambios(evento)} />,
                        <h3> PELÍCULAS EN CARTELERA </h3>
                        <section className="categoria2">
                            {this.state.allMovies.map((data, idx) => {
                                if (data.title.toLowerCase().includes(this.state.textoDelInput.toLowerCase())) {
                                    return <Pelicula key={data + idx} peliculas={data} />
                                }
                            }
                            )}

                        </section>

                        <button onClick={() => this.cargarMasInfo()} className="botonPelicula"> {this.state.textoBoton} </button>
                        <div>
                            <section className="categoria2">
                                <VerTodasContainer movies={this.state.masMovies} />
                            </section>

                        </div>

                    </div> : <h3> Cargando ... </h3>
                }
            </React.Fragment>
        )
    };
}

export default VerTodasCartelera;