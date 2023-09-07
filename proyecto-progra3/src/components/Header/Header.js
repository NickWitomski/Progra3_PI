import React from "react";
import {Link} from 'react-router-dom';
import './Header.css';

function Header(){
    return(
        <React.Fragment>
            <header>
                <section className="caja1">
                    <img className="logo" src="./img/Logo prog.jpg"/> 

                    <nav className="navegador">
                        <ul> 
                            <li> <Link to='/'> HOME </Link></li>
                            <li> <Link to='./Favoritos'> FAVORITOS </Link></li>
                            <li> <Link to='/'> EL QUE FALTA </Link></li>
                        </ul>
                    </nav> 
                </section>
                <section className="caja2"> 
                    <form className= "formulario" action="search-results.html" method="GET">
                        <input className="input" type ="text" value="" name="name" placeholder="Ingresa una película o serie"/>
                        <button type="submit"> <i class="fa-solid fa-magnifying-glass"></i></button> 
                    </form>
                    <p className="error"> </p> 
                </section>
            </header>
        </React.Fragment>
    
    )
}

export default Header;