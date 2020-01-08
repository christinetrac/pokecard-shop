import React, {Component} from 'react';
import Pokemon from './components/pokemon';
import './App.css';
import Spinner from './components/common/Spinner';
import pokeball from './pokeball.gif';

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemon: [],
      loading: true
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
      })
      setTimeout(() => { 
        this.setState({loading:false})
      }, 1550);
    })
    .catch(console.log)
  }

  render(){
    const loading = this.state.loading;

    function refresh() {
      window.location.reload();
    }

    const showPokemon = (
      <div>
        <input type="image" src={pokeball} onClick={refresh} class="pokeball"/>
        <div class="Pokecard">
          <Pokemon pokemon = {this.state.pokemon}/>
        </div>
      </div>
    );

    const showSpinner = (
      <div>
        <Spinner/>
      </div>
    );

    return (
      <div>{loading ? showSpinner: showPokemon}</div>
    )
  }
}

export default App;
