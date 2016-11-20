import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

class Stories extends Component {
  constructor() {
    super();

    this.state = {
      stories: undefined,
      valueName: undefined
    };
  }

  componentWillMount() {
    const valueId = this.props.params.storiesid
    const host = 'https://fast-fjord-29570.herokuapp.com/';
    const url = `${host}values/${valueId}.json`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          stories: data.stories,
          valueName: data.name
        });
      })
      .catch(error => {
        console.error(error);
      });
    }

    render() {
      var storyData = this.state.stories;
      var valuesId = this.props.params.storiesid;
      var valueName = this.state.valueName;
      
      return (
        <div>
          <Link to={"/"}> [Back] </Link>
          <Link to={"/newstory"}> [Add your story] </Link>
          <h1> {valueName} </h1>

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
