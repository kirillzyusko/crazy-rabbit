import Dimensions from 'Dimensions';
export const { width, height } = Dimensions.get('window');

//alignment
const defaultBlockHeight = 258.5;
export const blockScalability = 0.25;
export const distanceWithRespectToGround = width / 4.63;
export const heightOfOneBlock = defaultBlockHeight * blockScalability;
export const groundHeight = height * 0.75;

//characteristics of hero
export const heightOfJump = heightOfOneBlock * 1.7;