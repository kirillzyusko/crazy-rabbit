import React, { PureComponent } from 'react';
import {
  View,
  BackAndroid
} from 'react-native';
import Button from './../components/menu/button.native';
import ButtonContainer from './../components/menu/button-container.native';
import { GALLERY_SCREEN, GAME_SCREEN, LEVEL_SCREEN } from '../router/navigation';
import BackgroundForest from '../components/models/environment/ambient/background/background-forest.native';

// todo: add support not only for android
class Menu extends PureComponent {
  onClickHandler = (identifier) => {
    switch (identifier) {
      case 'start':
        this.props.navigation.navigate(GAME_SCREEN);
        break;
      case 'level':
        this.props.navigation.navigate(LEVEL_SCREEN);
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
        <BackgroundForest />
        <ButtonContainer>
          <Button onClick={this.onClickHandler} identifier={'start'} title={'Start'} />
          <Button title={'Select level'} onClick={this.onClickHandler} identifier={'level'} />
          <Button onClick={this.onClickHandler} identifier={'select'} title={'Choose a hero'} />
          <Button onClick={this.onClickHandler} identifier={'exit'} title={'Exit'} />
        </ButtonContainer>
      </View>
    );
  }
}

export default Menu;
