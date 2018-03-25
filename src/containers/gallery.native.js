import React, { PureComponent } from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import Svg, {G} from 'react-native-svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Arrow from './../components/menu/arrow.native';
import {
    height, heightOfArrow,
    heightOfHero,
    width, widthOfArrow,
    widthOfHero
} from "../engine/constants/engine";
import { listOfHero } from "../engine/constants/hero";
import { getHeroByType } from "../utils/hero.native";
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';
import {CHOOSE_HERO} from "../actions/index";

const style = {
  position: 'absolute'
};

const styleLeftArrow = {
    ...style,
    top: (height - heightOfArrow/2)/2,
    right: (width) / 1.3
};

const styleRightArrow = {
    ...style,
    top: (height - heightOfArrow/2)/2,
    left: (width)/2
};
//todo: make as common component
class Gallery extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: listOfHero.findIndex(type => props.hero.type === type)
        }
    }

    onClickHandler = (isLeft) => {
        console.log(isLeft);
        const { index } = this.state;
        const newIndex = isLeft ?
            index === 0 ?
                0 :
                index - 1
            :
            index === listOfHero.length ?
                listOfHero.length :
                index + 1;

        this.setState({index: newIndex});
        this.props.setHeroType(listOfHero[newIndex]);
    };

    onClickBack = () => this.onClickHandler(true);

    onClickNext = () => this.onClickHandler(false);

    render() {
        console.log(listOfHero[this.state.index], listOfHero, this.state.index);
        return (
            <View>
                <BackgroundForest />
                <View style={style}>
                    <Svg height={height} width={width}>
                        <G x={(width-widthOfHero)/2} y={(height-heightOfHero)/2}>
                            {getHeroByType(listOfHero[this.state.index])}
                        </G>
                    </Svg>
                </View>
                <View style={styleLeftArrow}>
                    <TouchableOpacity onPress={this.onClickBack}>
                        <Arrow isLeft={true}/>
                    </TouchableOpacity>
                </View>
                <View style={styleRightArrow}>
                    <TouchableOpacity onPress={this.onClickNext}>
                        <Arrow />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setHeroType: (heroType) => {
        dispatch({type: CHOOSE_HERO, payload: heroType})
    }
});

const mapStateToProps = state => ({
    hero: state.hero
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
