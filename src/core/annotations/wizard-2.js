import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';

const wizard = views => Children => class extends Component {
  render() {
    return (
      <Children/>
    );
  }
};

export default wizard;
