import React from 'react';
import ReactDOM from 'react-dom';
import {Hello} from './hello';

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: 'world' };
  };

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={::this.handleChange} />
        <Hello name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
