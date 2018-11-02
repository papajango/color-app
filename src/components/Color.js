import React from 'react';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import '../styles/Color.scss';

const Color = ({ title, color, rating, onRemove, onRate }) => {
	return (
		<section className="color">
			<h1>{title}</h1>
			<button onClick={onRemove} />
			<div className="color" style={{ background: color }} />
			<div>
				<StarRating starsSelected={rating} onRate={onRate} />
			</div>
		</section>
	);
};

Color.propTypes = {
	title: PropTypes.string,
	rating: PropTypes.number,
	color: PropTypes.string,
	onRate: PropTypes.func,
	onRemove: PropTypes.func
};

Color.defaultProps = {
	title: undefined,
	rating: 0,
	color: '#000',
	onRate: f => f,
	onRemove: f => f
};

export default Color;
