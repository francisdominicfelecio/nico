import React from 'react'
import './portfolio.css'
import IMG1 from './../../assets/image.png'


const data = [
  {
    id:1,
    image: IMG1,
    title: 'My Portfolio Project',
    
  },



 
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                
              </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio