import React, { useEffect } from "react";
import learning1 from "./images/learning1.png"
import learning2 from "./images/learning2.png"
import learning3 from "./images/learning3.png"
import learning4 from "./images/learning4.png"
import { ArrowLeft } from "@mui/icons-material";
import { ArrowRight } from "@mui/icons-material";

var index = 0;
var prevIndex = 0;
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

var timer = setInterval(next, 5000)
var callback

function next() {
    if (animating) {
        callback = next;
        return
    }

    prevIndex = index;
    if (index < slideImages.length-1) {
        index++
    } else {
        index = 0
    }

    update(false)
}

function prev() {
    if (animating) {
        callback = prev;
        return
    }

    prevIndex = index;
    if (index > 0) {
        index--
        
    } else {
        index = slideImages.length-1
    }

    update(true)
}

function showSlide(cert, prev) {
    if (prev) {
        cert.className = 'cert cert-show-prev'
    } else {
        cert.className = 'cert cert-show'
    }
    
    cert.addEventListener('animationend', function eventHandlier(e) { 
        animating = false;
        if (callback) {
            callback()
            callback = null;
        }
        cert.removeEventListener('animationend', eventHandlier)
    })
}

function clearSlide(oldCert, newCert, prev) {
    animating = true;
    if (prev) {
        oldCert.className = 'cert cert-invisible-prev'
    } else {
        oldCert.className = 'cert cert-invisible'
    }
    
    oldCert.addEventListener('animationend', function eventHandlier(e) { 
        oldCert.className = 'cert cert-none' 
        showSlide(newCert, prev)
        oldCert.removeEventListener('animationend', eventHandlier)
    })
}

var animating = false;
function update(prev, callback) {
    clearInterval(timer)
    timer = setInterval(next, 5000)

    let certs = document.getElementsByClassName("cert")
    for (let i = 0; i < certs.length; i++) {
        if (i == prevIndex) {
            clearSlide(certs[prevIndex], certs[index], prev)
        }
    }
}

const Learning = () => {
    return (        
        <div>
            <div>
                {
                    slideImages.map((val, key) => {
                        if (key == 0) {
                            return <img key={key} className="cert" src={val.image} />
                        } else {
                            return <img key={key} className="cert cert-none" src={val.image} />
                        }
                    })
                }      
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