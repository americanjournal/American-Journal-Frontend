import React, { Component } from 'react';
import { Link } from 'react-router';

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
        return <h1>{textstuff}</h1>
      }
      else if (textlength < 50){
        return <h2>{textstuff}</h2>
      }
      else if (textlength < 100){
        return <h3>{textstuff}</h3>
      }
      else {
        return <p>{textstuff}</p>
      }
      }

    render() {
      const storyLink = this.props.storyLink;
      const cellStyle = this.props.cellStyle;
      const storyText = this.props.storyText;
      return (
        <Link to={storyLink}>
        <div style={cellStyle}>
        {this.scaleSize(storyText)}
        </div>
        </Link>
      )
    }
}

export default StoryCell;
