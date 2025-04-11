const myAction = require("./action");

const myCommander = (program) => {
  program
    // 创建项目
    .command("create <project> [other...]")
    // 别名
    .alias("crt")
    // 描述
    .description("create a new project")
    // 执行的action
    .action(myAction);
};

module.exports = myCommander;
