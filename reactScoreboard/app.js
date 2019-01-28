const players = [
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

const Header = (props) => (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers} </span>
    </header>
);

const Player = (props) => (
  <div className="player">
    <span className="player-name">{props.playerName}</span>
    <Counter playerScore={props.playerScore}/>
  </div>
);

const Counter = (props) => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score"> {props.playerScore} </span>
    <button className="counter-action increment"> + </button>
  </div>
);

const App = (props) => (
  <div className="scoreboard">
    <Header 
    title="scoreboard" 
    totalPlayers={props.initialPlayers.length} 
    />
    {props.initialPlayers.map( player =>
      <Player 
        playerName={player.playerName}
        playerScore={player.playerScore}
        key={player.id.toString()} />
    )}
  </div>
);

ReactDOM.render(
  <App initialPlayers= {players} />,
  document.getElementById('root')
);
