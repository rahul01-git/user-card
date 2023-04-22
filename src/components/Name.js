import React from 'react'

export default function Name({ name }) {
  return (
    <td className='name'><input type="checkbox" /><span className='initial'>{name.slice(0, 1)}</span>{name}</td>
  )
}

