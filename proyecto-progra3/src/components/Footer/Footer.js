import React from "react";
import "./Footer.css"

function Footer() {
    let listaLi = ["fa-brands fa-whatsapp", "fa-regular fa-envelope", "fa-brands fa-instagram", "fa-solid fa-link", "fa-solid fa-circle-info"]
    let listaEtiquetaP = ["Todos los derechos reservados", "Copyright © 2003-2022 Fort Corporation", "Marcos Pinto Escalier, Giuliana Molina y  Nicole Witomski"]
    return (
        <React.Fragment>
            <footer>
                <section>
                    <article>

                        {
                            listaEtiquetaP.map((elementoPe, idx) =>
                                <p className="texto2" key={elementoPe + idx}>{elementoPe} </p>
                            )
                        }
                        <ul className="contacto">
                            {
                                listaLi.map((elemento, idx) =>
                                    <li key={elemento + idx} className="icono"><i className={elemento}></i> </li>
                                )
                            }
                        </ul>
                    </article>
                    <article className="art2_footer">
                        <img className="logo_tmdb" src="./img/Logo_TMDB.svg" alt="Logo_themoviedatabase" />
                    </article>
                </section>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
