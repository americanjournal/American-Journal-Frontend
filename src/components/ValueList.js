import React, { Component } from 'react';
import { Link } from 'react-router';

class ValueList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          values: []
      };
  }

  // componentWillMount() {
  //   const host = 'https://fast-fjord-29570.herokuapp.com/';
  //   const url = `${host}values`;

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(values => {
  //       this.setState({
  //           values: values.map( function(x) {
  //               return {
  //                   name: x.name,
  //                   id: x.id
  //               }
  //           } ) });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //   });
  // }

  render() {
      return (
        <div>
              {this.props.valueListData.map(function(value){
                  return <Link to={"/stories/"+value.id}>{value.name}</Link>
              })}
        </div>
    )
  }
}

export default ValueList;
