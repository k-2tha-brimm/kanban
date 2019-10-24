import React from 'react';
import './App.css';

class App extends React.Component {

  getTask() {
    let task = window.prompt('Please enter a task.');

    let para = document.createElement("P");

    let list = document.getElementsByClassName('person1')[0];
    let newTask = document.createTextNode(task);
    para.appendChild(newTask);
    list.appendChild(para);
  }
  
  render() {
    return (
      <div className="App">
        <div className="people">
          <ul className="columns">
            <li className="person">
              <h4 className="winnie">Winnie</h4>
              <p className="task">Clean your room!</p>
              <p className="task">Clean your room!</p>
              <button className="add" onClick={this.getTask}>
                Add a card
              </button>
            </li>
            <li className="person">
              <h4 className="bob">Bob</h4>
              <p className="task">Clean your room!</p>
              <p className="task">Clean your room!</p>
            </li>
            <li className="person">
              <h4 className="thomas">Thomas</h4>
              <p className="task">Clean your room!</p>
              <p className="task">Clean your room!</p>
            </li>
            <li className="person">
              <h4 className="george">George</h4>
              <p className="task">Clean your room!</p>
              <p className="task">Clean your room!</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default App;
