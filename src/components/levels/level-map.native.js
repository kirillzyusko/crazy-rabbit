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
            onClick={this.props.onLevelClick}
            key={index}
            id={index + 1} /* todo: replace it when it will be necessary */
            startPosition={startPositionByHeight}
            row={Math.floor(index / levelColumnPerPage)}
            column={index % levelColumnPerPage}
            title={index + 1}
            assessment={2} /* n of 3 */
          />
        )
      )
    );
  }
}

LevelMap.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onLevelClick: PropTypes.func.isRequired
};

LevelMap.defaultProps = {
  levels: []
};

export default LevelMap;
