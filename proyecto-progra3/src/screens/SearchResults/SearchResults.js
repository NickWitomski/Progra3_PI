import React, { Component } from "react";
import Pelicula from "../../components/Pelicula/Pelicula";
import FormDeBusqueda from "../../components/FormDeBusqueda/FormDeBusqueda";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados:[]
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=399cd9827f714613d04693cee425808c`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    resultados: data.results,
                })
            )
            .catch(error => console.log(error));
    }

    render(){
        return(
            console.log(this.props.match.params.query),
            console.log("resultado para"),
            console.log(this.state.resultados),
            <React.Fragment>
            <h3> RESULTADOS DE BÚSQUEDA:</h3>

            {this.state.resultados ? 
            <Pelicula peliculas={this.state.resultados}/>
            // {this.props.match.params.query === this.state.resultados.title
            //     <article>
            //         <Pelicula peliculas={this.state.resultados}/>
            //     </article>
            // }
                
            : 
            <h3>Cargando ...  </h3>
            }
            </React.Fragment>
        )
    }
}

export default SearchResults;