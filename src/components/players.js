import React, { Component } from 'react'

class Players extends Component {
    render() {
    var player = this.props.player;
        return (
            <div class = "card">
                <div class ="card-body">
                    <h5 class = "card-title">{player.first_name} {player.last_name}</h5>
                    <h6 class = "card-subtitle mb-2 text-muted">{player.position}</h6>
                    <p class = "card-text">{player.team.full_name}</p>
                </div>
            </div>
        )
    }
}

export default Players