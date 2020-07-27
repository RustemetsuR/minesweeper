import React, { useState } from 'react';
import './App.css';
import Cube from '../components/Cube/Cube';
import Reset from '../components/Reset/Reset';
import Tries from '../components/Tries/Tries';


const App = () => {
  const [cubes, setCubes] = useState([]);
  let [tries, setTries] = useState(0);

  const pushToArr = (cubesCopy) => {
      for (let i = 0; i < 36; i++) {
        cubesCopy.push({
          id: 'id-' + i,
          status: false,
        })
      }
      setCubes(cubesCopy);
    } 
  const makeArr = () =>{
    const cubesCopy = [...cubes];
    if(cubesCopy.length === 36){
      cubesCopy.length = 0;
      pushToArr(cubesCopy);
    }else{
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
  
  const find = id => {
    tries++;
    setTries(tries);
    const index = cubes.findIndex(c => c.id === id);
    const cubesCopy = [...cubes];
    const cube = { ...cubesCopy[index] };
    console.log(cube)
    if (cube.status === true) {
      alert('NICE!');
      reset();
    }
    setCubes(cubesCopy);
  }
  
  let cubesField = cubes.map(oneCube => {
    return (
      <Cube find={() => find(oneCube.id)} key={oneCube.id}/>
    )
  })
  
  const marginButton = {marginTop: '25px'}

  return (
    <div className="App">
      <button style={marginButton} onClick={makeArr}>Create cubes</button>
      <Tries tries={tries}/>
      <Reset reset={reset}/>
      <div className="cube-field">
        {cubesField}
      </div>
    </div>
  );
}

export default App;
