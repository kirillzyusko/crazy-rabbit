import { combineReducers } from 'redux';
import hero from './hero';
import ambient from './ambient';
import game from './game';

export default combineReducers({
    hero, ambient, game
});
