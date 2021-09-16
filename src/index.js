import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const counterReducer = (state = {counter: 0, toggleVisibility: true}, action) =>
{
  switch (action.type){
    case "Increment":
      return {
        counter: state.counter + 1,
        toggleVisibility: state.toggleVisibility
      };
    case "Decrement": 
      return {
        counter: state.counter - 1,
        toggleVisibility: state.toggleVisibility
      };
    case "ChangeToggleVisibility":
      return {
        counter: state.counter,
        toggleVisibility: !state.toggleVisibility
      }
    case "ChangeVisibility":
      return {
        counter: state.counter + action.payload.value,
        toggleVisibility: state.toggleVisibility
      }
    default: 
      return state;
  }
}

const store = createStore( counterReducer )


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);