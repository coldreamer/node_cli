#! /usr/bin/env node

const { program } = require("commander");
const myHelp = require("../lib/core/help");
const myCommander = require("../lib/core/mycommander");

program.version("1.0.0").description("johan cli");

myHelp(program);
myCommander(program);

program.parse(process.argv);
