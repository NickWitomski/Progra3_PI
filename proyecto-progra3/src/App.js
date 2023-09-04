<<<<<<< HEAD

import './App.css';
import Home from './screenes/Home';

import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';

=======
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './screenes/Home/Home';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
>>>>>>> 67f4fbfcbb93ac77f5e222dcdf2d9388154ba724

function App() {
  return (
    <React.Fragment>
<<<<<<< HEAD
      <Route path="/" exact={true} component={Home} />
    <div className="App">

    </div>
    </React.Fragment>
  );

=======
>>>>>>> 67f4fbfcbb93ac77f5e222dcdf2d9388154ba724
      <Header/>
      <Switch>
      <Route path="/" exact={true} component={Home} />
      </Switch>
      <Footer/>
<<<<<<< HEAD
    </div>
  )

=======
    </React.Fragment>

  );
>>>>>>> 67f4fbfcbb93ac77f5e222dcdf2d9388154ba724
}

export default App;
