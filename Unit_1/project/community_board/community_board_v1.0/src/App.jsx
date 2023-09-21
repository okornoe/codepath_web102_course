import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className='App'>

      <h1>Software Engineering Cards</h1>
    
      <div className='card-grid'>
        <div id='card-box'>
          <Card title="Web Development" info="Prog. HTML and CSS"/>
        </div>
        <div id='card-box'>
          <Card title="Basic Physics" info="Lesson on computer systems"/>
        </div>
        <div id='card-box'>
          <Card title="Engineering Graphs" info="Lesson on graphic design"/>
        </div>
        <div id='card-box'>
          <Card title="Engineering Maths" info="Lesson on Calculus"/>
        </div>
        <div id='card-box'>
          <Card title="Database Systems" info="Database Design"/>
        </div>
        <div id='card-box'>
          <Card title="OOP" info="Fundamentals of OOP"/>
        </div>
        <div id='card-box'>
         <Card title="Java Development" info="Fundamentals of Java"/>
        </div>
        <div id='card-box'>
          <Card title="Data Structures" info="Data Structures and Algorithim"/>
        </div>
        <div id='card-box'>
          <Card title="Testing" info="Software Testing"/>
        </div>
        <div id='card-box'>
          <Card title="Data Analysis" info="Using Python in Analysis"/>
        </div>
        <div id='card-box'>
          <Card title="Operation Research" info="Modeling the real world"/>
        </div>
      </div>
    </div>
    
  )
}

export default App
