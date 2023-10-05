import React, { useState } from 'react'
import RecipeChoices from './RecipeChoices';
import drinksJson from './drinks.json'

//const [currentDrink, setCurrentDrink] = useState('');
//const [trueRecipe, setTrueRecipe] = useState({});

const onCheckAnswer = () =>  {console.log("on check answer")};
const OnNewDrink = () =>  {
    setInput({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });

    getNextDrink();
};

const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
}

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
        <>
        <div>
            <h2>Hi, I'd like to order a: </h2>
            <div className='drink-container'>
                <h2 className='mini-header'>Current Drink</h2>
                <button className='button' type='new-drink-button' onClick={OnNewDrink}>new drink</button>
            </div>
            <form>
                
            </form>
            <button className= "button" id='submit' type='submit' onClick={()=>onCheckAnswer()}>
                Check Answer
            </button>
            <button className="button" id='submit' type='new-drink-button' onClick={() => OnNewDrink()}>
                New Drink
            </button>
        </div>

        <h3>Temperature</h3>
        <div className='answer-space'>
            {inputs["temperature"]}
        </div>

        <RecipeChoices
            handleChange={(e) => setInputs((preState) => (
                {
                    ...preState,
                    [e.target.name]: e.target.value,
                }
            ))}
            label="temperature"
            choices={ingredients["temperature"]}
            checked={inputs["temperature"]}
        />

        <h3>Milk</h3>
        <div className='answer-space'>
            {inputs["milk"]}
        </div>

        <RecipeChoices
            handleChange={(e) => setInputs((preState) => (
                {
                    ...preState,
                    [e.target.name]: e.target.value,
                }
            ))}
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
        />  

        <h3>Syrup</h3>
        <div className='answer-space'>
            {inputs["syrup"]}
        </div>

        <RecipeChoices
            handleChange={(e) => setInputs((preState) => (
                {
                    ...preState,
                    [e.target.name]: e.target.value,
                }
            ))}
            label="syrup"
            choices={ingredients["syrup"]}
            checked={inputs["syrup"]}
        />  

        <h3>Blended</h3>
        <div className='answer-space'>
            {inputs["blended"]}
        </div>

        <RecipeChoices
            handleChange={(e) => setInputs((preState) => (
                {
                    ...preState,
                    [e.target.name]: e.target.value,
                }
            ))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
        />  

        </>
    );
};

export default BaristaForm;
