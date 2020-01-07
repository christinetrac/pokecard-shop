import React, {Component} from 'react';
import Pokemon from './components/pokemon';
import './App.css';
import Spinner from './components/common/Spinner';

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
        //loading:false
      })
      setTimeout(() => { 
        this.setState({loading:false})
      }, 1550);
    })
    .catch(console.log)
  }

  render(){
    const pokemon = this.state.pokemon;
    const loading = this.state.loading;
    let display;
    if(pokemon == null || loading){
      display = <Spinner/>;
    } else {
      display = <Pokemon pokemon = {this.state.pokemon}/>;
    }

    const showPokemon = (
      <div class="Pokecard">
        <Pokemon pokemon = {this.state.pokemon}/>
      </div>
    );

    const showSpinner = (
      <div>
        <Spinner/>
      </div>
    );

    return (
      // <div class="Pokecard">
      //   <Pokemon pokemon = {this.state.pokemon}/>
      // </div>
      <div>{loading ? showSpinner: showPokemon}</div>
    )
  }
}

export default App;
