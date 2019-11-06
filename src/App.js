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

  swapLists(old, notOld, card) {
    for (let i = 0; i < old.cards.length; i++) {
      if (old.cards[i].timeId === card.timeId) {
        old.cards.splice(i, 1);
        break;
      }
    }
    notOld.cards.push(card);
    return [old, notOld];
  }

  moveCardLeft(card) {
    let oldPerson;
    let newPerson;

    if (card.listNumber === 0) {
      return;
    } else {
      let rawLists = localStorage.getItem('lists');
      let parsedLists = JSON.parse(rawLists);

      for (let i = 0; i < parsedLists.length; i++) {
        if (i === card.listNumber - 1) {
          newPerson = parsedLists[i];
        } else if (i === card.listNumber) {
          oldPerson = parsedLists[i];
        }
      }

      let listz = this.swapLists(oldPerson, newPerson, card);

      let listzzz = parsedLists.map(list => {
        if (list.id === listz[0].id) {
          return listz[0];
        } else if (list.id === listz[1].id) {
          return listz[1];
        }
        return list;
      });
      this.setState({ lists: listzzz });
      localStorage.setItem('lists', JSON.stringify(listzzz));
    }
  }


  // moveCardRight(listNumber, cardId) {
  //   if (listNumber === 3) {
  //     return;
  //   } else {
  //     let rawLists = localStorage.getItem('lists');
  //     let parsedLists = JSON.parse(rawLists);
  //   }
  // }

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
