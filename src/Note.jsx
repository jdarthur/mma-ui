import React, { Component } from 'react'

const NOTES = ["C", "C#", "D", "D#", "E", "E#",
               "F", "F#", "G", "G#", "A", "A#", "B"]

class Note extends Component {

    increment_tempo = () => {
        const note_index = NOTES.indexOf(this.props.note)
        this.props.set_function(this.props.index, NOTES[(note_index + 1) % NOTES.length])
        // this.props.set_function(this.state.tempo + 1)
    }

    decrement_tempo = () => {
        const note_index = NOTES.indexOf(this.props.note)
        this.props.set_function(this.props.index, NOTES[(note_index - 1) % NOTES.length])
    }

    render() {
        return (
            <div className="tempo_holder">
              <div className = "incr_button"
                   onClick={this.decrement_tempo}>
                &lt;
              </div>
              <div className="note">
                {this.props.note}
              </div>
              <div className="incr_button"
                   onClick={this.increment_tempo}>
                &gt;
              </div>
            </div>
        )
    }
}

export default Note
