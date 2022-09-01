import './App.css';

import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Title from './components/Title';


function App() {

  const [input, setInput]= useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input !== "" && (input.startsWith("undefined") === false) && 
        (input.startsWith("+") === false) && (input.startsWith("*") === false) 
        && (input.startsWith("/") === false)) {
      setInput(evaluate(input));
       }  else {
        setInput("");
        alert("First Numbers, Please.");
  };
  };

  return (
    <><div className='box-titulo'>
      <Title className='box-title' />
    </div>
    <div className="App">

        <div className='box-calculator'>
          <Screen input={input} />
          <div className='row'>
            <Button doClick={addInput}>1</Button>
            <Button doClick={addInput}>2</Button>
            <Button doClick={addInput}>3</Button>
            <Button doClick={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button doClick={addInput}>4</Button>
            <Button doClick={addInput}>5</Button>
            <Button doClick={addInput}>6</Button>
            <Button doClick={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button doClick={addInput}>7</Button>
            <Button doClick={addInput}>8</Button>
            <Button doClick={addInput}>9</Button>
            <Button doClick={addInput}>*</Button>
          </div>
          <div className='row'>
            <Button doClick={calculateResult}>=</Button>
            <Button doClick={addInput}>0</Button>
            <Button doClick={addInput}>.</Button>
            <Button doClick={addInput}>/</Button>
          </div>
          <div className='row'>
            <ClearButton doClear={() => setInput('')}>Clear</ClearButton>
          </div>
        </div>
      </div></>
  );
}

export default App;
