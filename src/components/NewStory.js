import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

class NewStory extends Component {
  constructor() {
    super();

    this.state = {
      story: undefined
    };
  }

  // componentWillMount() {
  //   var apiValueKey = this.props.params.storyid;

  //   const host = 'https://fast-fjord-29570.herokuapp.com/';
  //   const url = `${host}stories/${apiValueKey}.json`;
  //   console.log(url);
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(stories => {
  //     this.setState({ story: stories });
  //     console.log(stories.story.text)
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  //   // this.setState({ stories: fixtureStories.stories }, () => {
  //   //   console.log(this.state.stories);
  //   // });
  // }

    render() {
      
      return (
        <div>
        <Link to="/"> [Back] </Link>
        <h1> New Story!!! </h1>
        <h2> Select value, and write your story! </h2>
        </div>
        )
  }
}

export default NewStory;