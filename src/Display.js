import React, {Component} from 'react';

class Display extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <p>{this.props.time}</p>;
  }
}

export default Display;