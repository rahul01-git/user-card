import React from 'react'

export default function Name({ name }) {
  return (
    <td className='name'><input type="checkbox" /><span className='initial'>{name && name?.slice(0, 1) || 'D'}</span>{name || 'Default'}</td>
  )
}

