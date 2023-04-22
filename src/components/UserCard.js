import React from 'react'
import Name from './Name'
import Position from './Position'
import Status from './Status'
import ProgressBar from './ProgressBar'
import Action from './Action'
import '../assets/userCard.css'

export default function UserCard({ data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user, index) => {
            return (
              <tr key={index} className='row-gap'>
                  <Name name={user.full_name} />
                  <Position designation={user.designation} />
                  <Status status={user.active_status} />
                  <ProgressBar progress={user.download_completed_rate} />
                  <Action action={user.invited_status} />
              </tr>
            )
          })}
        </tbody>
      </table>

    </>
  );

}
