import React from 'react'

const onCheckAnswer = () =>  {console.log("on check answer")};
const OnNewDrink = () =>  {console.log("on New Drink")};

const BaristaForm = () => {

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
