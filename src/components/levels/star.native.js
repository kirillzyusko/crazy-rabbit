import React from 'react';
import PropTypes from 'prop-types';
import { Path, G } from 'react-native-svg';

const Star = ({ isAchieved }) => (
  <G>
    <Path fill={isAchieved ? '#f8d64e' : '#bab9b0'} d="m48,234 73-226 73,226-192-140h238z" />
  </G>
);

Star.propTypes = {
  isAchieved: PropTypes.bool.isRequired
};

Star.defaultProps = {
  isAchieved: true
};

export default Star;
