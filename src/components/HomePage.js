import React, { Component } from 'react';
import { Stories } from './Stories.js'

class HomePage extends Component {  
  render() {      
    return (
      <div>
        <Stories valueId={1}/>
      </div>
    )
  }
}

export default HomePage;
