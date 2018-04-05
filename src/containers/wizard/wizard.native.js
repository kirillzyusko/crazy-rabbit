import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles.native';

class Wizard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Swiper
          style={styles.wrapper}
          dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
          activeDot={<View style={{ backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
          paginationStyle={{
            bottom: 20
          }}
          loop={false}
        >
          <View style={styles.slide}>
            <Text>1</Text>
          </View>
          <View style={styles.slide}>
            <Text>2</Text>
          </View>
          <View style={styles.slide}>
            <Text>3</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

export default Wizard;
