import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './screens/Home/Home.js';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Favoritos from './screens/Favoritos/Favoritos.js';
import NoEncontrada from './screens/NoEncontrado/noEncontrado.js';
import detallePelicula from './screens/DetallePelicula/detallePelicula';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/favoritos" component={Favoritos}/> 
      <Route path="/detallePelicula/:id" component={detallePelicula}></Route>
      <Route component={NoEncontrada}></Route>
      </Switch>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
