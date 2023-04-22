import React from 'react'

export default function Action({action}) {
  return( 
    <td><button className={`action ${action}`}>{action}</button></td>
  )
}
