import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';
import LevelMap from '../components/levels/level-map.native';
import LEVELS from './../engine/levels';
import Spinner from '../components/common/spinner.native';
import GameService from '../service/state.service.native';

const levels = LEVELS;

class Levels extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  onLevelClick = (index) => {
    this.setState({isLoading: true});
    GameService.getUserData().then((data) => {
        console.log(data);
        this.setState({isLoading: false});
    });
  	console.log(index);
  };

  render() {
    return (
      <View>
        <BackgroundForest />
        <Spinner isLoading={this.state.isLoading}/>
        <LevelMap onLevelClick={this.onLevelClick} levels={levels} />
      </View>
    );
  }
}

export default Levels;
