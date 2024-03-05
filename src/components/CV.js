import React from "react";
import cv from './docs/cv.pdf'

const CV = () => { return (
        <div>
            <h2>My CV</h2>
            <embed src={cv} className="cv" />
        </div>
    )
}

export default CV;