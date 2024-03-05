import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import CV from "./CV";
import './styles/body.css';
import Products from "./Products";
import Profile from "./Profile";

const Body = () => {
    return (
        <div className="main-body inline-block">
            <HashRouter>
                <Routes>
                    <Route exact path="/" Component={Welcome} />
                    <Route path="/cv" Component={CV} />
                    <Route path="/products" Component={Products} />
                    <Route path="/Profile" Component={Profile} />
                </Routes>
            </HashRouter>
        </div>
    )
}


export default Body;