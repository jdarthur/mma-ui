import React, { Component } from 'react'

class NewSequence extends Component {

    add_sequence = () => {
        this.props.add_function()
    }

    render() {
        return (
            <div className="add_sequence">
                <button type="checkbox" onClick={this.add_sequence} > Add sequence </button>
            </div>
        )
    }
}

export default NewSequence
