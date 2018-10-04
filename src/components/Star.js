import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Star.scss';

class Star extends Component {
	static propTypes = {
		selected: PropTypes.bool,
		onClick: PropTypes.func
	}

	render() {
		const { onClick } = this.props;
		const { selected } = this.props;
		return (
			<div className={(selected) ? 'star selected' : 'star'}
				onClick={onClick}></div>
			)
	}
}

export default Star;