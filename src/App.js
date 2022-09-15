import { useState } from 'react';
import './App.css';

function App() {
  //state that stores count value
  const[count, setCount] = useState(0)

  //function that fires when increment button is clicked
  const increment = () => {
     setCount (count + 1)
  }
  //function that fires when increment button is clicked
  const decrement = () => {
    setCount (count - 1)
 }

  return (
    <div className="App">
      <h1>Counter</h1>
      <button className='increment' onClick={increment}>+</button>
      <button className='decrement' onClick={decrement} >-</button>
      <h2>{count}</h2>
    </div>
  );

}

export default App;
