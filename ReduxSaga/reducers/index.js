import { combineReducers } from 'redux';
import counterReducers from './counterReducers';

const allReducers = combineReducers({
    counterReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;