import all from 'test-lerna-module-two';
// const { sum }  = require('test-lerna-module-two');

console.log(all.sum(1,2));

const a = [1, 2, 3, 4, 5, 6];

const one = () => {
  const b = [...a, 2];
  console.log(1, b);
};

export default one;
