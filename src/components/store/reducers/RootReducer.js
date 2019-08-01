import LocationReducer from './LocationReducer';
import OtherReducer from './OtherReducer';
import  { combineReducers } from 'redux';

const RootReducer = combineReducers({
    other: OtherReducer,
    location: LocationReducer
});

export default RootReducer;