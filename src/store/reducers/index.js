import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import databaseReducer from './databaseReducer';


export default combineReducers({
    errors : errorReducer,
    database : databaseReducer
})