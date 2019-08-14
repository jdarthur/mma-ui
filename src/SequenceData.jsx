import React, { Component } from 'react'
import NoteData from "./NoteData.jsx"

class SequenceData extends Component {

    render() {
        let notes = null
        if (this.props.notes) {
             notes = this.props.notes.map((note, index) => (
                <NoteData key={index} note={note}/>
            ))
        }

        return (


            <div>
                <br/>
                   { this.props.description ? "//" + this.props.description : null}
                   { this.props.description ? <br/> : null }
                {this.props.repeat ? <div> Repeat </div> : null}
                {notes}
                {this.props.repeat ? <div> RepeatEnd </div> : null}

            </div>
        )
    }
}

export default SequenceData
