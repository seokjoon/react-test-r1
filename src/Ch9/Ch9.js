import React, {Component} from 'react';
//import classNames from 'classnames';
import classNames from 'classnames/bind';
//import styles from './Ch9.css';
import styles from './Ch9.scss';

const cx = classNames.bind(styles);

class Ch9 extends Component {
	render() {
		const isBlue = true;
		return (
			//<div className={[styles.box, styles.blue].join(' ')}>
			//<div className={classNames(styles.box, styles.blue)}>
			//<div className={cx('box', {blue:isBlue})}>
			//</div>
			<div className={cx('box', { blue:isBlue })}>
				<div className={cx('box-inside')}>
				</div>
			</div>
		);

	}
}

export default Ch9;