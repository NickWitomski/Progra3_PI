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

    // fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=399cd9827f714613d04693cee425808c")
    // .then((res) => res.json())
    // .then((dataCartelera) =>
    //   this.setState({
    //     peliculasCartelera: dataCartelera.results,
    //   })
    // )
    // .catch(error => console.log(error));
}

render () {
  console.log("hola")
  return (
    console.log("retorno"),
    console.log(this.state.peliculasPopulares),
    console.log(this.state.peliculasCartelera),
    this.state.peliculasPopulares.map((data,idx) => 
      <Pelicula key={data + idx} peliculas={data}/>
    )
    //   <React.Fragment>
    //   <main>
    //      <h3> PELICULAS MÁS POPULARES </h3>
    //      <section className="categoria1">
    //        {/* <Pelicula url="https://api.themoviedb.org/3/movie/popular?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1"/> */}
    //      </section>
    //      <h3> PELICULAS EN CARTLES  </h3>
    //      <section className="categoria2">
    //        <Pelicula url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}"/>
    //      </section>
    //  </main>
     
    //  </React.Fragment>
    // )
  );
}

}

export default Home;

