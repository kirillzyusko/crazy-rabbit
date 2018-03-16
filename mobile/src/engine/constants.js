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
export const timeOfJump = 750; // ms
export const upperJump = 0.35;
export const downJump = 0.65;

// characteristics of environment
export const timeOfBlockMovement = 2000; //ms
export const inaccuraciesTime = 500; // latency before removing of block from redux state
