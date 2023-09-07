import React from "react";
import './Header.css';

function Header(){
    let listaUno = ['HOME', 'FAVORITOS', 'GÉNEROS']
    return(
        <React.Fragment>
            <header>
                <section className="caja1">
                    <img className="logo" src="./img/Logo prog.jpg" alt="logo"/> 

                    <nav className="navegador">
                        <ul> {listaUno.map((elemento,idx)=>
                            <li key={elemento+idx}> <a className ="textonav" href="./index.html"> {elemento} </a> </li>)}
                        </ul>
                    </nav> 
                </section>
                <section className="caja2"> 
                    <form className= "formulario" action="search-results.html" method="GET">
                        <input className="input" type ="text" defaultValue="" name="name" placeholder="Ingresa una película o serie"/>
                        <button type="submit"> <i className="fa-solid fa-magnifying-glass"></i></button> 
                    </form>
                    <p className="error"> </p> 
                </section>
            </header>
        </React.Fragment>
    
    )
}

export default Header;