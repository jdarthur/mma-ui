import React, { Component } from 'react'

class FileComment extends Component {
    state = {
        comment: ""
    }

    set_notes = (event) => {
        const value = event.target.value
        this.setState({comment: value})
        this.props.set_function(value)
    }

    render() {
        return (
            <div >
            <textarea name="comment" value={this.state.comment}
                      onChange={this.set_notes} className="notes"
                      placeholder="Song description"/>
            </div>
        )
    }
}

export default FileComment
