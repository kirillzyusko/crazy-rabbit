import {
  MENU_SCREEN,
  GAME_SCREEN,
  GALLERY_SCREEN,
  LEVEL_SCREEN,
  WIZARD_SCREEN
} from './navigation';
import Menu from './../containers/menu.native';
import Game from './../containers/game.native';
import Gallery from './../containers/gallery.native';
import Levels from './../containers/levels.native';
import Wizard from '../containers/introduction/introduction.native';

const screens = {};
screens[MENU_SCREEN] = Menu;
screens[GAME_SCREEN] = Game;
screens[GALLERY_SCREEN] = Gallery;
screens[LEVEL_SCREEN] = Levels;
screens[WIZARD_SCREEN] = Wizard;

const config = {
  initialRouteName: WIZARD_SCREEN,
  headerMode: 'none'
};

export { screens, config };
