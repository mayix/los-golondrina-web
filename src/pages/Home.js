import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from "../assets/los-golondrina-cover.JPG"
import CoverImage from "../assets/los-golondrina-cover-mini.jpg"
//import LogoImage from "../assets/los-golondrina-logo-letras-mini.png"
import { VideoList } from "../helpers/VideoList"
import VideoItem from '../components/VideoItem'
import "../styles/Home.css"


function Home() {
  const videoList = VideoList
  const displayedVideos = videoList.slice(0, 3)
  return (
    <div className='sections'>
      <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
          <div className='headerContainer'>
            <div className='cover'>
              <Link to={"https://distrokid.com/hyperfollow/losgolondrina/los-golondrina"}>
                <img src={CoverImage} alt="" class="image" loading="eager"/>
              </Link>
            </div>
            <div className='newRelease'>
              <div className='releaseHeader'>
                <h1>Los Golondrina EP</h1>
              </div>
              <div className='releaseLink'>
                <Link to={"https://distrokid.com/hyperfollow/losgolondrina/los-golondrina"}>
                  <p>Escuchar ahora</p>
                </Link>
              </div>
            </div>
          </div>
      </div>
      <div className='liveContainer'>
          <h1>Live</h1>
          <p>No hay fechas próximas</p>
      </div>
      <div className='videosContainer'>
          <h1>Videos</h1>
          <div className='videoList'>
            {displayedVideos.map((videoItem, key) => {
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
    </div>
  )
}

export default Home
