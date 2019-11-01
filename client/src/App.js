import React from 'react';
import axios from 'axios';
import Dark from './components/DarkmodeButton';
import './App.css';

class App extends React.Component {

  state = {
    api: 'http://localhost:5000/api/players',
    players: [],
  };

  componentDidMount() {
    axios.get(this.state.api)
      .then(response => {
        const list = response.data;
        console.log('got the data', response.data)
        this.setState({ players: list })
      })
      .catch(error => console.log('nope on the data'));

  }
  render() {
    return (
      <div className="App" >
        <h1>Womans World Cup Popular Players</h1>
        <Dark />
        <div className='list'>
          <ol>
            {this.state.players.map(player => (
              <li clasnnName='list-item'>{player.name} from {player.country}, {player.searches} searches</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
