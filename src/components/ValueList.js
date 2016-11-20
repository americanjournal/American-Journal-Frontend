import React, { Component } from 'react';
import { Link } from 'react-router';

class ValueList extends Component {
  constructor(props) {
      super(props);

      this.state = {
        values: [],
      };
  }

  componentWillMount() {
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
      var ulStyle = {
        textAlign: "center",
        listStyle: "none",
      }

      var liStyle = {
        margin: "10px"
      }

      var linkStyle = {
        textDecoration: "none",
        fontColor: "rgb(98,113, 122)",
      }

      return (
        <ul style={ulStyle}>
              {this.state.values.map(function(value){
                  return <li style={liStyle} key={value.id}>
                    <Link style={linkStyle} to={"/stories/"+value.id}>{value.name}</Link>
                  </li>
              })}
        </ul>
    )
  }
}

export default ValueList;
