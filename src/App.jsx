import React from 'react'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(5);
  
  // let counter = 5;

  // const addValue = () => {
  //   if (counter < 20){setCounter(counter + 1)}
  //   else {
  //     alert("Counter cannot be greater than 20");
  //   }
    
  // }

  // const removeValue = () => {
  //   if (counter > 0){setCounter(counter - 1)}
  //   else {
  //     alert("Counter cannot be lesser than 0");
  //   }
  // }

  return (
    <>
      <h1>Chai aur React with vite</h1>
      <h2>Counter Value: {counter}</h2>

      <button disabled={counter >= 20} onClick={() => counter < 20 ? setCounter(counter + 1) : null}>➕</button> <br />
      <button disabled={counter <= 0} onClick={() => counter > 0 ? setCounter(counter - 1) : null}>➖</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
