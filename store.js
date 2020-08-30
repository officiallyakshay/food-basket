import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducer';

const store = createStore(() => [], {}, applyMiddleware());

export default store;