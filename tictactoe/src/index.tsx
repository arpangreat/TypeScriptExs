import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<React.StrictMode><App /></ React.StrictMode>,
                document.getElementById('root'));

class Board extends React.Component {
  renderSquare(i) { return <Square value = {i} />; }
}

class Square extends React.Component {
  render() {
    return (<button className = "square">{this.props.value}</ button>

    );
  }
}
