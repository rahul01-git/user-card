import React from 'react'

export default function Status({status}) {
  return( 
    <td><button className={`status ${status || 'blocked'}`}>{status || 'blocked'}</button></td>
  )
}
