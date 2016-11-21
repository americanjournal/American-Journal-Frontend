import React, { Component } from 'react';
import { Link } from 'react-router';

class NewStory extends Component {
  constructor() {
    super();

    this.state = {
      story: ""
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
        story: event.target.value.slice(0, 500)
    });
  }

  render() {
    const prompt = this.state.prompt
    const valueName = this.state.valueName
    const placeholderText = "Add your story here"

    const textAreaStyle = {
      "width": "100%",
      "font": "inherit",
      "height": "160px"
    }

    const buttonStyle = {
      "width": "80%",
      "height": "36px",
      "line-height": "36px",
      "color": "white",
      "background-color": "rgb(24, 67, 161)",
      "font-size": "24px",
      "border": "none",
      "border-radius": "5px",
      "font": "inherit"
    }

    const formStyle = {
      "text-align": "center",
    }

    const characterLimitStyles = {
        "text-align": "right",
        "color": "rgb(187, 187, 187)",
        "padding-right": "10px",
        "padding-bottom": "10px",
        "font-size": "12px",
    }

    const story = this.state.story
    const charactersLeft = 500 - story.length

    return (
      <div>
        <Link to="/"> [Back] </Link>
        <h1> {valueName} </h1>
        <h2> {prompt} </h2>

          <form onSubmit={this.handleSubmit} style={formStyle}>
          <textarea value={story} onChange={this.handleTextChange} style={textAreaStyle} placeholder={placeholderText}/>
          <div style={characterLimitStyles}>{charactersLeft} characters left</div>
          <input type="submit" value="Submit Story" style={buttonStyle} />
        </form>
      </div>
    )
  }
}

export default NewStory;
