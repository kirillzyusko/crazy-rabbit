import React from 'react';
import { BEAR, RABBIT } from '../engine/constants/hero';
import Rabbit from './../components/models/heroes/catalog/rabbit.native';
import Bear from './../components/models/heroes/catalog/bear.native';

const getHeroByType = (type) => {
  switch (type) {
    case RABBIT:
      return <Rabbit />;
    case BEAR:
      return <Bear />;
    default:
      return <Rabbit />;
  }
};

export { getHeroByType };
