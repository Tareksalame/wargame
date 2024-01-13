
import './App.css';
import { useState } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import ResultsPage from './components/ResultsPage';

let playersArr = []
let player;
let computer;
function App() {
  // const[myPlayer,setMyPlayer] = useState()
  const[page,setPage] = useState(0);

  const onlinePage = ()=>
  {
    if(page === 0)
    {
      return <HomePage playersArr = {playersArr} gamestart = {gameStart}/>
    }
    else if (page === 1)
    {
      return <GamePage Cards ={Cards}  player = {player} computer = {computer} setPage = {setPage}/>
    }
    else 
    {
      return <ResultsPage player ={player} computer={computer} setPage ={setPage}/>
    }
  }
  
  const gameStart = (name)=>
  {
    let playerCheck = playersArr.find((val,idx)=>
      {
        return val.name === name
      })
      if(playerCheck === undefined)
      {
        let playerCards = []
        let computerCards = []
        let newCardsGame = new Cards();
        for (let i = 0; i < 26 ; i++)
        {
          playerCards.push(newCardsGame.dealer())
          computerCards.push(newCardsGame.dealer())
        }
        player = new Player(name,playerCards);
        computer = new Player('♠️♦️♣️❤️', computerCards);
        playersArr.push(player)
        
        setPage(1) 
      }
      else
      {
        let playerCards = []
        let computerCards = []
        let newCardsGame = new Cards();
        for (let i = 0; i < 26 ; i++)
        {
          playerCards.push(newCardsGame.dealer())
          computerCards.push(newCardsGame.dealer())
        }
        computer = new Player('♠️♦️♣️❤️', computerCards);
        playerCheck.cards = playerCards
        setPage(1) 
      }
      console.log(playerCheck)
  }
  
  // console.log(playersArr.find(gameStart()))

  // playersArr.splice(val,1);
  //       let playerCards = []
  //       let computerCards = []
  //       let newCardsGame = new Cards();
  //       for (let i = 0; i < 26 ; i++)
  //       {
  //         playerCards.push(newCardsGame.dealer())
  //         computerCards.push(newCardsGame.dealer())
  //       }
  //       player = new Player(name,playerCards);
  //       computer = new Player('Computer', computerCards);
  //       playersArr.push(player)
  //       setPage(1)





  return (
    <div className="App">
      {onlinePage()}
    </div>
  );
}

export default App;

class Player 
{
  games = 0
  win = 0
  lose = 0
  lastGame = 0

  constructor(name,cards)
  {
    this.name = name
    this.cards = cards
  }
}

class Cards 
{
  cards = []
  constructor()
  {
    this.gameCards()
  }

  gameCards()
  {
    for(let i = 1 ;i < 14 ; i++)
    {
      for(let j = 0; j < 4 ; j++)
      {
        this.cards.push(i)
      }
    }
  }

  dealer()
  {
    let random = Math.floor(Math.random()*this.cards.length);
    let card = this.cards.splice(random,1)
    return card[0];
  }
}

