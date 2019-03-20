import { combineReducers } from 'redux';
import contacts from './ContactReducers';

export default combineReducers({
    contacts: contacts
});