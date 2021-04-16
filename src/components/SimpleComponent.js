// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super();
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        this.setState((prev) => {
            let newMood
            prev.mood === "happy" ? newMood = "sad" : newMood = "happy"
            return {mood: newMood}
        }
    )}

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}
