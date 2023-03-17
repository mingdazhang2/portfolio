import React, { useState, useEffect } from 'react'
import './portfolio.scss'
import { PortfolioList } from '../portfolioList/PortfolioList'
import {webPortfolio,featuredPortfolio} from "../../data"

export const Portfolio = () => {
  const [selected, setSelected ] = useState("featured")
  const [data, setData ] = useState([])

  const list =[
    {
      id:"featured",
      title:"Featured",
    },
    {
      id:"web",
      title:"Web app",
    },
    {
      id:"node",
      title:"Node",
    },
  ]

  useEffect(()=>{
    switch(selected){
        case "featured":
        setData(featuredPortfolio);
        break;

        case "web":
        setData(webPortfolio);
        break;

        default: setData(featuredPortfolio);
      
    }
  },[selected])
  return (
    <div className='portfolio' id='portfolio'>
      <div className='h1'>Portfolio</div>
      <ul>
       {list.map(item =>(
          <PortfolioList title={item.title} active={selected === item.id} setSelected ={setSelected } id={item.id}/>
       ))}
      </ul>
      <div className='container'>
          {data.map(d=>(
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
    
          ))}
        
      </div>
    </div>
  )
}
