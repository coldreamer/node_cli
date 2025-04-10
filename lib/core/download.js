const download = require("download-git-repo");
const fs = require("fs");
const ora = require("ora");
const chalk = require("chalk");
const downloadRepo = (url, target) => {
  // 检查目标目录是否存在
  if (fs.existsSync(target)) {
    console.error(chalk.red(`目录 ${target} 已存在，请先删除或使用其他名称`));
    return;
  }

  const spinner = ora().start();
  spinner.text = "正在从 " + url + " 下载模板...";

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
