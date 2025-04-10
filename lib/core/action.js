const inquirer = require("inquirer");
const config = require("../../config");
const downloadRepo = require("./download");
const prompt = inquirer.createPromptModule();

const myAction = async (project, args) => {
  const answers = await prompt([
    {
      type: "list",
      name: "framework",
      message: "请选择框架",
      default: config.framework[0],
      choices: config.framework,
    },
    {
      type: "input",
      name: "projectName",
      message: "请输入项目名称",
      default: project,
    },
  ]);

  downloadRepo(
    config.repo[answers.framework],
    config.projectPath + answers.projectName
  );
};

module.exports = myAction;
