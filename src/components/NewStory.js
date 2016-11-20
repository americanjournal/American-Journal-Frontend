import React, { Component } from 'react';
import { Link } from 'react-router';

class NewStory extends Component {
  constructor() {
    super();

    this.state = {
      story: "HIP HOP THIS IS A MUTHAFUCKING STORY"
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  componentWillMount() {
    var valueId = this.props.params.valueId;

    const host = 'https://fast-fjord-29570.herokuapp.com/';
    const url = `${host}/values/${valueId}.json`;

    fetch(url)
      .then(response => response.json())
      .then(function(value) {
        this.setState(
          { valueName: value.name,
            prompt: value.prompt
          });
      }.bind(this))
      .catch(error => {
        console.log(error)
      });
    }

  handleSubmit(event) {
    event.preventDefault()
    const valueId = this.props.params.valueId;
    const host = 'https://fast-fjord-29570.herokuapp.com/'
    const url = `${host}values/${valueId}/stories.json`;

    var request = new Request(url, {headers: new Headers({'Content-Type': 'application/json'})});

    const body = JSON.stringify({
      story: {
        story: this.state.story
      }
    });

    fetch(request, {
      method: 'post',
      body: body
    }).then(function(response){
      console.log(response);
    });

  }

  handleTextChange(event) {
    this.setState({
        story: event.target.value
    });
  }

  render() {
    const prompt = this.state.prompt
    const valueName = this.state.valueName

    const textAreaStyle = {
      "width": "100%"
    }

    return (
      <div>
        <Link to="/"> [Back] </Link>
        <h1> {valueName} </h1>
        <h2> {prompt} </h2>

        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.story} onChange={this.handleTextChange} style={textAreaStyle}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewStory;
