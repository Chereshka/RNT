import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
    appReducer,

});
export const store = createStore(rootReducer, applyMiddleware(thunk));