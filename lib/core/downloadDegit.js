const degit = require("degit");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
// 显示loading 效果
const ora = require("ora");
// 控制显示信息的颜色
const chalk = require("chalk");

// 使用 degit 下载项目并自动安装依赖
const downloadRepoDegit = async (url, projectName) => {
  // 检查目标目录是否存在
  if (fs.existsSync(projectName)) {
    console.error(chalk.red(`目录 ${projectName} 已存在，请先删除或使用其他名称`));
    return;
  }

  // 下载项目
  const spinner = ora().start();
  spinner.text = "正在从 " + url + " 下载模板...";

  try {
    // 使用 degit 克隆项目 - 使用 git 模式作为备选方案
    const emitter = degit(url, {
      cache: false,
      force: true,
      verbose: true,
      mode: 'git', // 使用 git 模式，更稳定但稍慢
    });

    // 监听事件以便调试
    emitter.on('info', info => {
      console.log(chalk.blue(info.message));
    });

    await emitter.clone(projectName);

    spinner.succeed(chalk.green("模板下载成功！"));

    // 动态修改 package.json
    const pkgPath = path.join(process.cwd(), projectName, "package.json");
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      pkg.name = projectName;
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    }

    // 自动安装依赖
    console.log(chalk.blue("📦 正在安装依赖..."));
    try {
      execSync(`cd ${projectName} && npm install && npx playwright install`, {
        stdio: "inherit",
      });
    } catch (err) {
      console.log(chalk.yellow("⚠️  依赖安装失败，请手动运行 npm install"));
    }

    console.log(chalk.green("\n✅ 项目初始化完成！"));
    console.log(chalk.green("---------------------------"));
    console.log(chalk.green("下一步："));
    console.log(chalk.green(`  cd ${projectName}`));
    console.log(chalk.green("  npm run dev"));
    console.log(chalk.green("---------------------------"));
    console.log(chalk.blue("💡 记得开启 Cursor 并加载 .cursorrules 文件。"));
  } catch (err) {
    spinner.fail(chalk.red("模板下载失败！"));
    console.error(chalk.red(err.message));
  }
};

module.exports = downloadRepoDegit;
