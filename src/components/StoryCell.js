import React, { Component } from 'react';

export class StoryCell extends Component {
  constructor(valueId) {
    super();

    this.state = {
      stories: undefined,
      valueId: valueId.valueId,
      value: undefined,
    };
  }

    scaleSize(textstuff){
      const textlength = textstuff.length;

      if (textlength < 30){
        return <h2>{textstuff}</h2>
      }
      else if (textlength < 50){
        return <h3>{textstuff}</h3>
      }
      else if (textlength < 100){
        return <h3>{textstuff}</h3>
      }
      else {
        return <p>{textstuff}</p>
      }
      }

    render() {
      // const storyLink = this.props.storyLink;
      const cellStyle = this.props.cellStyle;
      const storyText = this.props.storyText;
      return (
        <div style={cellStyle}>
        {this.scaleSize(storyText)}
        </div>
      )
    }
}

export default StoryCell;
