import React, { useEffect, useState } from "react";

const FilmDisplay = () => {
    const [Film, setFilm] = useState([])

    useEffect(()=>{
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then(res => res.json())
        .then(allFilms => setFilm(allFilms))
    }, [])

    return(
        <main className='container'>
            <section className='row justify-content-center mt-5'>
                {Film.map(film =>(
                    <div className='col-md-6' key={film.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h3 className="card-title">{film.title}</h3>
                                <p className="card-text">{film.director}</p>
                                <p className="card-text">{film.description}</p>
                                <a href={film.url} target= '_blank'>Learn More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
        
    )
}
export default FilmDisplay