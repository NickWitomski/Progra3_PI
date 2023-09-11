import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './screens/Home/Home.js';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Favoritos from './screens/Favoritos/Favoritos.js';
import NoEncontrada from './screens/NoEncontrado/noEncontrado.js';
// import Loading from './components/Loading/Loading.js';
import VerTodas from "./screens/VerTodas/VerTodas.js";
import DetallePelicula2 from './screens/DetallePelicula/DetallePelicula2.js';
import Pelicula from "./components/Pelicula/Pelicula";
// import SearchResults from "./screens/SearchResults/SearchResults"



function App() {
  return (
    <React.Fragment>
      <Header/>
      {/* <Loading/> */}
      <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/verTodas" component={VerTodas} />
      {/* <Route path="/searchResults" component={SearchResults} /> */}
      <Route path="/favoritos" exact = {true} component={Favoritos}/> 
      <Route path="/detallePelicula/:id" exact = {true} component={DetallePelicula2}></Route>
      <Route component={NoEncontrada}></Route>
      </Switch>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
