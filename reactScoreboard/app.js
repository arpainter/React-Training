const Header = (props) => (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers} </span>
    </header>
);

const Player = (props) => {
  return (
  <div className="player">
    <span className="player-name">
    <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>x</button>
    {props.playerName}
    </span>
    <Counter />
  </div>
  );
}

class Counter extends React.Component {
  state = {
      playerScore: 0
  };

  incrementScore = () => {
    this.setState( prevState => {
      return {
      playerScore: prevstate.playerScore + 1
    };
    });
  }

  decrementScore = () => {
    this.setState( prevState => {
      return {
      playerScore: prevstate.playerScore - 1
    };
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score"> {this.state.playerScore} </span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
   }
  }

class App extends React.Component {
  state = {
    playerName: [
      {
        playerName: "John",
        playerScore: 20,
        id: 1
      },
      
      {
        playerName: "Ann",
        playerScore: 28,
        id: 2
      },
      
      {
        playerName: "Ashley",
        playerScore: 42,
        id: 3
      },
      
      {
        playerName: "Paul",
        playerScore: 35,
        id: 4
      },
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState ( prevState => {
      return {
        playerName: prevState.playerName.filter(p => p.id !== id)
      }; 
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
        title="scoreboard" 
        totalPlayers={this.state.playerName.length} 
        />
        {this.state.playerName.map( player =>
          <Player 
            playerName={player.playerName}
            id = {player.id}
            key={player.id.toString()} 
            removePlayer = {this.handleRemovePlayer}
            />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
