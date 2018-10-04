import React, { Component } from 'react';
import '../styles/AddColorForm.scss';

class AddColorForm extends Component {
	submit = e => {
		e.preventDefault();
		const { onNewColor } = this.props;
		const { _title, _color } = this.refs;
		onNewColor(_title.value, _color.value);
		_title.value = '';
		_color.value = '#000';
		_title.focus();
	}

	render() {
		const { submit } = this;
		return (
			<form onSubmit={submit} className='add-color'>
				<input ref='_title'
					type='text'
					placeholder='color title...' required />
				<input ref='_color'
					type='color' required />
				<button>ADD</button>
			</form>
		)
	}
}

export default AddColorForm;