import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import FormDeBusqueda from "../FormDeBusqueda/FormDeBusqueda"

function Header() {
    return (
        <React.Fragment>
            <header>
                <section className="caja1">
                    <img className="logo" src="/img/Logo prog.jpg" alt="logo" />

                    <nav className="navegador">
                        <ul>
                            <li> <Link to='/' className="link"> HOME </Link></li>
                            <li> <Link to='/Favoritos' className="link"> FAVORITOS </Link></li>
                            <li> <Link to='/aboutUs' className="link"> ABOUT US </Link></li>
                        </ul>
                    </nav>
                </section>
                <section className="caja2">
                    <FormDeBusqueda />
                </section>
            </header>
        </React.Fragment>

    )
}

export default Header;