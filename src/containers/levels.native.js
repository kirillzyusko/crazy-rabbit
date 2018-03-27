import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';
import LevelMap from '../components/levels/level-map.native';
import LEVELS from './../engine/levels';
import Spinner from '../components/common/spinner.native';
import GameService from '../service/state.service.native';
import {GAME_SCREEN} from '../router/navigation';
import {SELECT_LEVEL} from '../actions';

const levels = LEVELS;

class Levels extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {

  }

  onLevelClick = (index) => {
    this.setState({isLoading: true});
    GameService.getUserData().then((data) => {
        console.log(data);
        this.setState({isLoading: false});
        this.props.selectLevel(index);
		this.props.navigation.navigate(GAME_SCREEN);
    });
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

Levels.propTypes = {
  selectLevel: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  selectLevel: (levelIndex) => {
    dispatch({type: SELECT_LEVEL, payload: levelIndex})
  }
});

export default connect(null, mapDispatchToProps)(Levels);
