import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 1,
      },
      {
        name: "Treasure",
        id: 2,
        score: 2,
      },
      {
        name: "Ashley",
        id: 3,
        score: 3,
      },
      {
        name: "James",
        id: 4,
        score: 4,
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState( prevState => {return {score: prevState.players[index].score += delta}});
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {return {players: prevState.players.filter(p => p.id !== id)}});
  }

  newPlayerId = () => this.state.players.length + 1;

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [ ...prevState.players,
          {
            name,
            score: 0,
            id: this.newPlayerId(),
          }
        ]
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            index={index}
            score={player.score}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;