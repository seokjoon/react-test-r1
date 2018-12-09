import input from './index';
import todos from './todos';
import { combineReducers } from 'redux';

export default combineReducers({
	input,
	todos,
});