import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
            <div className='about__me-image'>
                <img src={ME} alt='About Image'/>
            </div>
        </div>

        <div className='about__content'>
        <p>
        Hey there! I'm Akash, a 21-year-old web developer from Agra. Currently pursuing my Bachelor's degree
        in Computer Science Engineering, I possess a profound passion for technology and web development.
        The power of technology to connect individuals across the globe is an aspect that truly ignites my enthusiasm.
        I find technology endlessly fascinating.I take immense pleasure in crafting functional and visually
        appealing websites that leave a lasting impression.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
        </div>
        </section>
    )
}

export default About