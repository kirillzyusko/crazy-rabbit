import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { G, Image } from 'react-native-svg';
import { isEqual } from 'lodash';
import { generate as UID } from 'shortid';
import Hero from '../models/heroes/hero.native';
import { height, width } from '../../engine/constants/engine';
import BlockFacility from '../models/environment/ambient/blocks/block-facility.native';
import EndGame from '../models/environment/game/end-game.native';
import Score from '../models/environment/game/score.native';
import BackgroundForest from '../models/environment/ambient/background/background-forest.native';
import Lives from '../models/environment/game/lives.native';

class Canvas extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !this.isTheSameProps(nextProps);
  }

  isTheSameProps = nextProps => isEqual(nextProps, this.props);

  render() {
    const { score, canPlay, blocks, lives } = this.props;
    return (
      <View>
        <BackgroundForest />
        <Lives lives={lives} />
        <Svg width={width} height={height}>
          {!canPlay && <EndGame />}
          <Score score={score} />
        </Svg>
        {
          blocks.map(block =>
            (<BlockFacility
              speed={block.speed}
              height={block.height}
              appearanceAt={block.appearance}
              key={block.id}
            />)
          )
        }
        <Hero />
      </View>
    );
  }
}

Canvas.propTypes = {
  score: PropTypes.number.isRequired,
  lives: PropTypes.number.isRequired,
  canPlay: PropTypes.bool.isRequired,
  blocks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    appearance: PropTypes.number.isRequired
  }))
};

export default Canvas;
