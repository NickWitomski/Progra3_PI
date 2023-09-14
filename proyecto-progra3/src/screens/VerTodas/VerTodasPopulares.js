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
            masMovies: [],
            page: 1
        }
    };

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=399cd9827f714613d04693cee425808c`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    allMovies: data.results,
                    page: this.statepage + 1
                })
            )
            .catch(error => console.log(error));

            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=399cd9827f714613d04693cee425808c&page=${this.state.page}}`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    masMovies: data.results,
                    page: this.state.page + 1
                })
            )
            .catch(error => console.log(error));
    }

    guardarCambios(event) {
        this.setState({ textoDelInput: event.target.value }, () => console.log(this.state.textoDelInput))
    }

   cargarMasInfo() {
        if (this.state.textoBoton === "Cargar más inforamción") {
          this.setState({
            textoBoton: "Ver menos",
            descripcionMostrada: true
          })
        } else {
          this.setState({
            textoBoton: "Cargar más inforamción",
            descripcionMostrada: false
          })
        }

      }

    render() {
        return (

            <React.Fragment>
                {this.state.allMovies ?
                    <div>
                        <Filtrado textoDelInput={this.state.textoDelInput} guardarCambios={(evento) => this.guardarCambios(evento)} />
                        <h3> Peliculas populares: </h3>
                        <section className="categoria2">
                            {this.state.allMovies.map((data, idx) => {
                                if (data.title.toLowerCase().includes(this.state.textoDelInput.toLowerCase())) {
                                    return <Pelicula key={data + idx} peliculas={data} />
                                }
                            }
                            )

                            }
                        </section>
                       
                        <button onClick={() => this.cargarMasInfo()} className="botonPelicula"> {this.state.textoBoton} </button>
                        <section className={`${this.state.descripcionMostrada ? "OcultarDescripcion2":  "MostrarDescripcion"} categoria2`}>
                        {this.state.masMovies.map((data, idx) => {
                                if (data.title.toLowerCase().includes(this.state.textoDelInput.toLowerCase())) {
                                    return <Pelicula key={data + idx} peliculas={data} />
                                }
                            }
                            )

                            }
                        </section>
                    </div>
                
                    :
                    <h3> Cargando ... </h3>
                }

            </React.Fragment>
        )
    };
}

export default VerTodasPopulares;

