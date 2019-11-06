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
            color: 'green',
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
            color: 'blue',
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
            color: 'black',
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
            color: 'purple',
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

  removeCard(list, id) {
    for (let i = 0; i < list.length; i++) {
      if (id === list[i].timeId) {
        list.splice(i, 1);
        console.log(list);
        break;
      }
    }
    return list;
  }

  moveCardLeft(card) {
    if (card.listNumber === 0) {
      return;
    } else {
      let rawLists = localStorage.getItem('lists');
      let parsedLists = JSON.parse(rawLists);
      let newList = card.listNumber - 1;

      parsedLists.forEach((person, index) => {
        if (person.id === card.listNumber) {
          person = this.removeCard(person.cards, card.timeId);
        };
      });
      this.setState({ lists: parsedLists })
      localStorage.setItem('lists', JSON.stringify(parsedLists));
    }
  }


  moveCardRight(listNumber, cardId) {
    if (listNumber === 3) {
      return;
    } else {
      let rawLists = localStorage.getItem('lists');
      let parsedLists = JSON.parse(rawLists);
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
      <li className="list-wrapper" key={index}>
        <List {...list}
          onAdd={(taskText, listId) => this.addTaskCard(taskText, listId)}
          moveLeft={(card) => this.moveCardLeft(card)} />
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
