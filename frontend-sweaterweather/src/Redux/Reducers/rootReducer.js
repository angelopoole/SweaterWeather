import { combineReducers } from 'redux';

// import each reducer and add them to state.
import weatherReducer from './weatherReducer';

// using the name of the reducer to seperate state containers
const state = {
	weatherReducer: weatherReducer,
};

export default combineReducers(state);
