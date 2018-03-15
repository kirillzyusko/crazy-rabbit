import { combineReducers } from 'redux';
import hero from './hero';
import ambient from './ambient';

export default combineReducers({
    hero, ambient
});