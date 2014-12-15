var gonzo = require('../index.js');

parse = function(css) {
  var ast = gonzo.parse(css);
  return gonzo.pretty(ast);
}

