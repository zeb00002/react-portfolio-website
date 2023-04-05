import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


const data = [
  {
    id : 1,
    image : IMG1,
    title : "To Do App",
    github: "https://github.com/zeb00002/todo-app",
    demo : "https://sztodo.surge.sh"
  },
  {
    id : 2,
    image : IMG2,
    title : "Chat GPT Static",
    github: "https://github.com/zeb00002/gpt",
    demo : "shttps://zgpt.surge.sh"
  },
  {
    id : 3,
    image : IMG3,
    title : "Movies Database App",
    github: "https://github.com/zeb00002/movies_app",
    demo : "https://szmovies.surge.sh"
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
       data.map(({id,image,title,github,demo}) =>{
        return (
        <article key= {id} className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn">Github</a>
            <a href={demo} className="btn btn-primary">Live Demo</a>
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