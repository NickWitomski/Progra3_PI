import React, {Component} from "react";
import "./SearchResults.css";
import Home from "../../screens/Home/Home";

class FormDeBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            textoDelInput: "",
            allMovies: []
    }
        
    };

    evitarSubmit(event){
        event.preventDefault();
    }
    
    render( ){
        return(
            console.log(this.state.textoDelInput),
            console.log("aca estan todas las pelis"),
            console.log(this.state.allMovies),
            <React.Fragment>
                <section className="caja2"> 
                    <form className= "formulario" onSubmit={(event)=> this.evitarSubmit(event)} >
                        <input className="input" type ="text" value={this.props.textoDelInput} name="name" placeholder="Ingresa una película o serie" onChange={(event)=> this.props.guardarCambios(event)}/>
                        <button type="submit" ><i className="fa-solid fa-magnifying-glass"></i></button> 
                    </form>
                    <p className="error"> </p> 
                </section>
            </React.Fragment>
        )
    };
}

export default FormDeBusqueda;