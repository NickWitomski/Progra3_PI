import React, { Component } from "react";
import DetailPelicula2 from "../../components/DetailPelicula/DetailPelicula2";

class DetallePelicula2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculaLlego: false,
            idPelicula: this.props.match.params.id,
        }
    };

    componentDidMount() {
        console.log(this.state.idPelicula)
        fetch(`https://api.themoviedb.org/3/movie/${this.state.idPelicula}?api_key=399cd9827f714613d04693cee425808c&language=en-US`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    peliculaLlego: data,
                })
            )
            .catch(error => console.log(error))  
    }

   

    render() {
        return (
           
            <React.Fragment>
            {this.state.peliculaLlego ? 
            <article>
                <DetailPelicula2 peliculas={this.state.peliculaLlego}/>
            </article>
            : 
            <h3>Cargando ...  </h3>
            }
            </React.Fragment>

        )
    }

}

export default DetallePelicula2;
