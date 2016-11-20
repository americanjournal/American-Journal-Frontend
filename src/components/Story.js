import React, { Component } from 'react';
import { ReactionList } from './ReactionList.js'

import { Link } from 'react-router';

class Story extends Component {
  constructor() {
    super();

    this.state = {
      story: undefined,
      value: undefined
    };
  }

  componentWillMount() {
    var storyId = this.props.params.storyid;
    var valueId = this.props.params.storiesid;

    const host = 'https://fast-fjord-29570.herokuapp.com';
    const storyURL = `${host}/stories/${storyId}.json`;

    const valueURL = `${host}/values/${valueId}.json` 
    fetch(storyURL)
    .then(response => response.json())
    .then(stories => {
      this.setState({ story: stories });
      console.log(stories.story.text)
    })
    .catch(error => {
      console.error(error);
    });

    fetch(valueURL)
    .then(response => response.json())
    .then(value => {
        this.setState({value: value})
    })
    .catch(error => {
      console.error(error);
    });

    // this.setState({ stories: fixtureStories.stories }, () => {
    //   console.log(this.state.stories);
    // });
  }

  headerText() {
    return this.state.value ? this.state.value.name : "Na na na na"
  }

    render() {
      var headerStyle = {
        textAlign: "center",
        fontSize: 32,
        color: "rgb(98, 113, 122)"
      }

      var storyContainerStyle = {
        textAlign: "justify",
        padding: "0 25px",
        fontSize: 16,
        color: "rgb(98, 113, 122)",
        marginBottom: "50px"
      }
      var promptStyle = {
        fontWeight: "bold" 
      }

      var valuesId = this.props.params.storiesid

      return (
        <div>
          <Link to={`/stories/${valuesId}/`}> [Back] </Link>
          <Link to={`/values/${valuesId}/`}> [Add your story] </Link>
          <h1 style={headerStyle}>{this.headerText()}</h1>
          <div style={storyContainerStyle}>
            <span style={promptStyle}>{this.state.value ? this.state.value.prompt : undefined}</span>
            <span>{this.state.story ? this.state.story.story.text : undefined} </span>
          </div>

          <ReactionList story={this.state.story} />
        </div>
      )
  }
}

export default Story;
