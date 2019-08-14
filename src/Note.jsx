import React, { Component } from 'react'

const NOTES = ["C", "C#", "D", "D#", "E", "E#",
               "F", "F#", "G", "G#", "A", "A#", "B"]

class Note extends Component {

    increment_tempo = () => {
        const note_index = NOTES.indexOf(this.props.note)
        this.props.set_function(this.props.index, note_index >= NOTES.length - 1 ? NOTES[0] : NOTES[note_index + 1])
        // this.props.set_function(this.state.tempo + 1)
    }

    decrement_tempo = () => {
        const note_index = NOTES.indexOf(this.props.note)
        this.props.set_function(this.props.index, note_index < 1 ? NOTES[NOTES.length - 1] : NOTES[note_index - 1])
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
