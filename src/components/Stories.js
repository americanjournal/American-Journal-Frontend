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
    const valueId = this.props.params.storiesid
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

    render() {
      var storyData = this.state.stories;
      var valuesId = this.props.params.storiesid;
      
      return (
        <div>
          <Link to={"/"}> [Back] </Link>
          <Link to={"/newstory"}> [Add your story] </Link>
          <h1> {valuesId} </h1>

          {this.state.stories ? storyData.map(function(story){
              return (
                <p><Link to={"/stories/"+valuesId+"/"+story.id}>{story.story}</Link></p>
              )
          }) : undefined}
        </div>
      )
    }
}

export default Stories;
