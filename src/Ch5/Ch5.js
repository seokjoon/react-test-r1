import React, {Component} from 'react';
import './Ch5.css';
import Ch5Scroll from "./Ch5Scroll";

class Ch5 extends Component {

	state = {
		clicked: false,
		password: '',
		validated: false,
	};

	handleChange = (e) => {
		this.setState({
			password: e.target.value,
		});
	};

	handleButtonClick = () => {
		this.setState({
			clicked: true,
			validated: this.state.password === '000',
		});
		this.input.focus();
	};

	render() {
		return (
			<div>
				<div>
					<Ch5Scroll ref={(ref) => this.scrollBox=ref}/>
					<button onClick={() => this.scrollBox.scrollToBottom()}>toBottom</button>
				</div>
				<input ref={(ref) => this.input=ref} type="password" value={this.state.password} onChange={this.handleChange} className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : '' } />
				<button onClick={this.handleButtonClick}>validate</button>
			</div>
		);
	}
}

export default Ch5;