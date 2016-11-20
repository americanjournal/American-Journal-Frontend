import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

class Story extends Component {
  constructor() {
    super();

    this.state = {
      story: undefined
    };
  }

  componentWillMount() {
    var apiValueKey = this.props.params.storyid;

    const host = 'https://fast-fjord-29570.herokuapp.com/';
    const url = `${host}stories/${apiValueKey}.json`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(stories => {
      this.setState({ story: stories });
      console.log(stories.story.text)
    })
    .catch(error => {
      console.error(error);
    });

    // this.setState({ stories: fixtureStories.stories }, () => {
    //   console.log(this.state.stories);
    // });
  }

    render() {
      var valuesId = this.props.params.storiesid
      
      return (
        <div>
        <Link to={"/"+valuesId}> [Back] </Link>
        <Link to={"/newstory"}> [Add your story] </Link>
        <h1> {this.state.story ? this.state.story.story.text : undefined} </h1>
        </div>
        )
  }
}

export default Story;