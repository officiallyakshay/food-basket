import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducer';
const reducerOne = () => {};

const store = createStore(reducerOne, applyMiddleware());

export default store;