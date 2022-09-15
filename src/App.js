import './App.css';

function App() {
  
  function handleClick () {
    console.log("button clicked")
  }
  function handleChange (event) {
    console.log(event.target.value)
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} placeholder="write something..."></input>
    </div>
  );
}

export default App;
