import React, { Component } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas:[],
      titulo:[],
      portada:[],
      fecha_de_estreno:[],
      rating:[],
      sinopsis:[],
      duracion:[],
      imgUrl:""
    }
  };

componentDidMount() {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1`)
    .then((res) => res.json())
    .then((data) =>
      this.setState({
        pelicula:data.results,
        
      })
    )
    .catch(error => console.log(error));
}

render () {
  console.log(this.state.pelicula)
  return (
    <React.Fragment>
     <main>
        <h3> PELICULAS POPULARES </h3>
        <section className="categoria1">
        </section>
        <h3> TOP RANKING SERIES  </h3>
        <section className="categoria2">
        </section>
        <h3> TOP RANKING PELICULAS </h3>
        <section className="categoria3">
        </section>
    </main>
    
    </React.Fragment>
  );
}

}


export default Home;
