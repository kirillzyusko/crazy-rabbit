import {
    Animated,
    Easing
} from 'react-native';

import { G } from 'react-native-svg';

export const Animate = {
    ...Animated,
    G: Animated.createAnimatedComponent(G)
};
