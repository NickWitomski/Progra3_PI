import React,{Component} from "react";
import {Link} from "react-router-dom";
import Header from "../Header/Header";

class FormDeBusqueda extends Component{
    constructor(props){
        super(props);
        this.state={
            textoDelInput: "",
            resultados: []
        }
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    guardarCambios(event) {
        this.setState({ textoDelInput: event.target.value }, () => console.log(this.state.textoDelInput))
    }

    render (){
        return(
            <React.Fragment>
                    <form className= "formulario" onSubmit={(event)=> this.evitarSubmit(event)} >
                        <input className="input" type ="text" value={this.props.textoDelInput} name="name" placeholder="Ingresa una película o serie" onChange={(event)=> this.guardarCambios(event)}/>
                        <Link to={`/searchResults/${this.state.textoDelInput}`}> <button type="submit" ><i className="fa-solid fa-magnifying-glass"></i> </button> </Link>
                    </form>
                    <p className="error"> </p> 
            </React.Fragment>
        )
    }
}

export default FormDeBusqueda;