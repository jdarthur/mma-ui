import React, { Component } from 'react'
import Title from "./Title.jsx"
import FileData from "./FileData.jsx"
import FileComment from "./FileComment.jsx"
import Tempo from "./Tempo.jsx"

const START_TEMPO = 120

class App extends Component {

    state = {
        title: "",
        notes: "",
        tempo: START_TEMPO
    }

    set_title = (title) => {
        this.setState({"title" : title})
    }

    set_notes = (notes) => {
        this.setState({"notes" : notes})
    }

    set_tempo = (tempo) => {
        this.setState({"tempo" : tempo})
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

              </div>
              <FileData title={this.state.title} notes={this.state.notes}
                        tempo={this.state.tempo} />
            </div>
            )
    }
}

export default App
