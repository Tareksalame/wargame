import React from 'react'

export default function ResultsPage(props) {
  
    const lastGame = ()=>
    {
        if(props.player.lastGame === 1)
        {
            return <div style={{color:'red'}}>You Lose</div>
        }
        else if (props.player.lastGame === 2)
        {
            return <div style={{color:'green'}}>You Win</div>
        }
        else 
        {
            return <div style={{color:'blue'}}>Draw</div>
        }
    }
  
    return (
    <div style={{marginTop:'60%'}}>
        <button className='buttons' onClick={()=>{props.setPage(0)}}>Exit</button>
        <h1 className='computerPlayer'>Lose / Win</h1>
        <h1 className='computerPlayer'>{props.player.lose} / {props.player.win}</h1>
        <h1 className='computerPlayer'>{lastGame()}</h1>
        <button className='buttons' onClick={()=>{props.setPage(1)}}>Play Again ?</button>
    </div>
  )
}
