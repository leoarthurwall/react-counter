import { useState } from 'react';
import './App.css';

function App() {
  //state that stores count value
  const[count, setCount] = useState(0)

  //function that fires when buttons are clicked
  const incrementOne = () => {
     setCount (count + 1)
  }
  const decrementOne = () => {
    setCount (count - 1)
 }
 const incrementFive = () => {
  setCount (count + 5)
}
const decrementFive = () => {
 setCount (count - 5)
}
const multiplyTwo = () => {
  setCount ( count * 2)
}
const divideTwo = () => {
  setCount (count / 2)
}

  return (
    <div className="App">
      <h1>Counter</h1>
      <button  onClick={incrementOne}>+ 1</button>
      <button  onClick={decrementOne} >- 1</button>
      <button  onClick={incrementFive} >+ 5</button>
      <button  onClick={decrementFive} >- 5</button>
      <button  onClick={multiplyTwo} >x 2</button>
      <button  onClick={divideTwo} >÷ 2</button>

      <h2>{count}</h2>
    </div>
  );

}

export default App;
