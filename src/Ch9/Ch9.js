import React, {Component} from 'react';
//import classNames from 'classnames';
//import classNames from 'classnames/bind';
//import styles from './Ch9.css';
//import styles from './Ch9.scss';
import Button from './Components/Button';
import StyledButton from './Components/StyledButton';

//const cx = classNames.bind(styles);

class Ch9 extends Component {
	render() {
		const isBlue = true;
		return (
			/*
			//<div className={[styles.box, styles.blue].join(' ')}>
			//<div className={classNames(styles.box, styles.blue)}>
			//<div className={cx('box', {blue:isBlue})}>
			//</div>
			<div className={cx('box', { blue:isBlue })}>
				<div className={cx('box-inside')}>
				</div>
			</div>
			*/
			<div>
				<Button>button</Button>
				<StyledButton big>button</StyledButton>
			</div>
		);

	}
}

export default Ch9;