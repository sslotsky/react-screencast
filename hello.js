import React, {PropTypes} from 'react';
 
export class Hello extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return(<h1>Hello again there, you {this.props.name} you!!</h1>);
  }
}
