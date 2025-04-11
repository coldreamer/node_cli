#! /usr/bin/env node

const { program } = require("commander");
const myHelp = require("../lib/core/help");
const myCommander = require("../lib/core/mycommander");
// program: 操作指令的总对象
program.version("1.0.0").description("johan cli");

// 添加帮助指令
myHelp(program);

// 添加创建项目指令
myCommander(program);

// 解析命令行参数
program.parse(process.argv);
