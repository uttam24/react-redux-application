import React from 'react'
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import {increment, decrement} from './actions/counter.action'
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch()

  function onIncClick() {
    dispatch(increment())
  }

  function onDecClick(){
    dispatch(decrement())
  }

  return (
    <div className="App">
      <h1>First Redux Application</h1>
      <Counter/>
      <Button name={"+"} onClick={onIncClick}/>
      <Button name={"-"} onClick={onDecClick}/> 
    </div>
  );
}

export default App;
