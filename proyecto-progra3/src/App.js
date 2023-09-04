import './App.css';
import Home from './screenes/Home';

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact={true} component={Home} />
    <div className="App">
    </div>
    </React.Fragment>
  );
}

export default App;
