import gendiff from '../src/index.js';

const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

const result = gendiff('__fixtures__/file1.json', '__fixtures__/file2.json');

test('gendiff', () => {
  expect(result).toEqual(expected);
});
