import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Ch3 extends Component {

	static defaultProps = {
		age: 10,
		name: "default name",
	};

	static propTypes = {
		age: PropTypes.number.isRequired,
		name: PropTypes.string,
	};

	/* constructor(props) {
		super(props);
		this.state = {
			number: 30,
		}
	} */
	state = {
		number: 0,
	}

	render() {
		return (
			<div>
				{this.props.name} <br/>
				{this.props.age} <br/>
				{this.state.number} <br/>
				<button onClick={() => {
					this.setState({
						number: this.state.number + 1,
					})
				}}>add</button>
			</div>
		);
	}
}

export default Ch3;