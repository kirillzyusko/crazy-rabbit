import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Arrow from './../components/menu/arrow.native';
import Svg, {G} from 'react-native-svg';
import Hero from "../components/models/heroes/hero.native";
import {height, width} from "../engine/constants";

class Gallery extends PureComponent {
    onClickHandler = (isLeft) => {
        console.log(isLeft);
    };

    render() {
        return (
            <Svg height={height} width={width}>
                <G>
                    <Arrow onClick={this.onClickHandler} isLeft={true}/>
                    <Hero/>
                    <Arrow onClick={this.onClickHandler} />
                </G>
            </Svg>
        )
    }
}

export default Gallery;