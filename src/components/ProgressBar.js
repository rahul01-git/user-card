import React from 'react'

export default function ProgressBar({percentage}) {
  return (
    <div className="userCard__progressBar" style={{ "--width":( percentage || 50) +"%"}}></div>
  )
}


