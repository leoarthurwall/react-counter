import './App.css';

function App() {
  
  function handleClick () {
    console.log("button clicked")
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
