import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

class NewStory extends Component {
  constructor() {
    super();

    this.state = {
      story: undefined
    };
  }

  componentWillMount() {
    var valueId = this.props.params.valueId;

    const host = 'https://fast-fjord-29570.herokuapp.com/';
    const url = `${host}/values/${valueId}.json`;

    fetch(url)
      .then(response => response.json())
      .then(function(value) {
          console.log(value)
        this.setState(
          { valueName: value.name,
            prompt: value.prompt
          });
      }.bind(this))
      .catch(error => {
        console.log(error)
      });
    }

  render() {
    const prompt = this.state.prompt
    console.log(this.state)
    return (
      <div>
        <Link to="/"> [Back] </Link>
        <h1> {prompt} </h1>
        <h2> Select value, and write your story! </h2>
      </div>
    )
  }
}

export default NewStory;
