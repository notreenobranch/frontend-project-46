import _ from 'lodash';
import parse from './parser.js';

export default (filepath1, filepath2) => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);

  const sortedKeys = _.sortBy([...Object.keys(obj1), ...Object.keys(obj2)]);
  const sortedUniqKeys = _.sortedUniq(sortedKeys);

  const preparedData = sortedUniqKeys.reduce((acc, key) => {
    if (obj1[key] === obj2[key]) {
      acc.push([' ', key, obj1[key]]);
    } else if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      acc.push(['-', key, obj1[key]]);
    } else if (Object.hasOwn(obj2, key) && !Object.hasOwn(obj1, key)) {
      acc.push(['+', key, obj2[key]]);
    } else if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key) && obj1[key] !== obj2[key]) {
      acc.push(['-', key, obj1[key]]);
      acc.push(['+', key, obj2[key]]);
    }
    return acc;
  }, []);

  const diff = preparedData.reduce((acc, [diffType, key, value]) => {
    const newAcc = `${acc}\n  ${diffType} ${key}: ${value}`;
    return newAcc;
  }, '');

  return `{${diff}\n}`;
  // console.log(`{${diff}\n}`);
};
