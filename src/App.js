import React, {Component} from 'react';
import Players from './components/players';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="container">
        <h1><center>Players</center></h1>
        <div className="row">
          {this.state.players.map(player=>(
          <div key={player.id} id='cardItem' className="col-lg-4">
            <Players player={player}/>
          </div>
          ))}
        </div>
      </div>
      // <Players players = {this.state.players}/>
    )
  }

  state = {
    players: []
  };

  componentDidMount() {
    var users = 416;
    fetch('https://www.balldontlie.io/api/v1/players/')
    .then(res => res.json())
    .then((data) => {
      let results = data.data;
      this.setState({players: results})
    })
    .catch(console.log)
  }
}

export default App;
