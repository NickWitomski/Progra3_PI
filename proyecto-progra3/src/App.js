import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './screens/Home/Home.js';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Favoritos from './screens/Favoritos/Favoritos.js';
import NoEncontrada from './screens/NoEncontrado/noEncontrado.js';
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula.js"

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/favoritos" exact = {true} component={Favoritos}/> 
      <Route path="/detallePelicula/:id" exact = {true} component={DetallePelicula}></Route>
      <Route component={NoEncontrada}></Route>
      </Switch>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
