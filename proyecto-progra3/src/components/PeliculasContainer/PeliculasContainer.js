import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import Home from "../../screens/Home/Home";

class PeliculasContainer extends Component{

     constructor(props) {
         super(props);
         this.state = {
           populares: this.props.moviesPopulares,
           cartelera: this.props.moviesCartelera,
         }
     }

         render (){
            return(
             <React.Fragment>
               {/* <Pelicula peliculas={this.state.populares}/> */}
             {/* {this.state.populares.map((data, idx) =>
                <Pelicula key={data + idx} peliculas={data} />)} */}

                {/* <Pelicula peliculas = {this.state.cartelera}/> */}
              {/* {this.state.cartelera.map((data, idx) => 
                 <Pelicula key={data + idx} peliculas={data} />)} */}
            </React.Fragment>

             
             )

        
     }
        
} 
export default PeliculasContainer; 