import React from 'react'
import App from '../App'

const ApiCard = ({onSubmit}) => {
  return (
    <div>
        <div className='whole-page'>
            <h1>Trippin' on Cats</h1>
            <h3>Discover Mars!</h3>
            <br></br>
            <br></br>
            <div className='mars-image-container'>
                <h2>Filter Buttons</h2>
                <div>
                    
                    <button>Remove</button>
                </div>
                <div className='fetch-api'>
                    <button type='submit' className='button' onClick={onSubmit}>Fetch the api</button>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default ApiCard;
