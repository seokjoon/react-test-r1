import React, {Component} from 'react';

class Ch4 extends Component {

	state = {
		msg: '',
		username: '',
	};

	/* constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	} */

	//handleChange(e) {
	handleChange = (e) => {
		//this.setState({ msg: e.target.value })
		this.setState({ [e.target.name]: e.target.value })
		//console.log(e.target.value);
		//console.log(this.state.msg);
	};

	//handleClick() {
	handleClick = () => {
		console.log(this.state.msg + ':' + this.state.username);
		this.setState({ msg: '', username: '' });
	};

	handleKeyPress = (e) => {
		if(e.key === 'Enter') {
			this.handleClick();
		}
	};

	render() {
		return (
			<div>
				<input type="text" name="msg" placeholder="msg" value={this.state.msg} onChange={this.handleChange} /><br/>
				<input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} onKeyPress={this.handleKeyPress} /><br/>
				<button onClick={this.handleClick}>reset</button><br/>
			</div>
		);
	}

	/* render() {
		return (
			<div>
				<input type="text" name="msg" placeholder="input" value={this.state.msg} onChange={(e) => { this.setState({ msg: e.target.value }); }} />
				<button onClick={() => { this.setState({ msg: '' }); }}>reset</button>
			</div>
		);
	} */
}

export default Ch4;