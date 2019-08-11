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
        title: this.props.title,
        notes: this.props.notes,
        style: song.style,
        tempo: song.tempo,
        sequences: song.sequences
    }


    render() {
        const sequences = this.state.sequences.map((sequence, index) => (
                <SequenceData key={index} repeat={sequence.repeat} notes={sequence.notes}/>
            ))

        return (
            <div>
                {this.props.title.replace(" ", "_")}.mma:
                <div className="file_data">
                &#x2F;&#x2F; {this.props.notes}
                <br/>
                <br/>
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
