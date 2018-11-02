import React from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

const StarRating = ({ totalStars, starsSelected, onRate }) => {
	return (
		<div className="star-rating">
			{[...Array(totalStars)].map((star, i) => (
				<Star
					key={i}
					selected={i < starsSelected}
					onClick={() => onRate(i + 1)}
				/>
			))}
			<p>
				{starsSelected} of {totalStars} stars
			</p>
		</div>
	);
};

StarRating.propTypes = {
	totalStars: PropTypes.number,
	onRate: PropTypes.func
};

StarRating.defaultProps = {
	totalStars: 5
};

export default StarRating;
