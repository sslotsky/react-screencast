import React, {PropTypes} from 'react';
 
export class Hello extends React.Component {
  render() {
    return(<h1>Hello {this.props.name}!</h1>);
  }
}
