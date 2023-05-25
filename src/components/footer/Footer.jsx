import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsDiscord} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>AKASH</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://www.facebook.com/profile.php?id=100014805342167' target='_blank'><FaFacebookF/></a>
                <a href='https://www.instagram.com/redstien/' target='_blank'><FiInstagram/></a>
                <a href='https://discordapp.com/users/566629465002737678' target='_blank'><BsDiscord/></a>
            </div>
        </footer>
    )
}

export default Footer