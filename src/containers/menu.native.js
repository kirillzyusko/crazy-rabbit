import React, { PureComponent } from 'react';
import Svg, { G } from 'react-native-svg';
import Button from './../components/menu/button.native';
import ButtonContainer from './../components/menu/button-container.native';
import {height, width} from "../engine/constants/engine";

class Menu extends PureComponent {
    onClickHandler = (identifier) => {
        console.log(identifier);
    };

    render() {
        return (
            <Svg height={height} width={width}>
                <ButtonContainer>
                    <Button onClick={this.onClickHandler} identifier={'start'} title={'Start'} />
                    <Button onClick={this.onClickHandler} identifier={'select'} title={'Choose a hero'} />
                    <Button onClick={this.onClickHandler} identifier={'exit'} title={'Exit'} />
                </ButtonContainer>
            </Svg>
        )
    }
}

export default Menu;
