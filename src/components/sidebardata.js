import React  from "react";
import { Home } from "@mui/icons-material";
import { TextSnippet } from "@mui/icons-material";
import { Code } from "@mui/icons-material";
import { Person } from "@mui/icons-material";

export const Sidebardata = [
    {
        title:"Home",
        icon:<Home />,
        link: "/luke_mind/"
    },
    {
        title:"My CV",
        icon:<TextSnippet />,
        link: "/luke_mind/#/cv"
    },
    {
        title:"Products",
        icon:<Code />,
        link: "/luke_mind/#/products"
    }
]