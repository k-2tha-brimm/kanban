import React from 'react';
import './Card.css';

export default function Card(props) {
    console.log(props);
    return (
        <div className="task-card">
            <a href="#" onClick={() => props.moveLeft(props)}>Left</a>{props.text}<a href="#" onClick={() => alert('Goodbye!')}>Right</a>
        </div>
    )

};