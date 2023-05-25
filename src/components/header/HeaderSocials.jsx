import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/akash-x-11734b225/' target='_blank'><BsLinkedin/></a>
            <a href='https://github.com/Akashx1550' target='_blank'><FaGithub/></a>
            <a href='https://twitter.com/Akash__X' target='_blank'><BsTwitter/></a>
        </div>
    )
}

export default HeaderSocials