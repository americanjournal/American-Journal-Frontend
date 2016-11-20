import React, { Component } from 'react';
import { Link } from 'react-router';
import '../index.css'
import ValueList from './ValueList';
import logo from './logo.png';
import menuIcon from './menuIcon.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        values: []
    };
  }

  componentDidMount() {
    const host = 'https://fast-fjord-29570.herokuapp.com';
    const url = `${host}/values`;

    fetch(url)
      .then(response => response.json())
      .then(values => {
        this.setState({
            values: values.map( function(x) {
                return {
                    name: x.name,
                    id: x.id
                }
            } ) 
          });
      })
      .catch(error => {
        console.error(error);
    });
  }

  render() {

    var headerStyle = {

    }

    var menuStyle = {
      width: "33%",
      display: "inline-block"
    }

    var menuStyleCenter = {
      width: "33.33%",
      display: "inline-block",
      textAlign: "center"
    }

    var iconStyle = {
      textAlign: "center"
    }

    var menuIconStyle = {
      marginLeft: "5px",
      marginBottom: "10px"
    }

    return (
      <div className="App">
      <header style={headerStyle}>
        <div style={menuStyle}>
          <Link to={"/values/"}>
            <img style={menuIconStyle} src={menuIcon} height="17px" width="14px" />
          </Link>
        </div>
        <div style={menuStyleCenter}>
          <Link to={`/`}>
            <img style={iconStyle} src={logo} height="42px" width="42px" />
          </Link>
        </div>
      </header>
      {this.props.children}
      </div>
    );
  }
}

export default App;
