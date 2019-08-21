import React, { Component } from 'react'

class PlayButton extends Component {

    render() {
        return (
            <div className="add_sequence">
            <button onClick={this.props.play_function} > Play </button>
            </div>
            )
    }
}

export default PlayButton
