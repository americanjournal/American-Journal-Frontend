import React, { Component } from 'react';
import { Link } from 'react-router';
import addbutton from './addbutton.png';
import StoryCell from './StoryCell';
import NewStory from './NewStory';

const pageDiv = {
  "width" : "95%",
  "padding": "10px 10px 10px 10px"
}

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
      lineHeight: "36px",
      // "border" : "1px solid black",
      "boxShadow": "0px 1px 2px #B1B1B3, -2px 1px 3px #B1B1B3, 2px 1px 3px #B1B1B3",
      "borderRadius": "5px",
      "padding": "5px 5px 5px 5px",
      "margin": "3px 3px 3px 3px",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center"
    }

const storyStyleBigLight = {
      "width": "90%",
      lineHeight: "36px",
      // "border" : "1px solid black",
      "boxShadow": "0px 1px 2px #B1B1B3, -2px 1px 3px #B1B1B3, 2px 1px 3px #B1B1B3",
      "borderRadius": "5px",
      "padding": "5px 5px 5px 5px",
      "margin": "3px 3px 3px 3px",
      "float": "left",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center"
    }

const storyStyleSmallDark = {
      "width": "90%",
      lineHeight: "36px",
      // "border" : "1px solid black",
      "boxShadow": "0px 1px 2px #B1B1B3, -2px 1px 3px #B1B1B3, 2px 1px 3px #B1B1B3",
      "borderRadius": "5px",
      "padding": "5px 5px 5px 5px",
      "margin": "3px 3px 3px 3px",
      "float": "left",
      "alignItems": "center",
      "display": "flex",
      "justifyContent": "center",
      "backgroundColor" : "#F9F9F9"
    }

const addButtonStyle = {
  "textAlign": "center"
}

export class Stories extends Component {
  constructor(valueId) {
    super();

    this.state = {
      stories: undefined,
      valueId: valueId.valueId,
      value: undefined,
    };
  }

  componentDidMount() {
    var paramValueId = this.props.params && this.props.params.storiesid
    var valueId = this.state.valueId  || paramValueId

    this.state.valueId = valueId
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
    
    const valueURL = `${host}/values/${valueId}.json` 
    fetch(valueURL)
      .then(response => response.json())
      .then(value => {
          this.setState({value: value})
      })
      .catch(error => {
        console.error(error);
      });
  }

    addButton(){
      return (
        <div style={addButtonStyle}>
        <p></p>
        <Link to={"/newstory/"+this.state.value.id}>
        <img src={addbutton} height="100%" />
        <p>Add your story</p>
        </Link>
        </div>
        )
    }

    findMiddleStoryWhenDisplayed(storyArray){
      var charMiddle = 0;

      var allStoriesTotal = 0;
      for (var i = 0; i<storyArray.length; i++){
        allStoriesTotal += storyArray[i].story.length;
      }

      var charTotal = 0;
      for (var i = 0; i<storyArray.length; i++) {
        charTotal += storyArray[i].story.length;
        if (charTotal > allStoriesTotal/2){
          charMiddle = i;
          break;
        }
      }

      var halfArray = Math.ceil(storyArray.length / 2);

      var bestMiddle = Math.ceil((charMiddle-1+halfArray)/2);

      return bestMiddle

    }

    displayStories() {
      var valueId = this.state.value.id;

      var storyData = this.state.stories;
      var story1 = storyData.shift();
      console.log(storyData)

      // var half_length = Math.ceil(storyData.length / 2);
      var half_length = this.findMiddleStoryWhenDisplayed(storyData);
      var leftSide = storyData.slice(0, half_length);
      var rightSide = storyData.slice(half_length, storyData.length);

      return (
        <div style={contDiv}>


        <StoryCell 
        cellStyle={storyStyle1}
        storyText={story1.story} />

        <div style={halfDiv}>
        <div style={storyStyleSmallDark}>

        <NewStory valueId={this.props.valueId ? 1 : this.props.params.storiesid } />

        </div>
        {leftSide.map(function(astory,idx){
          if (idx%2 === 0){
            return (<StoryCell
              storyLink={'/stories/'+valueId+'/'+astory.id}
              cellStyle={storyStyleBigLight}
              storyText={astory.story}
              />)
          }
          else {
            return (<StoryCell
              storyLink={'/stories/'+valueId+'/'+astory.id}
              cellStyle={storyStyleSmallDark}
              storyText={astory.story}
              />)
          }
          })}
        </div>

        <div style={halfDiv}>
        {rightSide.map(function(astory,idx){
          if (idx%2 === 0){
            return (<StoryCell
              storyLink={'/stories/'+valueId+'/'+astory.id}
              cellStyle={storyStyleBigLight}
              storyText={astory.story}
              />)
          }
          else {
            return (<StoryCell
              storyLink={'/stories/'+valueId+'/'+astory.id}
              cellStyle={storyStyleSmallDark}
              storyText={astory.story}
              />)
          }
          })}
        </div>

        </div>
        )
    }

    render() {
      return (
        <div style={pageDiv}>
          <h3>{!this.state.value ? "" : this.state.value.name}  </h3>
          <p> {!this.state.value ? "" : this.state.value.prompt} </p>
          {this.state.stories ? this.displayStories() : undefined }
        </div>
      )
    }
}

export default Stories;
