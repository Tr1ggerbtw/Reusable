'use strict';

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

const createUser = (name, city) =>  {
const user = {name: name, city: city};
console.log(user);
 }

createUser('Daniil', 'Kyiv');

module.exports = { createUser };
