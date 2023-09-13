import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import Home from "../../screens/Home/Home";

class PeliculasContainer extends Component{

     constructor(props) {
         super(props)
     }

         render (){
            return(
             <React.Fragment>
             {this.props.movies.map((data, idx) =>
                <Pelicula key={data + idx} peliculas={data} />)}
                : (
                  <div>
                  <img src="./img/Loader.gif"></img>
                  </div>
                )
             </React.Fragment>
             )

        
     }
        
} 
export default PeliculasContainer; 