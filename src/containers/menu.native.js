import React, { PureComponent } from 'react';
import Svg, { G } from 'react-native-svg';
import Button from './../components/menu/button.native';
import ButtonContainer from './../components/menu/button-container.native';
import {height, width} from "../engine/constants";

class Menu extends PureComponent {
    onClickHandler = (id) => {
        console.log(id);
    };

    render() {
        return (
            <Svg height={height} width={width}>
                <ButtonContainer>
                    <Button onClick={this.onClickHandler} title={'Start'} />
                    <Button onClick={this.onClickHandler} title={'Choose a hero'} />
                    <Button onClick={this.onClickHandler} title={'Exit'} />
                </ButtonContainer>
            </Svg>
        )
    }
}

export default Menu;