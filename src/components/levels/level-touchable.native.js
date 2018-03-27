import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import {
	leftMarginLevelButton,
	levelButtonMarginUpside,
	levelBlockWidth,
	levelButtonMarginSide,
	topMarginLevelButton,
	levelBlockHeight
} from '../../engine/constants/engine';
import Level from './level.native';

class LevelTouchable extends PureComponent {
	onClick = () => this.props.onClick(this.props.id);

	render() {
		const { row, column, isAllowed } = this.props;
		const style = {
			position: 'absolute',
			left: leftMarginLevelButton + (levelBlockWidth + levelButtonMarginSide) * column,
			top: topMarginLevelButton + levelBlockHeight * row + levelButtonMarginUpside * (row - 1 >= 0 ? row : 0)
		};

		return (
			isAllowed ?
				<TouchableOpacity
					onPress={this.onClick}
					style={style}
				>
					<Level {...this.props} />
				</TouchableOpacity>
				:
				<View style={style}>
					<Level {...this.props} />
				</View>
		);
	}
}

LevelTouchable.propTypes = {
	id: PropTypes.number.isRequired,
	startPosition: PropTypes.number.isRequired,
	assessment: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isAllowed: PropTypes.bool.isRequired,
	row: PropTypes.number.isRequired,
	column: PropTypes.number.isRequired
};

LevelTouchable.defaultProps = {
	isAllowed: false,
	assessment: 0
};

export default LevelTouchable;
