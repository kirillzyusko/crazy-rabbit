import {
  MENU_SCREEN,
  GAME_SCREEN,
  GALLERY_SCREEN,
  LEVEL_SCREEN
} from './navigation';
import Menu from './../containers/menu.native';
import Game from './../containers/game.native';
import Gallery from './../containers/gallery.native';
import Levels from './../containers/levels.native';

const screens = {};
screens[MENU_SCREEN] = Menu;
screens[GAME_SCREEN] = Game;
screens[GALLERY_SCREEN] = Gallery;
screens[LEVEL_SCREEN] = Levels;

const config = {
  initialRouteName: MENU_SCREEN,
  headerMode: 'none'
};

export { screens, config };
