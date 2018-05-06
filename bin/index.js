#!/usr/bin/env node

process.on("unhandledRejection", err => {
  throw err;
});

const command = process.argv[2];

switch (command) {
  case "build":
  case "start":
    require(`../scripts/${command}`);
    break;
  default:
    throw new Error(`command not found!`);
}
