import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Star.scss';

const Star = props => {
	return (
		<div
			className={props.selected ? 'star selected' : 'star'}
			onClick={props.onClick}
		/>
	);
};

Star.propTypes = {
	selected: PropTypes.bool,
	onClick: PropTypes.func
};

export default Star;
