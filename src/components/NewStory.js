import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

class NewStory extends Component {
  constructor() {
    super();

    this.state = {
      story: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const valueId = this.props.valueId;
    console.log('yo'+valueId)
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

  // handleSubmit(event){
  //   event.preventDefault()
  //   console.log('Newstory is'+this.props.valueId)
  // }


  handleTextChange(event) {
    this.setState({
        story: event.target.value.slice(0, 500)
    });
  }

  render() {
    const placeholderText = "Add your story here"

    const hideStyle = {
        display: 'none'
    }

    const textAreaStyle = {
      "width": "95%",
      "font": "inherit",
      "resize": "none",
      "backgroundColor" : "#F9F9F9",
      "border": "none"
    }

    const buttonStyle = {
      "width": "80%",
      "height": "36px",
      "lineHeight": "36px",
      "color": "white",
      "backgroundColor": "rgb(24, 67, 161)",
      "fontSize": "24px",
      "border": "none",
      "borderRadius": "5px",
      "font": "inherit"
    }

    const formStyle = {
      "textAlign": "center",
    }

    const characterLimitStyles = {
        "textAlign": "right",
        "color": "rgb(187, 187, 187)",
        "paddingRight": "10px",
        "paddingBottom": "10px",
        "fontSize": "12px",
    }

    const story = this.state.story
    const charactersLeft = 500 - story.length

    return (
      <div>
          <form onSubmit={this.handleSubmit} style={formStyle}>
          <Textarea value={story} onChange={this.handleTextChange} style={textAreaStyle} placeholder={placeholderText}/>
          <div style={characterLimitStyles}>{charactersLeft} characters left</div>
          <input type="submit" value="Submit Story" style={buttonStyle} />
        </form>
      </div>
    )
  }
}

export default NewStory;
