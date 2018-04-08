import React, { Component } from 'react';
import LeaderBoard from '../Leaderboard/LeaderBoard'
import logo from './images/logo.png';
import './App.css';

const url = 'http://localhost:1234/api/players';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      playerData: [{ 
        rank: 1,
        global_rank: 100000,
        name: 'Nunquam Paratus',
        kills: 1337,
        deaths: 0,
        assists: 1337,
        kill_death_ratio: '1337:0',
        knockdowns:0 
      },{ 
        rank: 1,
        global_rank: 100000,
        name: 'Nunquam Paratus',
        kills: 1337,
        deaths: 0,
        assists: 1337,
        kill_death_ratio: '1337:0',
        knockdowns:0 
      },{ 
        rank: 1,
        global_rank: 100000,
        name: 'Nunquam Paratus',
        kills: 1337,
        deaths: 0,
        assists: 1337,
        kill_death_ratio: '1337:0',
        knockdowns:0 
      }]
    }
  }

  async componentDidMount(){
    let response = await fetch(url);
    let playerData = await response.json();
    //this.setState({
    //  playerData: [playerData]
    //});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weasels PUBG Leaderboard</h1>
        </header>
        <LeaderBoard playerData={this.state.playerData} />
      </div>
    );
  }
}

export default App;
