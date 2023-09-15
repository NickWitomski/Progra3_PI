import React from 'react';
import './Loading.css'; // Importa los estilos CSS

class Loading extends Component {
  render() {
    return (
      <div className={`loading ${this.props.upcoming ? 'visible' : 'hidden'}`}>
        {this.props.upcoming && (
          <div className="loading-content">
            <img src="/web-5811_256.gif" alt="Loading Animation" />
            <p>Cargando...</p>
          </div>
        )}
      </div>
    );
  }
}

export default Loading;
