import React, {Component} from 'react';
import './Ch2.css';

class Ch2 extends Component {
	render() {
		let msg = 'T1a';
		const style = { border: "1px solid gray", };
		return (
			<div>
				{console.log(msg)}
				<div style={style} className="foo"> {msg} </div>
				{(typeof null === "undefined") ? "true" : "false" } <br/>
				{(typeof foo === "undefined") ? "true" : false } <br/>
				{(typeof bar === "undefined") ? "true" : null } <br/>
				{(typeof foo === "undefined") && "true" } <br/>
			</div>
		);
	}
}

export default Ch2;