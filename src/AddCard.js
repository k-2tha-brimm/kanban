import React, {Component} from 'react';

export default class AddCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const taskText = this.textInput.value.trim();
        const listId = this.props.listId;
        if (taskText && this.props.onAdd) {
            this.props.onAdd(taskText, listId);
        }
        this.textInput.value = '';
    }

    changeEdit(editing) {
        this.setState({
            editing: editing
        });
    }

    render() {
        if(!this.state.editing) {
            return (
                <div className="add-open-button" onClick={() => this.changeEdit(true)}>
                    <a href="#">Add New Task!</a>
                </div>
            )
        } else {
            return (
                <form className="add-new-task" onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" className="task-input" ref={input => this.textInput = input} aria-label="Add a task" />
                    <div className="add-button-container">
                        <button className="add-button">Add Task!</button>
                        <button className="cancel-button" onClick={() => this.changeEdit(false)}>Cancel</button>
                    </div>
                </form>
            )
        }
    }


}