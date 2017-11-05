import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getInitialState(){
    return {
      users: []
    };
  },
  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
  },
  render() {
    return (
      <div className="Users">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div> key={user.id}>{user.email}</div>
        )}
      </div>
    );
  }
}

export default App;
