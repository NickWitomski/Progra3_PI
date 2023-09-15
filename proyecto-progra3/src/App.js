import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './screens/Home/Home.js';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Favoritos from './screens/Favoritos/Favoritos.js';
import NoEncontrada from './screens/NoEncontrado/noEncontrado.js';
import VerTodasPopulares from "./screens/VerTodas/VerTodasPopulares.js";
import DetallePelicula2 from './screens/DetallePelicula/DetallePelicula2.js';
import VerTodasCartelera from './screens/VerTodas/VerTodasCartelera.js';
import SearchResults from './screens/SearchResults/SearchResults.js';
import AboutUs from './screens/AboutUs/AboutUs.js';



function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/searchResults/:query" component={SearchResults}/>
      <Route path="/aboutUs" component={AboutUs}/>
      <Route path="/verTodas/Populares" component={VerTodasPopulares} />
      <Route path="/verTodas/Cartelera" component={VerTodasCartelera} />
      <Route path="/favoritos"  component={Favoritos}/> 
      <Route path="/detallePelicula/:id" exact = {true} component={DetallePelicula2}/>
      <Route component={NoEncontrada}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
