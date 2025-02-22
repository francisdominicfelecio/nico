import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsDiscord} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>Ico</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://web.facebook.com/nicco423?_rdc=1&_rdr' target='_blank'><FaFacebookF/></a>
                
            </div>
        </footer>
    )
}

export default Footer