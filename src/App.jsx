import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import ReceipeForm from './components/ReceipeForm'

function App() {
  
  function handleClick(){

    const tempIsImportant = isimportant + 1;
    setIsImportant(tempIsImportant);
  }

  const [isimportant, setIsImportant] = useState(1);
  const [counter, setCounter] = useState(0);

  
  return (
    <>
    
      <Header title="Chef Cloude" />
      <ReceipeForm />

    </>
  )
  

  function increaseCount(){

    
    setCounter(prevCounter=> prevCounter + 1);
  }

  function decreaseCount(){
    setCounter(prevCounter=> prevCounter - 1); 
  }

  /*
  return (
    <>
      <button type='button' onClick={decreaseCount} >-</button>
      <h2>{counter}</h2>
      <button type='button' onClick={increaseCount} >+</button>
    </>
  )
    */

  const [isgoing, setisGoing] = useState(true);

  function toggleDecision(){

    setisGoing(!isgoing);
  }

  /*
  return (
    <button type='button' onClick={toggleDecision}>{isgoing? "Yes" : "No"}</button>
  )
  */

  const [myFavouriteThings, setMyFavouriteThings] = useState([]);

  function addNewitem(){

    setMyFavouriteThings((prevMyFavouriteThings) => [...prevMyFavouriteThings, "New Item"+prevMyFavouriteThings.length]);
  }

  /*
  return (
    <>
    <button type='button' onClick={addNewitem}>+ Add Item</button>
    <ul>
      {myFavouriteThings.map((things)=> {
        return <li>{things}</li>
        })
      }
    </ul>
    </>

  )
    */


}



export default App

