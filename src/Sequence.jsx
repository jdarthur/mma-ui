import React, { Component } from 'react'
import Note from "./Note.jsx"
// import pseudo_uuid from "./common.js"

const notes = ["C", "G", "E", "C"]

class Sequence extends Component {
    constructor(props) {
      super(props)
      this.state = {
        repeat: false,
        description: "",
        notes: notes
      }

      this.props.set_function(0, this.state)
    }


    set_description = (event) => {
        const value = event.target.value
        this.setState({"description" : value}, () => {
            this.props.set_function(0, this.state)
        })
    }

    set_repeat = (event) => {
        console.log("set repeat " + event.target.checked)
        this.setState({"repeat": event.target.checked}, () => {
            this.props.set_function(0, this.state)
        })
    }

    set_note = (index, note) => {
        const notes = this.state.notes
        notes[index] = note
        this.setState({"notes" : notes}, () => {
            this.props.set_function(0, this.state)
        })
    }

    render() {
        const notes1 = this.state.notes.map((note, index) => (
            <Note key={index} note={note}
                  index={index} set_function={this.set_note}/>
          ))

        return (
            <div className="sequence">
                <div className="flexrow">
                  <input type="text"  name="title"
                         value={this.state.description} onChange={this.set_description}
                         placeholder="Sequence description"/>
                  <div className="tempo flexrow">
                  Repeat? <input type="checkbox" onChange={this.set_repeat}
                                 checked={this.state.repeat} />
                  </div>
                </div>


                {notes1}
            </div>
        )
    }
}

export default Sequence
