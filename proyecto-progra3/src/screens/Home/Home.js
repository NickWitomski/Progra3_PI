import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Pelicula from "../../components/Pelicula/Pelicula";
// import PeliculasContainer from "../../components/PeliculasContainer/PeliculasContainer";
// import FormDeBusqueda from "../../components/FormDeBusqueda/FormDeBusqueda";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasPopulares: [],
      peliculasCartelera: [],
      textoDelInput: "",
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

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=399cd9827f714613d04693cee425808c&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          allMovies: data.results,
        })
      )
      .catch(error => console.log(error));
  }

  guardarCambios(event) {
    this.setState({ textoDelInput: event.target.value }, () => console.log(this.state.textoDelInput))
  }


  render() {
    console.log("aca estan all movies")
    console.log(this.state.allMovies)
    console.log(this.state.peliculasPopulares)
   
    return (

      <React.Fragment>
        <h3> PELICULAS EN CARTELERA </h3>
        <Link to="/verTodas"> Ver todas </Link>
        <section className="categoria2">
          {this.state.peliculasCartelera.map((data, idx) =>
          <Pelicula key={data + idx} peliculas = {data} />
          )}
        </section>

      </React.Fragment>
      )
    //    <React.Fragment>
    //      <FormDeBusqueda/>
    //      <h3> PELICULAS MÁS POPULARES </h3>
    //      <Link to="/verTodas"> Ver todas </Link>
    //      <section className="categoria1">
    //        <PeliculasContainer movies={this.state.peliculasPopulares}/>
    //      </section>

    //      <h3> PELICULAS EN CARTELERA </h3>
    //      <Link to="/verTodas"> Ver todas </Link>
    //      <section className="categoria2">
    //      <PeliculasContainer movies={this.state.peliculasCartelera}/>
    //      </section>

    //      <FormDeBusqueda textoDelInput={this.state.textoDelInput} guardarCambios={(evento) => this.guardarCambios(evento)} />,


    //      {
    //        this.state.textoDelInput === "" ?
    //          <div>
    //             <h3> PELICULAS MÁS POPULARES </h3>
    //      <Link to="/verTodas"> Ver todas </Link>
    //      <section className="categoria1">
    //        <PeliculasContainer moviesPopulares={() => this.state.peliculasPopulares}/>
    //      </section>

    //            <h3> PELICULAS EN CARTELERA </h3>
    //            <Link to="/verTodas"> Ver todas </Link>
    //            <section className="categoria2">
    //              <PeliculasContainer moviesCartelera={() =>this.state.peliculasCartelera}/>
    //            </section>
    //         </div>
    //         :
    //          <div>
    //           {/* <h3> RESULTADOS DE BÚSQUEDA </h3>
    //           <section className="categoria2">
    //             {this.state.allMovies.map((data, idx) =>
    //               {if (this.state.textoDelInput.toLowerCase() === data.title){
    //                 <Pelicula key={data + idx} peliculas={data} />
    //               }}
    //             )}
    //           </section> */}
    //          </div>

    //      }
    //    </React.Fragment>
    // )
  }
  
}


export default Home;

