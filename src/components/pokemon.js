import React, { Component } from 'react'

class Pokemon extends Component {
    render() {
    var pokemon = this.props.pokemon;
        return (
            <div class = "card">
                <div class ="card-body">
                    <h5 class = "card-title">{pokemon.name}</h5>
                </div>
            </div>
        )
    }
}

export default Pokemon