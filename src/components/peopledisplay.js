import React from "react";
import { useEffect, useState } from "react";

const PeopleDisplay = () =>{
    const [people, setPeople] = useState([])

    useEffect(() =>{
        fetch('https://ghibliapi.herokuapp.com/people/')
        .then(res => res.json())
        .then(allPeople => setPeople(allPeople))
    }, [])
    return(
        <main className='container'>
            <section className='row justify-content-center mt-5'>
                {people.map(person =>(
                    <div className='col-md-6' key={person.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h3 className="card-title">{person.name}</h3>
                                <p className="card-text">{person.gender}</p>
                                <p className="card-text">{person.age}</p>
                                <a href={person.url} target= '_blank'>Learn More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
        
        
        
    )
}

export default PeopleDisplay