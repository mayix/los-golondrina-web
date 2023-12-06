import React from 'react'
import { VideoList } from "../helpers/VideoList"
import VideoItem from '../components/VideoItem'
import "../styles/Videos.css"

function Videos() {
  return (
    <div className='videos'>
      <h1 className='videoTitle'>Nuestros Videos</h1>
      <div className='videoList'>
        {VideoList.map((videoItem, key) => {
            return (
                <VideoItem 
                    key={key} 
                    name={videoItem.name} 
                    url={videoItem.url} 
                />
            )
        })}
      </div>
    </div>
  )
}

export default Videos
