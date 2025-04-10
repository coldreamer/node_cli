# Johan CLI - Node.js脚手架工具

## 项目简介
Johan CLI 是一个基于 Node.js 开发的脚手架工具，旨在帮助开发者快速创建和管理项目模板。通过简单的命令行操作，可以快速搭建项目结构，提高开发效率。

## 功能特点
- 🚀 快速创建项目模板
- 📦 支持多种项目类型
- 🔧 可自定义项目配置
- 📝 自动生成项目文档
- 🔄 支持模板更新

## 安装方法
```bash
# 全局安装
npm install -g johan-cli

# 或者使用yarn
yarn global add johan-cli
```

## 使用方法
```bash
# 创建新项目
johan create <project-name>

# 查看可用模板
johan list

# 查看帮助信息
johan --help
```

## 项目结构
```
johan-cli/
├── bin/                # 命令行入口文件
├── lib/                # 核心功能实现
├── templates/          # 项目模板
├── package.json        # 项目配置
└── README.md          # 项目文档
```

## 开发计划
- [ ] 基础项目模板创建
- [ ] 自定义模板配置
- [ ] 模板管理功能
- [ ] 项目依赖自动安装
- [ ] 配置文件生成

## 贡献指南
欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 许可证
MIT License
