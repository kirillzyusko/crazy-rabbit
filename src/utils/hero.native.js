import React from 'react';
import { BEAR, BIRD, RABBIT } from '../engine/constants/hero';
import Rabbit from './../components/models/heroes/catalog/rabbit.native';
import Bear from './../components/models/heroes/catalog/bear.native';
import Bird from './../components/models/heroes/catalog/bird.native';

const getHeroByType = (type) => {
  switch (type) {
    case RABBIT:
      return <Rabbit />;
    case BEAR:
      return <Bear />;
    case BIRD:
      return <Bird />;
    default:
      return <Rabbit />;
  }
};

export { getHeroByType };
