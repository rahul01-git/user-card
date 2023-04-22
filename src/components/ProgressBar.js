import React from 'react'

export default function ProgressBar({ progress }) {
  console.log(((progress && progress?.completed || 1) / (progress && progress?.total || 1)) * 100)
  return( 
    <td className='progress'><div className="progressBar" style={{ '--width': ((progress && progress?.completed || 1) / (progress && progress?.total || 1)) * 100 + "%"}}></div>{(progress && progress?.completed || 0) +' '+progress.size_type + ' of ' +(progress && progress?.total || 0) +' '+progress.size_type}</td>
  )
}
