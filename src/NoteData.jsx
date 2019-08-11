import React, { Component } from 'react'

class NoteData extends Component {

    render() {
        return (
            <div>
                {this.props.note}
            </div>
        )
    }
}

export default NoteData
