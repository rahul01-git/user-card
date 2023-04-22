import React, { Component } from 'react'
import UserCard from './components/UserCard'
import './App.css'
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <UserCard data={data} />
      </div>
    )
  }
}

