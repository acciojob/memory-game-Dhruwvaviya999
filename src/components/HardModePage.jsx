import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function generateShuffledNumbers(){
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return numbers.sort(() => Math.random() - 0.5);
}

const HardModePage = () => {

  const navigate = useNavigate();

  const [lockBoard, setLockBoard] = useState(false);
  const [matched, setMatched] = useState([]);
  const [opened, setOpened] = useState([]);
  const [numbers, setNumbers] = useState(generateShuffledNumbers());
  const [tries, setTries] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  

  function handleBoxClick(index){
    
    if(lockBoard || matched.includes(index) || opened.includes(index)) return;
    
    const newOpened = [...opened, index];
    setOpened(newOpened);
    
    if(newOpened.length === 2){
      setTries((prev) => prev + 1);
      const [first, second] = newOpened;
      setLockBoard(true);
      
      if(numbers[first] === numbers[second]){
        setMatched((prev) => [...prev, first, second]);
        if(matched.length === 6){
          setIsCompleted(true)
        }
        
        setTimeout(() => {
          setOpened([]);
          setLockBoard(false);
        },500);
      } else {
        setTimeout(() => {
          setOpened([]);
          setLockBoard(false);
        }, 1000);
      }
    }
    
  }

  function resetGame(){
    setNumbers(generateShuffledNumbers());
    setOpened([]);
    setMatched([]);
    setLockBoard(false);
    setTries(0);
  }

  function newGame(){
    navigate("/");
  }

  return (
    <div className='hard-mode-page'>
      <div className='header'>
        <h1 className='header-h1'>GaMe Yo</h1>
        <h2 className='header-tries'>Tries: {tries}</h2>
        <h2 style={{display: isCompleted ? "block" : "none"}} className='game-result'>ALL SOLVED!</h2>
        <div style={{display:'flex', width: '31rem', justifyContent:'space-between', marginBottom: '2rem'}}>
          <button className='newGameBtn' onClick={newGame}>New Game</button>
          <button className='resetGameBtn' onClick={resetGame}>Reset Game</button>
        </div>
      </div>
      <div className='cells_container' id='hard-board'>
        {
          numbers.map((num, index) => {
            const isFlipped = matched.includes(index) || opened.includes(index);
            return <div onClick={() => handleBoxClick(index)} key={index} className='cells'>{isFlipped ? num : ""}</div>
          })
        }
      </div>
    </div>
  )
}

export default HardModePage