import Pelicula from "../Pelicula/Pelicula"

function PeliculasContainer (props){
    return (
        <>
        {props.movies ?
        props.moviesPopulares.map((data, idx) =>
            <Pelicula key={data + idx} peliculas={data} />)
        // props.moviesCartelera.map((data, idx) =>
        //     <Pelicula key={data + idx} peliculas={data} />
           
           :
          <h2>Loading...</h2>
}
          </>
    ) 
}
export default PeliculasContainer