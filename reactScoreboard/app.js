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
  }

  incrementScore = () => {
    this.setState( prevState => ({
      playerScore: prevState.playerScore + 1
    }));
  }

  decrementScore = () => {
    this.setState( prevState => ({
      playerScore: prevState.playerScore - 1
    }));
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
    players: [
      {
        playerName: "John",
        id: 1
      },
      
      {
        playerName: "Ann",
        id: 2
      },
      
      {
        playerName: "Ashley",
        id: 3
      },
      
      {
        playerName: "Paul",
        id: 4
      },
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState ( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }; 
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
        title="scoreboard" 
        totalPlayers={this.state.players.length} 
        />
        {this.state.players.map( players =>
          <Player 
            playerName={players.playerName}
            id = {players.id}
            key={players.id.toString()} 
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
