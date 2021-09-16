import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const counter =  useSelector(state => state.counter);
  const toggleVisibility = useSelector(state => state.toggleVisibility);

  const incrementValue = ()=>{dispatch({type: "Increment"})}
  const decrementValue = ()=>{dispatch({type: "Decrement"})}
  const changeVisibility = ()=>{dispatch({type: "ChangeToggleVisibility"})}
  const increaseByValue = ()=>{dispatch({
    type: "ChangeVisibility",
    payload: {
      value: 5
    }
  })}
  
  return (
    <div>
      <h1>Redux Counter</h1>
      {toggleVisibility &&  <p> { counter } </p>}
      <button onClick={incrementValue} >Increment</button>
      <button onClick={increaseByValue} >Increase by 5</button>
      <button onClick={decrementValue}>Decrement</button>
      <button onClick={changeVisibility}>Toggle counter</button>
    </div>
  );
}

export default App;
