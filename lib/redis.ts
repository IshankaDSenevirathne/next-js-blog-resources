import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: 'https://us1-promoted-viper-38908.upstash.io',
  token:
    'AZf8ACQgNzg5ZDdmMjEtNjI3Ny00NWUzLThiZjQtYWY2YjhkYjMyMDY3NWNjOTk4N2U0MTkwNGQ3OTg0NzM1Y2Q1MTY1Y2E4OGE=',
});

export { redis };
