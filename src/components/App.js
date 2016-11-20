import React, { Component } from 'react';
import '../index.css'
import ValueList from './ValueList';
import Topbar from './Topbar'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        values: []
    };
  }

  componentDidMount() {
    const host = 'https://fast-fjord-29570.herokuapp.com/';
    var url = `${host}values`;

    fetch(url)
      .then(response => response.json())
      .then(values => {
        this.setState({
            values: values.map( function(x) {
                return {
                    name: x.name,
                    id: x.id
                }
            } ) });
      })
      .catch(error => {
        console.error(error);
    });
    }

  render() {
    return (
      <div className="App">
      <Topbar />
      <ValueList valueListData={this.state.values} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
