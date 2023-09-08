import React, {Component} from "react";
import './Favoritos.css';

class Favoritos extends Component {
    constructor(){
        super();
        this.state = {
            favs : [],
        };
    }

    render(){
        console.log(this.state.favs)
        return(
            <React.Fragment>

            </React.Fragment>
        )

    }
}

export default Favoritos;
