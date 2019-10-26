import React from 'react';

export default function Card(props) {
    return (
        <div className="taskCard">
            {props.text}
        </div>
    )

};