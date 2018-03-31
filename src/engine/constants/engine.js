import Dimensions from 'Dimensions';
export const { width, height } = Dimensions.get('window');

// svg size
const defaultBlockHeight = 258.5;
const blockRelativeScalability = 0.1;
const heroRelativeScalability = 0.2;
export const oneBackgroundFrameWidth = 533;
export const blockScalability = (height * blockRelativeScalability) / defaultBlockHeight;
export const heightOfHero = 191;
export const widthOfHero = 161;
export const heightOfArrow = 234;
export const widthOfArrow = heightOfArrow;
export const heroScalability = (height * heroRelativeScalability) / heightOfHero;

// alignment of environment
export const heightOfOneBlock = defaultBlockHeight * blockScalability;
export const groundHeight = height * 0.75;
export const distanceWithRespectToGround = height * 0.2;
const healthWidth = 645;
const healthHeight = 585;
export const healthRelativeScalability = 0.05;
export const healthScalability = (width * healthRelativeScalability) / healthWidth;
export const healthHeightScalability = healthScalability * healthHeight;
export const healthWidthScalability = healthScalability * healthWidth;
// todo: не ориентироваться от высоты блока (прыжок да и вообще всё остальное), т. к. на больших экранах всё едет
// characteristics of hero
export const heightOfJump = heightOfOneBlock * 1.7;
export const timeOfJump = 750; // ms
export const upperJump = 0.35;
export const downJump = 0.65;

// characteristics of environment
export const timeOfBackgroundMovement = 2000;
export const timeOfBlockMovement = 4000; // ms
export const inaccuraciesTime = 500; // latency before removing of block from redux state
export const inaccuraciesTimeForCollision = 50;

// menu and other labels
export const fontSize = Math.floor(width / 20);
export const margin = Math.floor(width / 25);
export const buttonHeight = Math.floor(height / 10);
export const buttonWidth = Math.floor(width / 3);
export const spaceBetweenButtons = Math.floor(height / 15);
export const levelButtonHeight = Math.floor(height / 7);
export const levelRowPerPage = 4;
export const levelColumnPerPage = 5;
const starRelativeScalability = 0.05;
const defaultStarHeight = 240;

export const starScalability = (height * starRelativeScalability) / defaultStarHeight;
export const starHeight = defaultStarHeight * starScalability;
export const levelBlockHeight = levelButtonHeight + starHeight;
export const levelBlockWidth = levelBlockHeight;
export const borderBlockWidth = 3;
const heightBlockWithBorder = levelBlockHeight + borderBlockWidth * 2;
export const levelButtonMarginSide = Math.floor(levelButtonHeight / 1.5);
export const levelButtonMarginUpside = Math.floor(levelButtonHeight / 3);
export const leftMarginLevelButton = (width - (levelBlockWidth * levelColumnPerPage + levelButtonMarginSide * (levelColumnPerPage - 1))) / 2;
export const topMarginLevelButton = (height - (heightBlockWithBorder * levelRowPerPage + levelButtonMarginUpside * (levelRowPerPage - 1))) / 2;
