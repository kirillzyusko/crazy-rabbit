import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  ActivityIndicator,
  View
} from 'react-native';
import { height } from '../../engine/constants/engine';

const Spinner = ({ isLoading }) => (
  <View style={[styles.container, styles.horizontal]}>
    {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: height / 2,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

Spinner.defaultProps = {
  isLoading: false
};

export default Spinner;
