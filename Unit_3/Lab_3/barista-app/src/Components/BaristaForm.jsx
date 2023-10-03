import React, { useState } from 'react'

const onCheckAnswer = () =>  {console.log("on check answer")};
const OnNewDrink = () =>  {console.log("on New Drink")};

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });


    const ingredients = {
        'temperature': ['hot', 'lukewarm','cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended':['yes', 'turbo', 'no']
    }
    
    return (
        <div>
            <h2>Hi, I'd like to order a: </h2>
            <form>
                
            </form>
            <button className= "button" id='submit' type='submit' onClick={()=>onCheckAnswer()}>
                Check Answer
            </button>
            <button className="button" id='submit' type='new-drink-button' onClick={() => OnNewDrink()}>
                New Drink
            </button>

        </div>
        
    );
};

export default BaristaForm;
