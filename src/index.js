import parse from './parser.js';

export default (filepath1, filepath2) => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);
  console.log(obj1, obj2);
};
