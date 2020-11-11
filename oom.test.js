const { minify } = require('terser');

test('terser oom', () => {
  expect(typeof minify).toEqual('function');
});
