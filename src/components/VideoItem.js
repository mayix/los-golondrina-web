import React from 'react'

function VideoItem({name, url}) {
  return (
    <div className='videoItem'>
      <div className='thumbnail'>
        <iframe title='yt-video' width="100%" height="100%" src={url}></iframe>
      </div>
      <h2>{name}</h2>
    </div>
  )
}

export default VideoItem
