import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';
import Level from '../components/levels/level.native';
import LevelContainer from '../components/levels/level-container.native';

class Levels extends Component {
  render() {
    return (
      <View>
        <BackgroundForest />
        <LevelContainer>
          <Level />
          <Level />
          <Level />
        </LevelContainer>
      </View>
    );
  }
}

export default Levels;
