import React, { Component } from 'react'

const START_TEMPO = 120

class Tempo extends Component {
    state = {
        tempo: START_TEMPO
    }

    set_tempo = (event) => {
        const value = event.target.value
        this.setState({tempo: value})
        this.props.set_function(value)
    }

    increment_tempo = () => {
        this.setState({tempo: this.state.tempo + 1})
        this.props.set_function(this.state.tempo + 1)
    }

    decrement_tempo = () => {
        this.setState({tempo: this.state.tempo - 1})
        this.props.set_function(this.state.tempo - 1)
    }

    render() {
        return (
            <div className="tempo_holder">
              <div className = "incr_button"
                   onClick={this.decrement_tempo}>
                &lt;
              </div>
              <div className="tempo">
                {this.state.tempo} bpm
              </div>
              <div className="incr_button"
                   onClick={this.increment_tempo}>
                &gt;
              </div>
            </div>
        )
    }
}

export default Tempo
