import React from "react"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Apptuto from "./pages/Apptuto"
import Pays from "./pages/Pays"
import Folio from "./pages/Folio"
import ArticleID from "./pages/ArticleID"
import {BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/Article/:id" exact element={<ArticleID/>} />
                <Route path="/Apptuto" exact element={<Apptuto/>} />
                <Route path="/Pays" exact element={<Pays/>} />
                <Route path="/Folio" exact element={<Folio/>} />
                <Route path="*" element={ <NotFound/> } />
            </Routes>   
        </BrowserRouter>
     
    )

}
export default App