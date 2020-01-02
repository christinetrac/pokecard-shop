import React, { Component } from 'react'

class Pokemon extends Component {
    render() {
    const pokemon = this.props.pokemon;
    const icon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png';
        return (
            <div class = "card" style={{width: 22 + 'rem'}}>
                <img src={icon} class="card-img-top" alt="..."></img>
                <h2 class = "card-title"><center>{pokemon.id} {pokemon.name}</center></h2>
                <div class ="card-body">
                    <h5>Type:</h5>
                    {pokemon.types && pokemon.types.map((type)  => (
                        <span class="card-subtitle mb-2 text-muted">{type.type.name} </span>
                    ))}
                    <h5>Ability:</h5>
                    {pokemon.abilities && pokemon.abilities.map((ability)  => (
                        <span class="card-subtitle mb-2 text-muted">{ability.ability.name} </span>
                    ))}
                    <h5>Base Stats:</h5>
                    {pokemon.stats && pokemon.stats.map((stat) => (
                        <p class="card-text">{stat.base_stat} {stat.stat.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokemon