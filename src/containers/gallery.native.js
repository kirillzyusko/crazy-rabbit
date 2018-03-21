import React, { PureComponent } from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Arrow from './../components/menu/arrow.native';
import Svg, {G} from 'react-native-svg';
import Hero from "../components/models/heroes/hero.native";
import {
    height, heightOfArrow,
    heightOfHero,
    width, widthOfArrow,
    widthOfHero
} from "../engine/constants/engine";
import { listOfHero } from "../engine/constants/hero";
import { getHeroByType } from "../utils/hero.native";
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';

const style = {
  position: 'absolute'
};

const styleLeftArrow = {
    ...style,
    top: (height)/2,
    right: (width) / 1.3
};

const styleRightArrow = {
    ...style,
    top: (height)/2,
    left: (width-widthOfHero)/2
};

class Gallery extends PureComponent {
    constructor() {
        super();

        this.state = {
            index: 0
        }
    }

    onClickHandler = (isLeft) => {
        console.log();
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
    };

    onClickBack = () => this.onClickHandler(true);

    onClickNext = () => this.onClickHandler(false);

    render() {
        console.log(listOfHero[this.state.index], listOfHero, this.state.index);
        return (
            <View>
                <View style={style}>
                    <BackgroundForest />
                </View>
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

export default Gallery;
