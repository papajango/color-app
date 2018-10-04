import React, { Component} from 'react';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import '../styles/Color.scss';

class Color extends Component {
	static propTypes = {
		title: PropTypes.string,
		rating: PropTypes.number,
		color: PropTypes.string,
		onRate: PropTypes.func,
		onRemove: PropTypes.func
	}

	static defaultProps = {
		title: undefined,
		rating: 0,
		color: '#000',
		onRate: f=>f
	}

	componentWillMount() {
		this.style = { backgroundColor: '#ccc' };
	}
	componentWillUpdate() {
		this.style = null;
	}
	componentDidUpdate(prevProps) {
		const { title, rating } = this.props;
		const status = (rating > prevProps.rating) ? 'better' : 'worse';
		console.log(`${title} is getting ${status}`);
	}
	shouldComponentUpdate(nextProps) {
		const { rating } = this.props;
		return rating !== nextProps.rating;
	}
	render() {
		const { title, color, rating, onRemove, onRate } = this.props;
		return (
			<section className='color' style={this.style}>
				<h1>{title}</h1>
				<button onClick={onRemove}></button>
				<div className='color'
					style={{background: color}}
				></div>
				<div>
					<StarRating starsSelected={rating} onRate={onRate} />
				</div>
			</section>
			)
	}
}

export default Color;