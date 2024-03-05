import React from "react";
import './styles/header.css'
import { ViewAgenda } from "@mui/icons-material";
import banner from "./images/banner.jpeg"

const Heading = () => {
    return (
        <div className="head-wrapper" href={() => window.location.pathname = '/'}>
            <div className="banner" />
            <header className="head-navbar">
                <nav>
                    <div className="lefthead">

                    </div>

                    <div className="righthead">
                        <ul className="menu-list">
                            <li className="menu-item">
                                <div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Heading