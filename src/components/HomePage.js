import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import logo from './logo.png';



class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      stories: undefined
    };
  }

  componentWillMount() {
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

    render() {
      var storyData = this.state.stories;
      var valuesId = this.props.params.storiesid;
      
      return (
        <div>
          <Link to={"/newstory"}> [Add your story] </Link>
          <img src={logo} height="42px" width="42px" />
          <h3> American Journal </h3>
          <h2> Justice </h2>

          {this.state.stories ? storyData.map(function(story){
              return (
                <p><Link to={"/stories/"+valuesId+"/"+story.id}>{story.story}</Link></p>
              )
          }) : undefined}
        </div>
      )
    }
}

export default HomePage;
