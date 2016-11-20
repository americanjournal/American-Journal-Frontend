import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

const storyStyle1 = {
      "width": "100%",
      "height": "36px",
      "line-height": "36px",
      "color": "white",
      "background-color": "rgb(24, 67, 161)",
      "font-size": "18px",
      "border": "none",
      "border-radius": "5px",
    }

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      stories: undefined
    };
  }

  componentDidMount() {
    var valueId = this.props.params.storiesid
    var valueId = 1
    const host = 'https://fast-fjord-29570.herokuapp.com/';
    const url = `${host}values/${valueId}.json`;

    fetch(url)
      .then(response => response.json())
      .then(stories => {
        this.setState({ stories: stories.stories });
      })
      .catch(error => {
        console.error(error);
      });
    }

    displayStories() {
      var storyData = this.state.stories;
      var valuesId = this.props.params.storiesid;
      console.log(storyData)
      var story1 = storyData[0].story;
      var story2 = storyData[1].story;
      var story3 = storyData[2].story;
      var story4 = storyData[3].story;
      var story5 = storyData[4].story;

      return (
        <div>
        <div style={storyStyle1}>
        {story1}
        </div>

        <div style={storyStyle1}>
        {story2}
        </div>

        <div style={storyStyle1}>
        {story3}
        </div>

        <div style={storyStyle1}>
        {story4}
        </div>
        </div>
        )
    }

    render() {
      var storyData = this.state.stories;
      var valuesId = this.props.params.storiesid;
      
      return (
        <div>
          <Link to={"/newstory"}> [Add your story] </Link>
           <h3> American Journal </h3>
          <h2> JUSTICE </h2>
          <p> My beliefs in justice come from... </p>
          {this.state.stories ? this.displayStories() : undefined }
        </div>
      )
    }
}

export default HomePage;
