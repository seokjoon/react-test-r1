//action 객체 만드는 액션 생성 함수들 선언(action creators)
// () => ({}) 는 function() { return {} } 과 동일

import * as types from './ActionsTypes';

export const create = (color) => ({
	type: types.CREATE,
	color,
});

export const decrement = (index) => ({
	type: types.DECREMENT,
	index,
});

export const increment = (index) => ({
	type: types.INCREMENT,
	index,
});

export const remove = () => ({
	type: types.REMOVE,
});

export const setColor = ({index, color}) => ({
	type: types.SET_COLOR,
	color,
	index,
});