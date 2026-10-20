import "./App.css";
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return (
    <div>
      <h1>My First React App</h1>
      <p>You click {count} times.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
