const path = require('path');

const getPath = relativePath =>
  path.resolve(__dirname, relativePath.toString());

module.exports = {
  getPath
};
