import { generate as UID } from 'shortid';

const level2 = {
  blocks: [
    {
      id: UID(),
      appearance: 500,
      height: 1
    },
    {
      id: UID(),
      appearance: 1000,
      height: 2
    },
    {
      id: UID(),
      appearance: 1500,
      height: 1
    },
    {
      id: UID(),
      appearance: 2000,
      height: 1
    },
    {
      id: UID(),
      appearance: 2500,
      height: 2
    },
    {
      id: UID(),
      appearance: 3000,
      height: 1
    }
  ]
};

export default level2;
