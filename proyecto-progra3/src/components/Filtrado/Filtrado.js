import React, { Component } from "react";
import "./Filtrado.css";
import VerTodas from "../../screens/VerTodas/VerTodasPopulares";
import PeliculasContainer from "../PeliculasContainer/PeliculasContainer";

class Filtrado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoDelInput: "",
            peliculas: this.props.peliculas
        }

    };

    evitarSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            console.log(this.state.textoDelInput),
            console.log("aca estan todas las pelis"),
            console.log(this.state.peliculas),
            <React.Fragment>
                <form className="formulario" onSubmit={(event) => this.evitarSubmit(event)} >
                    <input className="input" type="text" value={this.props.textoDelInput} name="name" placeholder="Ingresa una película o serie" onChange={(event) => this.props.guardarCambios(event)} />
                </form>
                <p className="error"> </p>
            </React.Fragment>
        )
    };
}

export default Filtrado;