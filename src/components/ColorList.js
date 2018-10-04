import React, {Component } from 'react';
import Color from './Color';
import '../styles/ColorList.scss';
import PropTypes from 'prop-types';

class ColorList extends Component {
	static propTypes = {
		onRate: PropTypes.func,
		onRemove: PropTypes.func,
		colors: PropTypes.array
	}

	render() {
		const { colors, onRate, onRemove } = this.props;
		return (
			<div className='color-list'>
				{(colors.length === 0) ?
					<p>No colors listed. (Add a color)</p> :
					colors.map(color =>
						<Color key={color.id}
							{...color}
							onRate={(rating) => onRate(color.id, rating)}
							onRemove={()=>onRemove(color.id)}
						/>
						)
					}
			</div>
			)
	}
}

export default ColorList;