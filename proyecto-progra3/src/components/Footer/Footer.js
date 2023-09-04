import React from "react";
import "./Footer.css"

function Footer(){
    let listaLi = ["fa-brands fa-whatsapp","fa-regular fa-envelope","fa-brands fa-instagram","fa-solid fa-link","fa-solid fa-circle-info"]
    let listaEtiquetaP = ["Todos los derechos reservados","Copyright © 2003-2022 Fort Corporation","Marcos Pinto Escalier, Giuliana Molina y  Nicole Witomski"]
    return(
        <React.Fragment>
            <section>
                <article> 
                    {
                        listaLi.map(elemento =>
                            <li className="icono"><i className={elemento}></i> </li>
                        )
                    }
                    <ul className="contacto">
                        {
                            listaEtiquetaP.map(elementoPe =>
                                <p>{elementoPe} </p>
                            )
                        } 
                    </ul>
                </article>
                <article class="art2_footer">
                        <img className="logo_tmdb" src="../public/img/Logo_TMDB.svg" alt="Logo_themoviedatabase"/> 
                </article>
            </section>
        </React.Fragment>
    )}

export default Footer;
