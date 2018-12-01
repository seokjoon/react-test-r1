import * as types from '../actions/ActionsTypes';

const initalState = {
	number: 0,
};

const number = (state = initalState, action) => {
	switch (action.type) {
		case types.DECREMENT:
			return {
				number: state.number - 1,
			};
		case types.INCREMENT:
			return {
				number: state.number + 1,
			};
		default: return state;
	}
};

export default number;