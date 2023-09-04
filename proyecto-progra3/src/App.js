
import './App.css';
import Home from './screenes/Home';

import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';


function App() {
  return (
    <React.Fragment>
      <Route path="/" exact={true} component={Home} />
    <div className="App">

    </div>
    </React.Fragment>
  );

      <Header/>
      <Footer/>
    </div>
  )

}

export default App;
