import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import addbutton from './addbutton.png';

const contDiv = {
  "margin":"auto",
  "padding":"auto"
}

const halfDiv = {
  "width" : "50%",
  "float" : "left"
}

const storyStyle1 = {
      "width": "95%",
      "height": "150px",
      "overflow" : "hidden",
      "line-height": "36px",
      "font-size": "13px",
      "border" : "1px solid black",
      "box-shadow": "5px 5px 2px #888888",
      "border-radius": "5px",
      "padding": "5px 5px 5px 5px",
      "margin": "3px 3px 3px 3px"
    }

const storyStyleA = {
      "width": "90%",
      "height": "300px",
      "overflow" : "hidden",
      "line-height": "36px",
      "font-size": "13px",
      "border" : "1px solid black",
      "box-shadow": "5px 5px 2px #888888",
      "border-radius": "5px",
      "padding": "5px 5px 5px 5px",
      "margin": "3px 3px 3px 3px",
      "float": "left"
    }

const storyStyleB = {
      "width": "90%",
      "height": "150px",
      "overflow" : "hidden",
      "line-height": "36px",
      "font-size": "8px",
      "border" : "1px solid black",
      "box-shadow": "5px 5px 2px #888888",
      "border-radius": "5px",
      "padding": "5px 5px 5px 5px",
      "margin": "3px 3px 3px 3px",
      "float": "left"
    }

const addButtonStyle = {
  "text-align": "center"
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

    addButton(){
      return (
        <div style={addButtonStyle}>
        <p></p>
        <Link to={"/newstory/1"}>
        <img src={addbutton} height="50%" width="50%" />
        <p>Add your story</p>
        </Link>
        </div>
        )
    }

    styleStories(storyList) {
      storyList.map(function(story, idx){
        if (idx % 2 == 0){
          return <div style={storyStyleA}>{story}</div>
        }
        else {
          return <div style={storyStyleB}>{story}</div>
        }
      })
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
        <div style={contDiv}>

        <div style={storyStyle1}>
        {story1}
        </div>

        <div style={halfDiv}>
        <div style={storyStyleB}>
        {this.addButton()}
        </div>
        <div style={storyStyleA}>
        {story2}
        </div>
        </div>

        <div style={halfDiv}>
        <div style={storyStyleA}>
        {story3}
        </div>
        <div style={storyStyleB}>
        {story4}
        </div>
        </div>

        </div>
        )
    }

    render() {
      var storyData = this.state.stories;
      var valuesId = this.props.params.storiesid;
      
      return (
        <div>
          <h3> JUSTICE </h3>
          <p> My beliefs in justice come from my experience with... </p>
          {this.state.stories ? this.displayStories() : undefined }
        </div>
      )
    }
}

export default HomePage;
