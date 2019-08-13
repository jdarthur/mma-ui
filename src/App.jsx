import React, { Component } from 'react'
import Title from "./Title.jsx"
import FileData from "./FileData.jsx"
import FileComment from "./FileComment.jsx"
import Tempo from "./Tempo.jsx"
import Sequence from "./Sequence.jsx"

const START_TEMPO = 120

class App extends Component {

    state = {
        title: "",
        description: "",
        tempo: START_TEMPO,
        sequences: [{}]

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
        sequences[index] = sequence

        this.setState({"sequences" : sequences})
    }

    render() {
        return (
            <div className="page">
              <div className="song_editor">
                <div className="flexrow">
                  <Title set_function={this.set_title} />
                  <Tempo set_function={this.set_tempo} />
                </div>
                <FileComment set_function={this.set_notes} />
                <Sequence set_function={this.set_sequence} />

              </div>
              <FileData title={this.state.title} description={this.state.description}
                        tempo={this.state.tempo} sequences={this.state.sequences} />
            </div>
            )
    }
}

export default App
