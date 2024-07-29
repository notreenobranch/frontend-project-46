import path from 'path';
import fs from 'fs';

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath);
  return data;
};

const parseData = (data, format) => {
  let result;
  switch (format) {
    case '.json':
      result = JSON.parse(data);
      break;
    default:
      throw new Error(`Unsupported operator: '${format}'!`);
  }

  return result;
};

export default (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const extname1 = path.extname(filepath1);

  const data2 = readFile(filepath2);
  const extname2 = path.extname(filepath2);

  const parsedData1 = parseData(data1, extname1);
  const parsedData2 = parseData(data2, extname2);

  console.log(parsedData1);
  console.log(parsedData2);
};
