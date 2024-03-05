import React from "react";
import learning1 from "./images/learning1.png"
import learning2 from "./images/learning2.png"
import learning3 from "./images/learning3.png"
import learning4 from "./images/learning4.png"
import { ArrowLeft } from "@mui/icons-material";
import { ArrowRight } from "@mui/icons-material";

var index = 0;
const slideImages = [
    {
        image: learning1
    },
    {
        image: learning2
    },
    {
        image: learning3
    },
    {
        image: learning4
    },
]

function next() {
    if (index < slideImages.length-1) {
        index++
        update()
    }
    
    
}

function prev() {
    if (index > 0) {
        index--
        update()
    }
}

function update() {
    document.getElementById('cert').src = slideImages[index].image
}

const Learning = () => {
    return (
        <div>
            {
                // slideImages.map((image, key) => (

                //     <img key={key} className="cert" src={learning1} style={style}/>        

                // ))
            }
            <div>
                <img id="cert" className="cert" src={slideImages[index].image} />
            </div>
            

            <div className="inline-block" style={{width:"50px"}} onClick={prev}>
                <ArrowLeft/>
            </div>

            <div className="inline-block" style={{width:"50px"}} onClick={next} >
                <ArrowRight/>
            </div>
            
        </div>
    )
}

export default Learning;