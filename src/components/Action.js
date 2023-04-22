import React from 'react'

export default function Action({action}) {
  return( 
    <td><button className={`action ${action || 'invited'}`}>{action || 'invite'}</button></td>
  )
}
