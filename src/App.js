import React, { Component } from 'react';
import Playlist from './pages/playlist/Index';
import LogRocket from 'logrocket';
LogRocket.init('cqgid6/music-suggestions');
class App extends Component {
  render() {
    return (
      <div className="App">
        <Playlist />
      </div>
    );
  }
}

export default App;
