import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Arrow from './../components/menu/arrow.native';
import Svg, {G} from 'react-native-svg';
import Hero from "../components/models/heroes/hero.native";
import {height, width} from "../engine/constants/engine";
import {listOfHero} from "../engine/constants/hero";
import {getHeroByType} from "../utils/hero.native";

class Gallery extends PureComponent {
    constructor() {
        super();

        this.state = {
            index: 0
        }
    }

    onClickHandler = (isLeft) => {
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

    render() {
        console.log(listOfHero[this.state.index], listOfHero, this.state.index);
        return (
            <Svg height={height} width={width}>
                <G>
                    <Arrow onClick={this.onClickHandler} isLeft={true}/>
                    {
                        getHeroByType(listOfHero[this.state.index])
                    }
                    <Arrow onClick={this.onClickHandler} />
                </G>
            </Svg>
        )
    }
}

export default Gallery;
