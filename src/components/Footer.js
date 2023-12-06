import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import "../styles/Footer.css"
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link to={"https://www.instagram.com/los.golondrina/"}>
          <InstagramIcon/>
        </Link>
        <Link to={"https://www.facebook.com/LosGolondrinaBanda"}>
          <FacebookIcon/>
        </Link>
        <Link to={"https://www.youtube.com/@losgolondrina"}>
          <YoutubeIcon/>
        </Link>
      </div>
      <p> &copy; 2023 losgolondrina.com</p>
    </div>
  )
}

export default Footer
