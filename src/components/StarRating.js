import React, { Component } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

class StarRating extends Component {

	constructor(props) {
		super(props);
		this.state = {
			starsSelected: props.starsSelected || 0
		}
		//this.onRate = this.onRate.bind(this);
	}

	static propTypes = {
		totalStars: PropTypes.number,
		onRate: PropTypes.func
	}

	static defaultProps = {
		totalStars: 5
	}

	componentWillMount() {
		const { starsSelected } = this.props;
		if (starsSelected) {
			this.setState({ starsSelected });
		}
	}

	//onRate(starsSelected) {
	//	this.setState({ starsSelected });
	//}

	render() {
		const { totalStars, onRate} = this.props;
		const { starsSelected } = this.state;
		return (
			<div className='star-rating'>
				{[...Array(totalStars)].map((star, i) =>
					<Star key={i}
						selected={i < starsSelected}
						onClick={() => onRate(i+1)}
					/>
				)}
				<p>{starsSelected} of {totalStars} stars</p>
			</div>
			)
	}
}

export default StarRating;