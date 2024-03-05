import React, { Component } from "react";
import Introduction from "./Introduction";
import Learning from "./Learning";

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {username: "", isLoggedIn: false}
    }
    
    render() {
        return (
            <div>
                <h1>Welcome { this.state.isLoggedIn ? this.state.username : 'Guest' }</h1>
                <Introduction />
                <Learning />
            </div>
        )
    }
}

export default Welcome;