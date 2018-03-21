import React, { PureComponent } from 'react';
import {
    View,
    BackAndroid
} from 'react-native';
import Button from './../components/menu/button.native';
import ButtonContainer from './../components/menu/button-container.native';
import {GALLERY_SCREEN, GAME_SCREEN} from "../router/navigation";
import BackgroundBasic from '../components/models/environment/ambient/background/background-forest.native';

//todo: add support not only for android
class Menu extends PureComponent {
    onClickHandler = (identifier) => {
        switch(identifier) {
            case 'start':
                this.props.navigation.navigate(GAME_SCREEN);
                break;
            case 'select':
                this.props.navigation.navigate(GALLERY_SCREEN);
                break;
            case 'exit':
                BackAndroid.exitApp();
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <View>
                <BackgroundBasic />
                <ButtonContainer>
                    <Button onClick={this.onClickHandler} identifier={'start'} title={'Start'} />
                    <Button onClick={this.onClickHandler} identifier={'select'} title={'Choose a hero'} />
                    <Button onClick={this.onClickHandler} identifier={'exit'} title={'Exit'} />
                </ButtonContainer>
            </View>
        )
    }
}

export default Menu;
