const download = require("download-git-repo");
const fs = require("fs");
// 显示loading 效果
const ora = require("ora");
// 控制显示信息的颜色
const chalk = require("chalk");

// 下载项目
const downloadRepo = (url, target) => {
  // 检查目标目录是否存在
  if (fs.existsSync(target)) {
    console.error(chalk.red(`目录 ${target} 已存在，请先删除或使用其他名称`));
    return;
  }

  // 下载项目
  // 1. 显示下载进度条
  const spinner = ora().start();
  spinner.text = "正在从 " + url + " 下载模板...";
  // 2. 下载项目
  download(url, target, (err) => {
    if (err) {
      spinner.fail(chalk.red("模板下载失败！"));
      return;
    }
    spinner.succeed(chalk.green("模板下载成功！"));
    console.log(chalk.green("你已经成功创建了项目，请进入项目目录进行开发！"));
    console.log(chalk.green("cd " + target));
    console.log(chalk.green("npm install"));
    console.log(chalk.green("npm run dev"));
  });
};

module.exports = downloadRepo;
