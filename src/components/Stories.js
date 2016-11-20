import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

class Stories extends Component {
  constructor() {
    super();

    this.state = {
      stories: undefined
    };
  }

  componentWillMount() {
    const valueMap = {'economy': 1, 'immigration':2, 'security':3};
    var apiValueKey = valueMap[this.props.params.storiesid];
    // console.log(apiValueKey);

    const host = 'https://fast-fjord-29570.herokuapp.com/';
    const url = `${host}values/${apiValueKey}.json`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(stories => {
      this.setState({ stories: stories.stories });
    })
    .catch(error => {
      console.error(error);
    });

    // this.setState({ stories: fixtureStories.stories }, () => {
    //   console.log(this.state.stories);
    // });
  }
    render() {
      var storyData = this.state.stories;
      // console.log('StoryData')
      // console.log(storyData)

      var valuesId = this.props.params.storiesid;
      
      return (
        <div>
        <Link to={"/"}> [Back] </Link>
        <Link to={"/newstory"}> [Add your story] </Link>
        <h1> {valuesId} </h1>

        {this.state.stories ? storyData.map(function(aStory){
          return (
             <p><Link to={"/values/"+valuesId+"/story/"+aStory.id}>{aStory.story}</Link></p>
            )
        }) : undefined}

        </div>
        )
  }
}

export default Stories;