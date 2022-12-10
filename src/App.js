import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const getAPI = async() => {
      const response = await fetch("https://www.boredapi.com/api/activity/");
      const data = await response.json();
      setAdvice(data.activity);
    }
    getAPI();
  },[])

const changeAdvice = (e) => {
  e.preventDefault();
  setAdvice(advice);
}

  return (
    <div className='App'>
      <div className='container'>
        <h1>What should I do????....</h1>
      </div>
      <div className='container'>
        <h3>{advice}</h3>
      </div>
      <div className='container'>
        <form onSubmit={(e) => changeAdvice }>
        <button className='btn'>Give me other advice!</button>
        </form>
      </div>
    </div>
  );
}

export default App;
