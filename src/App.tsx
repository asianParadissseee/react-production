import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom"
import "./index.scss"
import {AboutPageAsync} from "./pages/about-page/about-page.async";
import {MainPageAsync} from "./pages/main-page/main-page.async";

const App = () => {
    return (
        <div className="app">
            <Link to={"/about"}>About</Link>
            <Link to={"/"}>Home</Link>
            <Suspense fallback={<div>....loading</div>}>

                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
