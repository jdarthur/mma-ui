import React, { Component } from 'react'

class Title extends Component {
    state = {
        title: ""
    }

    set_title = (event) => {
        const value = event.target.value
        this.setState({title: value})
        this.props.set_function(value)
    }

    render() {
        const title = this.state.title
        return (
            <div>
            <input type="text"  name="title"
                   value={title} onChange={this.set_title}
                   placeholder="Song title"/>
            </div>
        )
    }
}

export default Title
