import React, { Component } from "react";
import Filtrado from "../../components/Filtrado/Filtrado";
import Pelicula from "../../components/Pelicula/Pelicula";

class VerTodas extends Component {
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

    render() {
        return (
            console.log(this.state.allMovies),
            <React.Fragment>
                <Filtrado textoDelInput={this.state.textoDelInput} guardarCambios={(evento) => this.guardarCambios(evento)} />
                <h3> Filtrado </h3>
                <section className="categoria2">

                            <Pelicula key={data + idx} peliculas={data} />
    
                    {/* {this.state.allMovies.map((data, idx) => {
                        if (this.state.textoDelInput.toLowerCase() === data.title) {
                            <Pelicula key={data + idx} peliculas={data} />
                        }
                    }
                    )} */}
                </section>
            </React.Fragment>
        )
    };
}

export default VerTodas;

