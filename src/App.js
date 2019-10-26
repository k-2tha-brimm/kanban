import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    // Pull list from localStorage if there is one
    // Otherwise populate a default list
  }
  
  render() {
    return (
      <div className="board">
        {list}
      </div>
    );
  }

}
