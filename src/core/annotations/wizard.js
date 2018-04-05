import React from 'react';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';

const wizardArray = (target, name, descriptor) => {
  const init = descriptor.initializer;
  descriptor.initializer = () => (
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
  );
  return descriptor;
};

export default wizardArray;
