"use strict";

process.env.NODE_ENV = "development";

process.argv.splice(
  1,
  process.argv.length,
  require.resolve("../node_modules/.bin/rollup"),
  "--config",
  require.resolve("../config/rollup.config.js")
);

require("../node_modules/.bin/rollup");
