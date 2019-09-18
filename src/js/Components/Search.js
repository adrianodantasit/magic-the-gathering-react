import React, { Component } from 'react';

class Search extends Component {
	render() {
		const colors = [ 'White', 'Blue', 'Black', 'Red', 'Green', 'Purple' ];

		return (
			<div className="select-colors">
				<label htmlFor="color">
					Pick a color:
					<select
						id="color"
						value={this.props.color}
						onChange={this.props.handleColorChange}
						onBlur={this.props.handleColorChange}
					>
						<option />
						{colors.map((color) => (
							<option key={color} value={color}>
								{' '}
								{color}
							</option>
						))}
					</select>
				</label>
			</div>
		);
	}
}

export default Search;
