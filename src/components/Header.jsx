import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
 <nav>
  <h1>TechStar</h1>
  <main className='header-tab'>
    <HashLink to={"/#home"}>Home</HashLink>
    <Link style={{margin: '0 30px'}}  to={"/contact"}>Contact</Link>
    <HashLink to={"/#about"}>About</HashLink>
    <HashLink  style={{margin: '0 30px'}} to={"/#Brands"}>Brands</HashLink>
    <Link to={"/services"}>Services</Link>
  </main>

 </nav>
  )
}

export default Header