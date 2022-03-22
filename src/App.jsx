import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PeopleDisplay from "./components/peopledisplay";
import FilmDisplay from "./components/filmsdisplay";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () =>{




    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path= '/' element={<Home/>} />
            <Route path= "/films" element={<FilmDisplay/>}/>
            <Route path= "/people" element={<PeopleDisplay/>}/>
            <Route path= "*" element={<h1>404 Not Found :(</h1>}/>
        </Routes>
        </BrowserRouter>
        
    )
}

export default App