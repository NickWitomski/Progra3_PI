import React, { Component } from "react";
import "./Home.css";
import Pelicula from "../../components/Pelicula/Pelicula";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasPopulares: [],
      peliculasCartelera: []
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
    console.log("hola")
    return (
      console.log("retornoCartelera"),
      console.log(this.state.peliculasPopulares),
      console.log(this.state.peliculasCartelera),
      <React.Fragment>
        <h3> PELICULAS MÁS POPULARES </h3>
        <section className="categoria1">
          {this.state.peliculasPopulares.map((data, idx) =>
            <Pelicula key={data + idx} peliculas={[data]} />
          )}
        </section>

        <h3> PELICULAS EN CARTELERA </h3>
        <section className="categoria2">
          {this.state.peliculasCartelera.map((data, idx) =>
            <Pelicula key={data + idx} peliculas={[data]} />
          )}
        </section>
      </React.Fragment>
    )
    
  }

}

export default Home;

