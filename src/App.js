import React, {Component} from 'react';
import Pokemon from './components/pokemon';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://pokeapi.co/api/v2/pokemon/500')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        pokemon: data
      })
    })
    .catch(console.log)
  }

  render(){
    return (
      <div>
        <Pokemon pokemon = {this.state.pokemon}/>
      </div>
    )
  }
}

export default App;
