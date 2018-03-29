import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { G, Image } from 'react-native-svg';
import { isEqual } from 'lodash';
import { generate as UID } from 'shortid';
import Hero from '../components/models/heroes/hero.native';
import Sky from '../components/models/environment/ambient/background/components/sky.native';
import Ground from '../components/models/environment/ambient/background/components/ground.native';
import { height, width } from '../engine/constants/engine';
import BlockFacility from '../components/models/environment/ambient/blocks/block-facility.native';
import EndGame from '../components/models/environment/game/end-game.native';
import Score from '../components/models/environment/game/score.native';
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';
import Lives from '../components/models/environment/game/lives.native';

class Canvas extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !this.isTheSameProps(nextProps);
  }

  isTheSameProps = nextProps => isEqual(nextProps, this.props);

  render() {
    console.log('rerender canvas');
    const { score, canPlay, heroType, action, blocks, lives } = this.props;
    return (
      <View>
        <BackgroundForest />
        <Lives lives={lives} />
        <Svg width={width} height={height}>
          {!canPlay && <EndGame />}
          <Score score={score} />
        </Svg>
        {blocks.map(block => <BlockFacility height={block.height} appearanceAt={block.appearance} key={block.id} />)}
        <Hero type={heroType} action={action} />
      </View>
    );
  }
}

Canvas.propTypes = {
  action: PropTypes.string,
  score: PropTypes.number.isRequired,
  heroType: PropTypes.string.isRequired,
  lives: PropTypes.number.isRequired,
  canPlay: PropTypes.bool.isRequired,
  blocks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    appearance: PropTypes.number.isRequired
  }))
};

export default Canvas;
