import React, { Component } from 'react'

const NOTES = ["C", "C#", "D", "D#", "E", "E#",
               "F", "F#", "G", "G#", "A", "A#", "B"]

class Note extends Component {

    set_note = (event) => {
      const note = NOTES[event.target.value]
      this.props.set_function(this.props.index, note)
    }

    render() {
        return (

            <div>
              <div>
                { this.props.note }
              </div>
              <div className="flexrow">
                <input type="range" min='0' max={ NOTES.length - 1 }
                       onChange={this.set_note} value={ NOTES.indexOf(this.props.note) }/>
              </div>

            </div>
        )
    }
}

export default Note
