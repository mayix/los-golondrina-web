import React, {useState} from 'react'
import Logo from '../assets/los-golondrina-logo-letras.png'
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css"

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img alt='Logo' src={Logo} />
            <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="/videos">Videos</Link>
                <Link to="/live">Live</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/live">Live</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default Navbar
