import React, { Component } from "react";
import Filtrado from "../../components/Filtrado/Filtrado";
import Pelicula from "../../components/Pelicula/Pelicula";
import "./VerTodas.css"

class VerTodasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoDelInput: "",
            allMovies: []
        }
    };

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=399cd9827f714613d04693cee425808c`)
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

    cargarMas(eventoMasInfo){
        
    }


    render() {
        return (
            console.log("aca estan vertodas"),
            console.log(this.state.allMovies),
            <React.Fragment>
                <Filtrado textoDelInput={this.state.textoDelInput} guardarCambios={(evento) => this.guardarCambios(evento)} />
                <h3> Peliculas populares: </h3>
                <section className="categoria2">
                {this.state.allMovies.map((data,idx)=>
                {
                    if (data.title.toLowerCase().includes(this.state.textoDelInput.toLowerCase())){
                        return <Pelicula key={data + idx} peliculas={data} />
                    }
                }
                )

                }
                </section>
                <button className="botonPelicula"> Cargar más informacion </button>
            </React.Fragment>
        )
    };
}

export default VerTodasPopulares;

