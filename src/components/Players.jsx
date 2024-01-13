import React from 'react'
import './players.css'
export default function Players(props) {
  return (
    <div className='players'>
        <h1 style={{paddingLeft:'15%'}}>الاسم  <br /> <span>{props.name}</span> </h1>
        <h1 style={{paddingLeft:'15%'}}>فوز  <br />   <span>{props.win}</span></h1>
        <h1 style={{paddingLeft:'15%'}}>خسارة  <br /> <span>{props.lose}</span></h1>
    </div>
  )
}
