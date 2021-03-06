import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sample from 'lodash/sample';

import s from './RandomButton.css';

/**
 * Button that changes label on every click.
 */
export default class RandomButton extends Component {
	static propTypes = {
		/**
		 * List of possible labels.
		 */
		variants: PropTypes.array.isRequired,
	};

	constructor(props) {
		super();
		this.state = {
			label: sample(props.variants),
		};
	}

	handleClick = () => {
		this.setState({
			label: sample(this.props.variants),
		});
	};

	render() {
		return (
			<button className={s.root} onClick={this.handleClick}>
				{this.state.label}
			</button>
		);
	}
}
