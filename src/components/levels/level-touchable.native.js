import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Svg, {
	G,
	Rect,
	Text
} from 'react-native-svg';
import { TouchableOpacity, View } from 'react-native';
import {
	fontSize, leftMarginLevelButton,
	levelButtonMarginUpside,
	levelBlockWidth,
	levelButtonHeight, levelButtonMarginSide, starHeight, topMarginLevelButton, levelBlockHeight
} from '../../engine/constants/engine';
import Star from './star.native';
import Level from './level.native';

const SMOOTH = 10;

class LevelTouchable extends PureComponent {
	onClick = () => this.props.onClick(this.props.id);

	render() {
		const { row, column, isAllowed } = this.props;

		console.log(topMarginLevelButton + (levelBlockHeight + levelButtonMarginUpside) * row);

		const style = {
			position: 'absolute',
			left: leftMarginLevelButton + (levelBlockWidth + levelButtonMarginSide) * column,
			top: topMarginLevelButton + (levelBlockHeight + levelButtonMarginUpside) * row
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
	isAllowed: false
};

export default LevelTouchable;
