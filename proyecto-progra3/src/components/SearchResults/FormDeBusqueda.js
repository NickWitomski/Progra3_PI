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
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1")
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            allMovies: data.results,
          })
        )
        .catch(error => console.log(error));
    }

    evitarSubmit(event){
        event.preventDefault();
    }
    guardarCambios(event){
        this.setState({textoDelInput: event.target.value}
        )
    }
    render( ){
        return(
            console.log(this.state.textoDelInput),
            console.log("aca estan todas las pelis"),
            console.log(this.state.allMovies),
            <React.Fragment>
                <section className="caja2"> 
                    <form className= "formulario" onSubmit={(event)=>this.evitarSubmit(event)} >
                        <input className="input" type ="text" value={this.state.textoDelInput} name="name" placeholder="Ingresa una película o serie" onChange={(event)=> this.guardarCambios(event)}/>
                        <button type="submit" ><i className="fa-solid fa-magnifying-glass"></i></button> 
                    </form>
                    <p className="error"> </p> 
                </section>
            </React.Fragment>
        )
    };
}

export default FormDeBusqueda;