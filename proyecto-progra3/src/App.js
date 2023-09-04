<<<<<<< HEAD
import './App.css';
import Home from './screenes/Home';
=======
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
>>>>>>> b8f77a57cbe840927556add1c9489c41c2544961

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact={true} component={Home} />
    <div className="App">
<<<<<<< HEAD
    </div>
    </React.Fragment>
  );
=======
      <Header/>
      <Footer/>
    </div>
  )
>>>>>>> b8f77a57cbe840927556add1c9489c41c2544961
}

export default App;
