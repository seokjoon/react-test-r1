import React, {Component} from 'react';
import Counter from "../components/Counter";
import CounterContainer from './CounterContainer';
import './Ch13.css';

class Ch13 extends Component {
	render() {
		return (
			<div>
				<CounterContainer/>
				<Counter/>
			</div>
		);
	}
}

export default Ch13;