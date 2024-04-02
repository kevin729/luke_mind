import React from "react";
import ProfilePicture from "./images/me.png"

function Profile() {
    return (
        <div>
            <h1 className="pageHeading">Kevin Luke Martin</h1>
            <div className="margin-bottom">
                <div className="contact-header inline-block">
                    <h3>Email:</h3>
                </div>
                <div className="contact-detail inline-block">
                    <h3>thescience15@googlemail.com</h3>
                </div>
            </div>

            <div className="margin-bottom">
                <div className="contact-header inline-block">
                    <h3>Mobile:</h3>
                </div>

                <div className="contact-detail inline-block">
                    <h3>07955482627</h3>
                </div>
            </div>
            <div className="margin-bottom">
                <a href="https://github.com/kevin729" className="hyperlink" target="_blank">Github</a>
            </div>
            <div>
                <img src={ProfilePicture} className="profile-picture" />    
            </div>
            
        </div>   
    )
}

export default Profile;