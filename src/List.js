import React, { Component } from 'react';
import Card from './Card';

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="listItem">
                This is where we will render the cards!
            </div>
        )
    }

}