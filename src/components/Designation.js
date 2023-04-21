import React from 'react'

export default function Designation({designation}) {
  return (
    <p className="userCard__title">{designation || 'Intern'}</p>
  )
}
