import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Home.css"

function Home() {
  return (
    <React.Fragment>
     <main>
        <h3> PELICULAS POPULARES </h3>
        <section class="categoria1">
        </section>
        <h3> TOP RANKING SERIES  </h3>
        <section class="categoria2">
        </section>
        <h3> TOP RANKING PELICULAS </h3>
        <section class="categoria3">
        </section>
    </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
