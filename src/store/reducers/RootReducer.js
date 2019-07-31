import locationReducer from './locationReducer';
import  { combineReducers } from 'redux';

const RootReducer = combineReducers({
    location: locationReducer
});

export default RootReducer;