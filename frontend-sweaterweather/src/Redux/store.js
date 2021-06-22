import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';
// import { loadState } from '../utils/localStorage';

// const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);

let store = createStore(
	rootReducer,
	// persistedState,
	composeEnhancers(middleware)
);

export default store;
