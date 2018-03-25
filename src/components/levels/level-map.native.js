import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Level from './level.native';
import {
  height,
  levelBlockHeight,
  levelColumnPerPage,
  levelRowPerPage
} from '../../engine/constants/engine';

class LevelMap extends PureComponent {
  render() {
    const countOfLevels = this.props.levels.length;
    const levelPageCount = countOfLevels / levelColumnPerPage * levelRowPerPage;
    const startPositionByHeight = height / countOfLevels - levelBlockHeight / 2;
    return (
      this.props.levels.map((child, index) =>
        (
          <Level
            key={index}
            id={index}
            startPosition={startPositionByHeight}
            row={index / levelColumnPerPage}
            column={index % levelColumnPerPage}
          />
        )
      )
    );
  }
}

LevelMap.propTpes = {
  levels: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

LevelMap.defaultProps = {
  levels: []
};

export default LevelMap;
