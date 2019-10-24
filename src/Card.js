class Card extends React.Component {
    constructor(props) {
        this.task = props.task;
    }

    render() {
        return (
            <p>{this.task}</p>
        )
    }
}

module.exports = Card;