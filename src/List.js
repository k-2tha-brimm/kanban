import React, { Component } from 'react';
import Card from './Card';
import AddCard from './AddCard';
import './List.css';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        }
    }

    render() {
        const cards = this.props.cards.map((card, index) => (
            <li key={index}>
                <Card {...card}
                 moveLeft={this.props.moveLeft} />
            </li>
        ));

        const color = this.state.color;

        const titleColor = {
            backgroundColor: color,
            textAlign: 'center',
            border: '1px solid black',
            margin: '0 auto',
            lineHeight: 2,
            color: 'white'
        }
        return (
            <div className="listItem">
                <h2 style={titleColor}>{this.props.title}</h2>
                <ul className="task-cards">
                    {cards}
                    <li className="add-task-container">
                        <AddCard listId={this.props.id} onAdd={this.props.onAdd} />
                    </li>
                </ul>
            </div>
        )
    }

}