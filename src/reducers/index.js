import { combineReducers } from 'redux';
import postReducer from './postReducer';
import UserReducer from './UserReducer';

export default combineReducers({

    post : postReducer,
    users : UserReducer
});