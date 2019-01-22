import React, { Component } from 'react';
import './App.css';
import Post from './components/Post'

class App extends Component {
  //<li key={i}><a href={"http://"+url}>{url}</a></li>
  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
