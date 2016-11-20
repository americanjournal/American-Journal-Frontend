import React, { Component } from 'react';
import logo from './logo.png';

class Topbar extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const hamburgerLink = ""
        const hamburgerStyle = {}
        const userProfileLink = ""
        const userProfileStyle = {}

        return (
          <div>
            <a href={hamburgerLink} style={hamburgerStyle}></a>
            <img src={logo} height="42px" width="42px" />
            <a href={userProfileLink} style={userProfileStyle}/>
          </div>
        );
    }
}

export default Topbar;
