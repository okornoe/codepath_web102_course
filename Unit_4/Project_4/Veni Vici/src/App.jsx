import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiCard from './components/ApiCard';

//import access key
const ACCESS_KEY = import.meta.env.VENI_APP_ACCESS_KEY;
const json = "";
function App() {
  const [jsonRespone, setJsonResponse] = useState()


  

  const makeQuery = () => {
    let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`;
    callAPI(query).catch(console.error);
    
  }

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    console.log(json);
  }

  const onSubmit = () => {
    makeQuery()
  }
  

  return (
    <>
      <ApiCard onSubmit = {onSubmit} />
    </>
  )
}

export default App
