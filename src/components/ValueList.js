import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

class ValueList extends Component {
  constructor(props){
    super(props);
    this.state = {
        values: ['economy','immigration','security']
    };
  }


  render() {
    return (
      <div>
      <Link to={"/newstory"}> [Add your story] </Link>
      <h1> Values </h1>
      <ul>
      {this.state.values.map(function(personalValue){
        return <li><Link to={"/stories/"+personalValue}>{personalValue}</Link></li>
      })}
      </ul>

      </div>
    );
  }
}

export default ValueList;
