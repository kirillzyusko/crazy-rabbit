import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {height, levelBlockHeight, levelButtonHeight, levelPerRow} from '../../engine/constants/engine';

class LevelContainer extends PureComponent {
  render() {
    const countOfChildren = this.props.children.length;
    const startPositionByHeight = height / countOfChildren - levelBlockHeight / 2;
    return (
      this.props.children.map((child, index) => React.cloneElement(child, { key: index, id: index, startPosition: startPositionByHeight, row: index / levelPerRow, column: index % levelPerRow }))
    );
  }
}

LevelContainer.propTpes = {
  children: PropTypes.arrayOf(PropTypes.shape({}))
};

LevelContainer.defaultProps = {
  children: []
};

export default LevelContainer;
