import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom"
import "./styles/index.scss"
import {AboutPageAsync} from "./pages/about-page/about-page.async";
import {MainPageAsync} from "./pages/main-page/main-page.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/class-names/class-names";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>

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
