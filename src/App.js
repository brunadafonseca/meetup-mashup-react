import React, { Component } from 'react';
import './App.css';
import TopicsList from './topics/TopicsList'
import RsvpList from './rsvps/RsvpList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopicsList />
        <RsvpList />
      </div>
    );
  }
}

export default App;
