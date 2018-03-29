import { generate as UID } from 'shortid';

const level1 = {
  blocks: [
    {
      id: UID(),
      appearance: 2000,
      speed: 1,
      height: 1
    },
    {
      id: UID(),
      appearance: 3000,
      speed: 1.2,
      height: 2
    },
    {
      id: UID(),
      appearance: 4000,
      speed: 1,
      height: 3
    },
    {
      id: UID(),
      appearance: 5000,
      speed: 1.2,
      height: 1
    },
    {
      id: UID(),
      appearance: 6000,
      speed: 1,
      height: 2
    },
    {
      id: UID(),
      appearance: 7000,
      speed: 2,
      height: 1
    }
  ]
};

export default level1;
