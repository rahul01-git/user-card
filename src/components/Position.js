import React from 'react'

export default function Position({designation}) {
  return( 
    <td className='designation'>{designation || 'intern'}</td>
  )
}
