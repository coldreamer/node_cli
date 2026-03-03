const inquirer = require("inquirer");
const config = require("../../config");
const downloadRepo = require("./download");
const downloadRepoDegit = require("./downloadDegit");
const prompt = inquirer.createPromptModule();

const myAction = async (project, args) => {
  // 创建项目
  // 1. 选择项目分类
  // 2. 选择框架或项目类型
  // 3. 输入项目名称
  // answers 会接收到输入的值
  const categoryAnswer = await prompt([
    {
      type: "list",
      name: "category",
      message: "请选择项目分类",
      choices: ["传统框架项目", "流量套利项目"],
    },
  ]);

  if (categoryAnswer.category === "流量套利项目") {
    // 流量套利项目流程
    const answers = await prompt([
      {
        type: "list",
        name: "type",
        message: "选择项目类型:",
        choices: config.projectType,
      },
      {
        type: "input",
        name: "projectName",
        message: "请输入项目名称",
        default: project,
      },
    ]);

    // 使用 degit 下载项目
    await downloadRepoDegit(
      config.repo[answers.type],
      answers.projectName
    );
  } else {
    // 传统框架项目流程
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
  }
};

module.exports = myAction;
