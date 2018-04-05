import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-spinkit';
import styles from './styles.native';
import { Wizard, WizardArray } from './../../core/annotations';

const views = [
  <View style={styles.slide}>
    <Spinner isVisible size={20} type={'Bounce'} color={'#000'} />
  </View>,
  <View style={styles.slide}>
    <Text>2</Text>
  </View>,
  <View style={styles.slide}>
    <Text>3</Text>
  </View>
];

@Wizard(views)
class Introduction extends Component {
    @WizardArray
    a = [
      <View style={styles.slide}>
        <Spinner isVisible size={20} type={'Bounce'} color={'#000'} />
      </View>,
      <View style={styles.slide}>
        <Text>2</Text>
      </View>,
      <View style={styles.slide}>
        <Text>3</Text>
      </View>
    ];

    render() {
      console.log(5435432524, this.a);
      return views;
    }
}

export default Introduction;
