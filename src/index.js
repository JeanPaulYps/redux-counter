import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {counter: 0, toggleVisibility: true};

const counterSliceReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Increment (state) {
      state.counter += 1;
    },
    Decrement (state) {
      state.counter -=1;
    },
    ChangeToggleVisibility (state) {
      state.toggleVisibility = !state.toggleVisibility
    },
    IncreaseByValue (state, action) {
      state.counter += action.payload
    }
  }

})

const store = createStore( counterSliceReducer.reducer )


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export { counterSliceReducer, }