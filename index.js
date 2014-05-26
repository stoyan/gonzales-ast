var gonzales = require('gonzales');

exports.parse = gonzales.srcToCSSP;
exports.toCSS = gonzales.csspToSrc;
exports.toTree = gonzales.csspToTree;
exports.traverse = require('./lib/traverse.js');