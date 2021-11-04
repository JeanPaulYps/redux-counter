import { useDispatch, useSelector } from "react-redux";
import { counterSliceReducer } from './index';

function App() {
  const dispatch = useDispatch();
  const counter =  useSelector(state => state.counter);
  const toggleVisibility = useSelector(state => state.toggleVisibility);

  const incrementValue = ()=>{dispatch( counterSliceReducer.actions.Increment() )}
  const decrementValue = ()=>{dispatch( counterSliceReducer.actions.Decrement() )}
  const changeVisibility = ()=>{dispatch( counterSliceReducer.actions.ChangeToggleVisibility() )}
  const increaseByValue = ()=>{dispatch( counterSliceReducer.actions.IncreaseByValue(5) )}
  
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
