import { sum } from '#/sum';

import { env } from '#/config/env';

console.log(sum(env.port, 3));

console.log(env);
