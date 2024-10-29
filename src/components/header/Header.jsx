import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ico08.jpg'


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Francis Dominic Felecio</h1>
                <h2 className='text-light'>Frontend Developer</h2>
                <CTA/>
            
                <div className='me'>
                    <img src={ME} alt="me" />
                </div>

                <a href='#about' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header