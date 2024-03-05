import React from "react";
import cnn from "./images/CNN.png"
import drawdroid from "./images/drawdroid.jpg"

const Products = () => {
    return (
        <div>
            <h1>My Products</h1>
            <div>
                <div class="inline-block">
                    <div className="projectTitle">
                        <h3>PPCN</h3>
                    </div>

                    <img className="CNNImg" src={cnn}/>
                    <p className="projectDescription">A neural network capable of detecting patterns</p>
                </div>
            </div>
        </div>
    )
}

export default Products