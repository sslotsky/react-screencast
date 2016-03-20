import React from 'react';
import ReactDOM from 'react-dom';
import {Hello} from './hello.jsx';

class App extends React.Component {
  render() {
    return <Hello />
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
