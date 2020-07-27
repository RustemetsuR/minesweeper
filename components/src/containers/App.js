import React from 'react';
import './App.css';

const App = () => {
  const [cubes, setCubes] = useState([]);

  const pushToArr = (cubesCopy) => {
    for (let i = 0; i < 36; i++) {
      cubesCopy.push({
        id: 'id-' + i,
        status: false,
      })
    }
    setCubes(cubesCopy);
  }

  const makeArr = () => {
    const cubesCopy = [...cubes];
    if (cubesCopy.length === 36) {
      cubesCopy.length = 0;
      pushToArr(cubesCopy);
    } else {
      pushToArr(cubesCopy);
    }
  }

  const reset = () => {
    if (cubes.length !== 0) {
      tries = 0;
      setTries(tries);
      const random = Math.floor(Math.random() * 36);
      const cubesCopy = [...cubes];
      for (let i = 0; i < cubesCopy.length; i++) {
        cubesCopy[i].status = false;
      }
      cubesCopy[random].status = true;
      console.log(cubesCopy[random])
      setCubes(cubesCopy);
    }
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
