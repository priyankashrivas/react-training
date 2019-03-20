import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducers from './authReducers';
import streamReducer from './streamReducer';



export default combineReducers({
    //assigning the authreducer object on key
    auth : authReducers,
    form : formReducer,
    streams : streamReducer
});