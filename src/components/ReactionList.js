import React, { Component } from 'react';

export class ReactionList extends Component {

	constructor(story) {
		super()
		this.state = {
			story: story
		}
	}

	componentWillMount() {

	}

	render() {
		var reactions = [
			"respect for the writer", "sad", 
			"surprised", "hopeful", "happy", 
			"angry", "disgusted", "sorry"
		]

		var reactionSectionStyle = {
	        backgroundColor: "rgba(216, 223, 227, 0.48)",
	        padding: 0,
	        overflow: 'auto',
	        zoom: '1',
	        textAlign: 'center'
	    }

	    var reactionHeaderStyle = {
        	color: "rgb(98, 113, 122)"
      	}

		var reactionStyle = {
        	backgroundColor: 'white',
        	borderRadius: '5px',
        	borderWidth: "1px",
        	borderColor: 'gray',
        	padding: '10px',
        	margin: '5px',
        	float: 'left'
      	}

      	return (
  			<div style={reactionSectionStyle}>
  				<h3 style={reactionHeaderStyle}>How did this story make you feel?</h3>
	  			{reactions.map(function(reaction){
	  				return <span style={reactionStyle} key={reaction}>{reaction}</span>
	  			})}
	  		</div>
      	)
  }
}