import React, { useState, useEffect } from 'react';
import "./Loading.css"
import loadingAnimation from './web-5811_256.gif'

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`loading ${isLoading ? 'visible' : 'hidden'}`}>
      {isLoading && (
        <div>
          <img src={loadingAnimation} alt="Loading Animation" />
          <p>Cargando...</p>
        </div>
      )}
      <div className={`content ${isLoading ? 'hidden' : 'visible'}`}>
      </div>
    </div>
  );
}

export default Loading;
