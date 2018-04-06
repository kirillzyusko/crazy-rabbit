import React from 'react';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';

const wizardArray = (target, name, descriptor) => {
  console.log(this);
  const init = descriptor.value;

  function render() {
    return (
      <View style={{ flex: 1 }}>
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
          {init()}
        </Swiper>
      </View>
    );
  }
  descriptor.value = render;
  return descriptor;
};

export default wizardArray;
