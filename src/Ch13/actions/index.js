//action 객체 만드는 액션 생성 함수들 선언(action creators)
// () => ({}) 는 function() { return {} } 과 동일

import * as types from './ActionsTypes';

export const decrement = () => ({
	type: types.DECREMENT,
});

export const increment = () => ({
	type: types.INCREMENT,
});

export const setColor = (color) => ({
	type: types.SET_COLOR,
	color,
});