import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import weatherReducer from './weatherReducer';
// import userReducer from './userReducer';
// import userReducer from './userReducer';
// import each reducer and set them as their own state.

// using the name of the reducer to seperate state containers
const state = {
	weatherReducer: weatherReducer,
	counterReducer: counterReducer,
};

export default combineReducers(state);
