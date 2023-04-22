import React from 'react'

export default function ProgressBar({ progress }) {
  console.log((progress.completed / progress.total) * 100)
  return( 
    <td className='progress'><div className="progressBar" style={{ '--width': (progress.completed / progress.total) * 100 + "%"}}></div>{progress.completed +' '+progress.size_type + ' of ' +progress.total +' '+progress.size_type}</td>
  )
}
