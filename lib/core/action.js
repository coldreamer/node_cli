const inquirer = require("inquirer");
const config = require("../../config");
const downloadRepo = require("./download");
const prompt = inquirer.createPromptModule();

const myAction = async (project, args) => {
  // 创建项目
  // 1. 选择框架
  // 2. 输入项目名称
  // answers 会接收到输入的值
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

  // 下载项目
  downloadRepo(
    config.repo[answers.framework],
    config.projectPath + answers.projectName
  );
};

module.exports = myAction;
