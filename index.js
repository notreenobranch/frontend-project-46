import path from 'path';
import fs from 'fs';

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath);
  return data;
};

export default (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);

  console.log(`data1:\n${data1}\ndata2:\n${data2}`);
};
