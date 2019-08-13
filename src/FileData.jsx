import React, { Component } from 'react'
import SequenceData from "./SequenceData.jsx"

const song = {
    title : "freebird",
    notes: "[guy at a non-skynyrd concert voice] freebird!",
    style: "Groove Ballad",
    tempo : "120",
    sequences: [
        {
            repeat: true,
            notes: ["G", "D", "Em", "Em",
                    "F", "C", "D", "D"]
        },
        {
            repeat: true,
            notes: ["G", "D", "Em", "Em",
                    "F", "C", "D", "D"]
        },
        {
            repeat: false,
            notes: ["F", "C", "D", "D",
                    "F", "C", "D", "D",
                    "F", "C", "D", "D"]
        }
    ]

}

class FileData extends Component {
    state = {
        style: song.style,
        sequences: this.props.sequences
    }


    render() {
        const sequences = this.props.sequences.map((sequence, index) => (
                <SequenceData key={index} repeat={sequence.repeat}
                              notes={sequence.notes} description={sequence.description}/>
            ))

        return (
            <div>
                {this.props.title.replace(" ", "_")}.mma:
                <div className="file_data">
                   { this.props.description ? "//" + this.props.description : null}
                   { this.props.description ? <br/> : null }
                   Tempo {this.props.tempo}
                   <br/>

                   {this.state.style}
                   <br/>

                   {sequences}
                </div>
            </div>
        )
    }
}


export default FileData
