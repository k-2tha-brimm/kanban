import React from 'react';
import './App.css';
import List from './List';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    // Pull list from localStorage if there is one
    // Otherwise populate a default list]
    if (localStorage.getItem('lists')) {
      let rawLists = localStorage.getItem('lists');
      let parsedLists = JSON.parse(rawLists);
      this.state = {
        lists: parsedLists
      }
    } else {
      this.state = {
        lists: [
          {
            title: 'George',
            id: 0,
            cards: [
              {
                text: 'This is the first default task',
                listNumber: 0,
                timeId: 0
              },
              {
                text: 'This is the second default task',
                listNumber: 0,
                timeId: 1
              }
            ]
          },
          {
            title: 'Kevin',
            id: 1,
            cards: [
              {
                text: 'This is the first default task',
                listNumber: 1,
                timeId: 0
              },
              {
                text: 'This is the second default task',
                listNumber: 1,
                timeId: 1
              }
            ]
          },
          {
            title: 'Zach',
            id: 2,
            cards: [
              {
                text: 'This is the first default task',
                listNumber: 2,
                timeId: 0
              },
              {
                text: 'This is the second default task',
                listNumber: 2,
                timeId: 1
              }
            ]
          },
          {
            title: 'Chris',
            id: 3,
            cards: [
              {
                text: 'This is the first default task',
                listNumber: 3,
                timeId: 0
              },
              {
                text: 'This is the second default task',
                listNumber: 3,
                timeId: 1
              }
            ]
          }
        ]
      }
      // Remember that localStorage only saves strings, not objects
      localStorage.setItem('lists', JSON.stringify(this.state.lists));
    }
  }

  addTaskCard(taskText, listId) {
    let rawLists = localStorage.getItem('lists');
    let parsedLists = JSON.parse(rawLists);

    const newTask = {
      text: taskText,
      listNumber: listId,
      timeId: new Date().valueOf()
    }

    parsedLists[listId].cards.push(newTask);

    this.setState({
      lists: parsedLists
    });

    localStorage.setItem('lists', JSON.stringify(parsedLists));
  }
  
  render() {
    const lists = this.state.lists.map((list, index) => (
      <li className="listWrapper" key={index}>
        <List {...list}
          onAdd={(taskText, listId) => this.addTaskCard(taskText, listId)} />
      </li>
    ));

    return (
      <div className="board">
        <ul className="lists">
          {lists}
        </ul>
      </div>
    );
  }

}
