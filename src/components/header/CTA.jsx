import React from 'react'
import CV from '../../assets/cv.pdf'
import { useState } from 'react'

const CTA = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <div className='cta'>
        <a href='#' className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA