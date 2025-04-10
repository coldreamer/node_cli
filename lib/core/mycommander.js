const myAction = require("./action");

const myCommander = (program) => {
  program
    .command("create <project> [other...]")
    .alias("crt")
    .description("create a new project")
    .action(myAction);
};

module.exports = myCommander;
