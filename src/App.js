import React, {Component} from 'react';
import Pokemon from './components/pokemon';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemon: [],
      loading: false
    }
  }

  componentDidMount() {
    let id = Math.floor(Math.random() * 807)
    this.setState({loading: true})
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        pokemon: data,
        loading:false
      })
    })
    .catch(console.log)
  }

  render(){
    const result = this.state.loading ? "I Choose You..." : <div class="Pokecard"><Pokemon pokemon = {this.state.pokemon}/></div>
    return (
      <div>
        {result}
      </div>
    )
  }
}

export default App;
