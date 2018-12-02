import color from './color';
import number from './number';
import { combineReducers } from "redux";

const reducers = combineReducers({
	numberData: number,
	colorData: color,
});

export default reducers;

/* import * as types from '../actions/ActionsTypes';

const initialState = {
	color: 'black',
	number: 0,
};

function counter(state = initialState, action) {
	switch (action.type) {
		case types.DECREMENT:
			return {
				...state,
				number: state.number - 1,
			};
		case types.INCREMENT:
			return {
				...state,
				number: state.number + 1,
			};
		case types.SET_COLOR:
			return {
				...state,
				color: action.color,
			};
		default:
			return state;
	}
}

export default counter; */