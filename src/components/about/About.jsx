import React from 'react'
import './about.css'
import ME from '../../assets/nicco.jpg'

const About = () => {
    return (
        <section id='about'>
            <h4>Get To Know</h4>
            <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
            <div className='about__me-image'>
                <img src={ME} alt='About Image'/>
            </div>
        </div>

        <div className='about__content'>
        <p>
        Hey there! I'm Ico, a 20-year-old web developer from Iloilo. I take immense pleasure in crafting functional and visually
        appealing websites that leave a lasting impression.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
        </div>
        </section>
    )
}

export default About