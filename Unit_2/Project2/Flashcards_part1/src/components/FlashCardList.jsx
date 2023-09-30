import React from 'react'
import FlashCard from './FlashCard'

export default function FlashCardList({flashcards}) {
  return (
    <>
    <div className='card-grid'>
        <FlashCard flashcard={flashcards} key={flashcards.id} />
    </div>

    <div>
        
    </div>

    </>
  )
}
