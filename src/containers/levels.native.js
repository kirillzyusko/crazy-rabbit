import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';
import LevelMap from '../components/levels/level-map.native';
import { levels as LEVELS } from './../engine/levels';

const levels = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

class Levels extends Component {
	onLevelClick = (index) => {
		console.log(index);
	}

  render() {
    return (
      <View>
        <BackgroundForest />
        <LevelMap onLevelClick={this.onLevelClick} levels={levels} />
      </View>
    );
  }
}

export default Levels;
