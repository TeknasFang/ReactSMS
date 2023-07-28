import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import combineReducers from '../reducer/index';

const store = createStore(combineReducers);

export default store
