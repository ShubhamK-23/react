import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)
  // let counter = 5

  const addValue = () => {
    console.log('Added Value',counter);
    if (counter <= 19)
    {
      counter = counter + 1;  
      setCounter(counter)
    } else{
      alert("You can only enter values upto"+" "+ "20");
    }

  }

  const removeValue = () => {
    console.log('Value removed',counter)
    if (counter >0){
      setCounter(counter-1)
    }else{
      alert("Current value is 0")
    }
    
  }
  return(
    <>
      <h1>Hello React</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue} id="addValue">Add Value</button>
      <button onClick={removeValue} id="removeValue">Remove Value</button>

      <p>Current counter value is {counter}, <br></br> Add/Remove counter value to have fun :p </p>
    </>
  )
   

}

export default App
