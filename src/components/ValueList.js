import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

class ValueList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          values: []
      };
  }

  componentWillMount() {
    const host = 'https://fast-fjord-29570.herokuapp.com/';
    const url = `${host}values`;

    fetch(url)
      .then(response => response.json())
      .then(values => {
        this.setState({
            values: values.map( function(x) {
                return {
                    name: x.name,
                    id: x.id
                }
            } ) });
      })
      .catch(error => {
        console.error(error);
    });
  }

  render() {
      return (
        <div>
          <Link to={"/newstory"}>[Add your story]</Link>
          <h1>Values</h1>
          <ul>
              {this.state.values.map(function(value){
                  return <li><Link to={"/stories/"+value.id}>{value.name}</Link></li>
              })}
          </ul>
        </div>
    )
  }
}

export default ValueList;
