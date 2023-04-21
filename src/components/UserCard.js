import React, { Component } from 'react'
import '../assets/userCard.css'
export default class UserCard extends Component {
  constructor() {
    super()

    this.state = { name: "Rahul Neupane", percentage: "75%", title: 'Student / JSD', status: 'active' }
  }
  render() {
    return (
      <div className='userCard'>
          <p className="userCard__initial">{this.state.name[0]}</p>
          <h1 className="userCard__name">{this.state.name}<span className={`userCard__status ${this.state.status}`}></span></h1>
          
          <p className="userCard__title">{this.state.title}</p>
          <div className="userCard__progressBar" style={{ "--width": this.state.percentage }}></div>
      </div >
    )
  }
}
