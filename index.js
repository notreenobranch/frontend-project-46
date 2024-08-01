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
    case 'json':
      result = JSON.parse(data);
      break;
    default:
      throw new Error(`Unsupported operator: '${format}'!`);
  }

  return result;
};

export default (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const format1 = path.extname(filepath1).slice(1);

  const data2 = readFile(filepath2);
  const format2 = path.extname(filepath2).slice(1);

  const parsedData1 = parseData(data1, format1);
  const parsedData2 = parseData(data2, format2);

  console.log(parsedData1);
  console.log(parsedData2);
};
