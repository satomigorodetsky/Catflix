import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/root_reducer";
// after creating a reducer 
// come back here and import 
// rootReducer 

const configureStore = (preLoadedState = {}) =>  {
   return createStore(rootReducer, preLoadedState,applyMiddleware(thunk,logger))
}; 

export default configureStore; 