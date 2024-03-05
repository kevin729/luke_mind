import React from "react";
import ProfilePicture from "./images/me.png"

function Profile() {
    return (
        <div>
            <div>
                <div className="contact-header inline-block">
                    <h3>Email:</h3>
                </div>
                <div className="contact-detail inline-block">
                    <h3>thescience15@googlemail.com</h3>
                </div>
            </div>

            <div>
                <div className="contact-header inline-block">
                    <h3>Mobile:</h3>
                </div>

                <div className="contact-detail inline-block">
                    <h3>07955482627</h3>
                </div>
            </div>
            <img src={ProfilePicture} className="profile-picture" />
        </div>   
    )
}

export default Profile;