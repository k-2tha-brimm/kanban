import React, { Component } from 'react';
import Card from './Card';
import AddCard from './AddCard';

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const cards = this.props.cards.map((card, index) => (
            <li key={index}>
                <Card {...card} />
            </li>
        ));
        
        return (
            <div className="listItem">
                <h2>{this.props.title}</h2>
                <ul className="taskCards">
                    {cards}
                    <li className="add-task-container">
                        <AddCard listId={this.props.id} onAdd={this.props.onAdd} />
                    </li>
                </ul>
            </div>
        )
    }

}