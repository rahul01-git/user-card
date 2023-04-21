import React, { Component } from 'react'
import '../assets/userCard.css'
import NameAndInitial from './NameAndInitial'
import ProgressBar from './ProgressBar'
import Designation from './Designation'
export default class UserCard extends Component {
  constructor() {
    super()
    this.state = { name: null, percentage: null, designation: null, status: null }
  }
  render() {
    return (
      <div className='userCard'>
          <NameAndInitial name={this.state.name} status={this.state.status}/>
          <Designation designation={this.state.designation}/>
          <ProgressBar percentage={this.state.percentage}/>
      </div >
    )
  }
}
