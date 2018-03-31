import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { generate as UID } from 'shortid';
import { times } from 'lodash';
import { healthHeightScalability } from '../../../../engine/constants/engine';
import Health from './health.native';

class Lives extends PureComponent {
  render() {
    const { lives } = this.props;
    console.log('rerender lives');
    return (
      <View style={[styles.container, styles.horizontal]}>
        {times(lives, () => <Health key={UID()} />)}
      </View>
    );
  }
}

Lives.propTypes = {
  lives: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: healthHeightScalability,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: healthHeightScalability / 2
  }
});

export default Lives;
