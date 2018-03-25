import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';
import Level from '../components/levels/level.native';
import LevelMap from '../components/levels/level-map.native';

const levels = [{}, {}, {}];

class Levels extends Component {
  render() {
    return (
      <View>
        <BackgroundForest />
        <LevelMap/>
      </View>
    );
  }
}

export default Levels;
