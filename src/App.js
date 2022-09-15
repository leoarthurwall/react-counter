import { useState } from 'react';
import './App.css';

function App() {

  const [output, setOutput] = useState('')
  const [submit, setSubmit] = useState(false)
  
  function handleClick () {
    console.log("button clicked")
    setSubmit(!submit)
    console.log(submit)
  }
  function handleChange (event) {
    console.log(event.target.value)
    setOutput(event.target.value)
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input onChange={handleChange} placeholder="write something..."></input>
     <button onClick={handleClick}>submit</button>
      <h2>{output}</h2>
    </div>
  );

}

export default App;
