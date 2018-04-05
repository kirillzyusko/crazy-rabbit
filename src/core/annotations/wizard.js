import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';

const wizard = views => Children => class extends Component {
  render() {
    //console.log(222222, /*new Children(),*/ this.props);
      React.Children.forEach(Children, element => {
          console.log(11111111, element)
          const { source } = element.props

          //do something with source..
      })
    return (
      <Swiper
        dot={<View
          style={{
            backgroundColor: 'rgba(255,255,255,.3)',
            width: 13,
            height: 13,
            borderRadius: 7,
            marginLeft: 7,
            marginRight: 7
          }}
        />}
        activeDot={<View
          style={{
            backgroundColor: '#fff',
            width: 13,
            height: 13,
            borderRadius: 7,
            marginLeft: 7,
            marginRight: 7
          }}
        />}
        paginationStyle={{
          bottom: 20
        }}
        loop={false}
      >
        {views}
      </Swiper>
    );
  }
};

export default wizard;
