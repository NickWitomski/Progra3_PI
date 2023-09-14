import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Pelicula from "../../components/Pelicula/Pelicula";
import PeliculasContainer from "../../components/PeliculasContainer/PeliculasContainer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasPopulares: [],
      peliculasCartelera: [],
      allMovies: []
    }
  };

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasPopulares: data.results,
        })
      )
      .catch(error => console.log(error));

    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=399cd9827f714613d04693cee425808c")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasCartelera: data.results,
        })
      )
      .catch(error => console.log(error));
  }


  render() {
    console.log("aca estan all movies")
    console.log(this.state.allMovies)
    console.log(this.state.peliculasPopulares)

    return (

      <React.Fragment>
        {this.state.peliculasPopulares ?
          <div>
            <h3> PELICULAS MÁS POPULARES </h3>
            <Link to="/verTodas/Populares"> Ver todas </Link>
            <section className="categoria1">
              <PeliculasContainer movies={this.state.peliculasPopulares} />
            </section>
          </div>
          : <h3> Cargando ...</h3>
        }
        {this.state.peliculasCartelera ?
          <div>
            <h3> PELICULAS EN CARTELERA </h3>
            <Link to="/verTodas/Cartelera"> Ver todas </Link>
            <section className="categoria2">
              <PeliculasContainer movies={this.state.peliculasCartelera} />
            </section>
          </div> :
          <h3> Cargando ...</h3>
        }

      </React.Fragment>
    )
  }
}

export default Home;

