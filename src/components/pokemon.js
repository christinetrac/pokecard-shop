import React, { Component } from 'react'

class Pokemon extends Component {
    render() {
    const pokemon = this.props.pokemon;
    const icon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png';
        return (
            <div class="container">
                <div class = "card" style={{width: 24 + 'rem'}}>
                    <img src={icon} class="card-img-top" alt={pokemon.name}></img>
                    <h2 class = "card-title"><center>#{pokemon.id} {pokemon.name}</center></h2>
                    <div class ="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">
                            <span>Type: </span>
                            {pokemon.types && pokemon.types.map((type)  => (
                                <span class="card-subtitle mb-2 text-muted">{type.type.name} </span>
                            ))}
                            </li>
                            
                            <li class="list-group-item">
                            <span>Ability: </span>
                            {pokemon.abilities && pokemon.abilities.map((ability)  => (
                                <span class="card-subtitle mb-2 text-muted">{ability.ability.name} </span>
                            ))}
                            </li>
                        </ul><br/>
                        <ul class="list-group">
                            {pokemon.stats && pokemon.stats.map((stat) => (
                                <li class="list-group-item">{stat.stat.name}: {stat.base_stat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokemon