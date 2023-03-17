import React from 'react'
import "./portfolioList.scss"
export const PortfolioList = ({title, active, setSelected, id}) => {
  return (
    <li className={active? 'active portfolioList':'portfolioList'} onClick={()=>setSelected(id)}>{title}</li>
  )
}
