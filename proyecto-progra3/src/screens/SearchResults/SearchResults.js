import React, { Component } from "react";
import Pelicula from "../../components/Pelicula/Pelicula";
import FormDeBusqueda from "../../components/FormDeBusqueda/FormDeBusqueda";
import './Search.css';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: []
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

    render() {
        return (
            <React.Fragment>
               

                {this.state.resultados ?
                <div>
                    <h3> RESULTADOS DE BÚSQUEDA</h3>
                 <section className="conteiner">
                     {this.state.resultados.map((data, idx) => {
                            if (data.title.toLowerCase().includes(this.props.match.params.query.toLowerCase())) {
                                return <Pelicula key={data + idx} peliculas={data} />
                            }
                        }
                        )}
                 </section>
                </div>
                 
                       
                    :
                    <h3>Cargando ...  </h3>
                }
            </React.Fragment>
        )
    }
}

export default SearchResults;