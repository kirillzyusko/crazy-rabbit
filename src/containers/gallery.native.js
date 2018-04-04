import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import Svg, { G } from 'react-native-svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Arrow from './../components/menu/arrow.native';
import {
  height, heightOfArrow,
  heightOfHero,
  width, widthOfArrow,
  widthOfHero
} from '../engine/constants/engine';
import { listOfHero } from '../engine/constants/hero';
import { getHeroByType } from '../utils/hero.native';
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';
import { CHOOSE_HERO } from '../redux/actions/index';

const style = {
  position: 'absolute'
};

const styleLeftArrow = {
  ...style,
  top: (height - heightOfArrow / 2) / 2,
  right: (width) / 1.3
};

const styleRightArrow = {
  ...style,
  top: (height - heightOfArrow / 2) / 2,
  left: (width) / 2
};
// todo: make as common component
class Gallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: listOfHero.findIndex(type => props.hero.type === type)
    };
  }

  onClickHandler = (isLeft) => {
    const { index } = this.state;
    const newIndex = isLeft ? index - 1 : index + 1;

    this.setState({ index: newIndex });
    this.props.setHeroType(listOfHero[newIndex]);
  };

  onClickBack = () => this.onClickHandler(true);

  onClickNext = () => this.onClickHandler(false);

  isLast = () => this.state.index + 1 === listOfHero.length;

  isFirst = () => this.state.index === 0;

  render() {
    return (
      <View>
        <BackgroundForest />
        <View style={style}>
          <Svg height={height} width={width}>
            <G x={(width - widthOfHero) / 2} y={(height - heightOfHero) / 2}>
              {getHeroByType(listOfHero[this.state.index])}
            </G>
          </Svg>
        </View>
        <View style={styleLeftArrow}>
          {
            this.isFirst() ?
              <View>
                <Arrow isLeft />
              </View>
              :
              <TouchableOpacity onPress={this.onClickBack}>
                <Arrow isLeft />
              </TouchableOpacity>
          }
        </View>
        <View style={styleRightArrow}>
          {
            this.isLast() ?
              <View>
                <Arrow />
              </View>
              :
              <TouchableOpacity onPress={this.onClickNext}>
                <Arrow />
              </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setHeroType: (heroType) => {
    dispatch({ type: CHOOSE_HERO, payload: heroType });
  }
});

const mapStateToProps = state => ({
  hero: state.hero
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
