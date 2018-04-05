import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-spinkit';
import styles from './styles.native';
import { Wizard } from './../../core/annotations';

class Introduction extends Component {
    @Wizard
    steps = [
      <View style={styles.slide}>
        <Spinner isVisible size={200} type={'Pulse'} color={'gray'} />
      </View>,
      <View style={styles.slide}>
        <Text>2</Text>
      </View>,
      <View style={styles.slide}>
        <Text>3</Text>
      </View>
    ];

    render() {
      return this.steps;
    }
}

export default Introduction;
