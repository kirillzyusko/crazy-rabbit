import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';
import LevelMap from '../components/levels/level-map.native';
import LEVELS from './../engine/levels';
import Spinner from '../components/common/spinner.native';
import GameService from '../service/state.service.native';
import { GAME_SCREEN, MENU_SCREEN } from '../router/navigation';
import { SELECT_LEVEL } from '../actions';

const createEmptyArray = (length) => {
    const array = [];
    for(let i = 0; i < length; i++) {
        array.push({});
    }
    return array;
};

class Levels extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      levels: createEmptyArray(LEVELS.length)
    };
  }

  componentDidMount() {
	  this.loadGameState();
  }

  // todo: refactor to functional style (fill doesn't work - the same reference to one object)
  loadGameState = () => {
	  this.setState({isLoading: true});
	  GameService.getUserData()
        .then((data) => {
	      const { levels } = data;
	      const levelsMap = createEmptyArray(LEVELS.length);

		  levels.forEach((item, index) => {
			  levelsMap[index].assessment = item;
			  levelsMap[index].isAllowed = true;
          });

          this.setState({levels: levelsMap, isLoading: false});
	    });
  };

  onLevelClick = (index) => {
    this.props.selectLevel(index);

    // todo: really? twice calling? investigate API of navigation!
    this.props.navigation.navigate(MENU_SCREEN);
	this.props.navigation.navigate(GAME_SCREEN);
  };

  render() {
    return (
      <View>
        <BackgroundForest />
        <Spinner isLoading={this.state.isLoading}/>
        <LevelMap onLevelClick={this.onLevelClick} levels={this.state.levels} />
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
