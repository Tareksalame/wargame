import React from 'react'
import { useState } from 'react'
import Players from './Players'

export default function HomePage(props) {

    const[name,setName] = useState('')
    const[arr,setArr] = useState([])
    let[flag,setFlag] = useState(false)

    const clickPlayers = ()=>
    {
        if(flag === false)
        {
            setFlag(true)
            setArr(props.playersArr.map((val,idx)=>
            {
                return <Players key={idx+1} name={val.name}  win={val.win} lose={val.lose} />
            }))
        }
        else
        {
            setFlag(false)
            setArr(props.playersArr.map((val,idx)=>
            {
                return <div key={idx+1}></div>
            }))
        }
    }

    
    const check = ()=>
    {
        props.gamestart(name)
    }
  return (
    <div className='mainDiv'>
        <h1 className='war'>♠️♦️♣️❤️<br /> حرب ضرب</h1>
        <input className='nameInput' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='اكتب اسمك' />

        <button className='buttons' onClick={check}>يلّا نلعب</button>
        <button className='buttons' onClick={clickPlayers}>اعرض قائمة اللاعبين</button>
        <div>{arr}</div>
    </div>
  )
}
