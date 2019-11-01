import React from 'react';
import axios from 'axios';

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

      </div>
    );
  }
}

export default App;
