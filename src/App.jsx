import React, { Component } from 'react'
import Title from "./Title.jsx"
import FileData from "./FileData.jsx"
import FileComment from "./FileComment.jsx"
import Tempo from "./Tempo.jsx"
import NewSequence from "./NewSequence.jsx"
import Sequence from "./Sequence.jsx"
import pseudo_uuid from "./common.js"

const START_TEMPO = 120
// const BASE_SEQUENCE = {
//     description: "",
//     repeat: false,
//     notes: ["C", "G", "E", "C"]
// }

function base_sequence() {
    return {
        description: "",
        repeat: false,
        notes: ["C", "G", "E", "C"],
        uuid: pseudo_uuid()
    }
}

class App extends Component {

    state = {
        title: "",
        description: "",
        tempo: START_TEMPO,
        sequences: [base_sequence()]

    }

    set_title = (title) => {
        this.setState({"title" : title})
    }

    set_notes = (description) => {
        this.setState({"description" : description})
    }

    set_tempo = (tempo) => {
        this.setState({"tempo" : tempo})
    }

    set_sequence = (index, sequence) => {
        const sequences = this.state.sequences
        Object.assign(sequences[index], sequence)

        this.setState({"sequences" : sequences})
    }

    add_sequence = () => {
        const sequences = this.state.sequences

        const seq_copy = base_sequence()
        sequences.push(seq_copy)
        this.setState({"sequences" : sequences})
    }

    delete_sequence = (del_index) => {
        console.log("del " + del_index)
        const sequences = this.state.sequences
        sequences.splice(del_index, 1)
        console.log(sequences)

        this.setState({sequences: sequences})
    }

    render() {
        const sequences = this.state.sequences.map((sequence, index) => (
            <Sequence key={sequence.uuid} index={index} set_function={this.set_sequence}
                      repeat={sequence.repeat}  description={sequence.description}
                      notes={sequence.notes}    delete_function={this.delete_sequence} />
          ))
        console.log("re-render app")

        return (
            <div className="page">
              <div className="song_editor">
                <div className="flexrow">
                  <Title set_function={this.set_title} />
                  <Tempo set_function={this.set_tempo} />
                </div>
                <FileComment set_function={this.set_notes} />
                {sequences}
                <NewSequence add_function={this.add_sequence}/>

              </div>
              <FileData title={this.state.title} description={this.state.description}
                        tempo={this.state.tempo} sequences={this.state.sequences} />
            </div>
            )
    }
}

export default App
