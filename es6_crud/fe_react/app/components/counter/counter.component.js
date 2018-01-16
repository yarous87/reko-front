import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super();

        this.state = {
            count: parseInt(props.count)   
        }
    }

    increase = () => {
        let {
            count
        } = this.state;

        count++;

        this.setState({
            count
        });
    }

    decrease = () => {
        let {
            count
        } = this.state;

        count--;

        this.setState({
            count
        });
    }

    render() {
        const {
            count
        } = this.state;

        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <span>{count}</span>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

export { Counter };