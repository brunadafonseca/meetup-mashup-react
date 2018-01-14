import React, { Component } from 'react';
import './App.css';
import TopicsList from './topics/TopicsList'
import RsvpList from './rsvps/RsvpList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Meetup mashup</h1>
        </header>
        <main>
          <TopicsList />
          <RsvpList />
        </main>
      </div>
    );
  }
}

export default App;
