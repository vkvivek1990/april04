import { applyMiddleware, createStore } from 'redux';
import reducer from './combine-reducer';
import thunk from 'redux-thunk';
const getMiddleware = () => applyMiddleware(thunk);
const store = createStore(reducer, getMiddleware());
export {
    store
}