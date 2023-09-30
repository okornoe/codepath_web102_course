import React, {useState} from 'react'
import '../App.jsx'

export default function FlashCard(flashcard) {
    const [flip, setFlip] = useState(false)
    const ques = true
  return (
    <>
        <div className='header'>
        <h2>Know Ghana</h2>
        <h4>How well do you know Ghana? Test your knowledge here!</h4>
        <p>Number of cards: 10</p>
        </div>
        
        <div 
        className= {`card ${flip ? 'flip':''}`}
        onClick={() => setFlip(!flip)}>

        <div className='front'>
        {flip ? flashcard.answer : flashcard.question}
        </div>

        <div className='back'>
        {!flip ? flashcard.answer : flashcard.question}
        </div>

    </div>
    
    </>
  )
}
