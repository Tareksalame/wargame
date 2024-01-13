import React, { useState } from 'react'
import Cards from './Cards'
import Score from './Score';
import './gamePage.css'
import Round from './Round';


let computerPoints = 0;
let playerPoints = 0;

export default function GamePage(props) {

    const[index,setIndex] = useState(0)
    const nextCard = ()=>
    {
        if(props.computer.cards[index] > props.player.cards[index])
        {
            computerPoints++
        }
        else if(props.computer.cards[index] < props.player.cards[index])
        {
            playerPoints++
        }
        
        if(index !== 25)
        {
            setIndex(index+1)
        }
        else
        {
            props.computer.games++
            props.player.games++
            if(computerPoints > playerPoints)
            {
                props.computer.win++
                props.player.lose++
                props.player.lastGame = 1
            }
            else if(computerPoints < playerPoints)
            {
                props.player.win++
                props.computer.lose++
                props.player.lastGame = 2
            }
            else
            {
                props.player.lastGame = 0
            }
            computerPoints = 0
            playerPoints = 0
            props.computer.cards = []
            props.player.cards = []
            let newCards = new props.Cards()
            for (let i = 0 ; i<26;i++)
            {
                props.computer.cards.push(newCards.dealer())
                props.player.cards.push(newCards.dealer())
            }
            props.setPage(2)
        }
    }

  return (
    <div>
        <div>
        <h1 style={{marginBottom:'0px'}} className='computerPlayer'>{props.computer.name}</h1>
        <Score points = {computerPoints}/>
        </div>
        <div className='cardsScore'>
        <Round index ={index}/>
        <div className='cardsDiv'>
        <Cards cardNum = {props.computer.cards[index]}/>
        <Cards cardNum = {props.player.cards[index]}/>
        </div>
        <div className='scoreDiv'>
        </div>
        <button className='NextCardButton' onClick={nextCard}>الكرت الّي بعده</button>
        </div>
        <Score points = {playerPoints}/>
        <h1 style={{marginTop:'0px'}} className='computerPlayer'>{props.player.name}</h1>
    </div>
  )
}


