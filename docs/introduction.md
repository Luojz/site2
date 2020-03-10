一、项目结构说明

site 根目录
  |__docs 文档
  |    |__instroduction.md 项目介绍
  |__design ui设计
  |__config 脚手架配置
  |__scripts 自动化脚本
  |__public 静态文件
  |    |__css css样式
  |    |__data mock数据
  |    |__fonts 字体库
  |    |__icons 图标
  |    |__images 图片
  |    |__vendors 第三方代理
  |__src 代码
     |__config 项目配置
     |    |__apis.js 接口配置
     |    |__routes.js 路由配置
     |__constants 常量
     |    |__ERRORS.js 错误常量
     |    |__TIME.js 时间常量
     |__layouts 框架
     |    |__partials
     |    |    |__Page 页面
     |    |    |__Header 页头
     |    |    |__Footer 页尾
     |    |    |__Main 主体
     |    |    |__Aside 侧边栏
     |    |__default.jsx 默认
     |    |__error.jsx 错误页面
     |    |__notFound.jsx 404页面
     |    |__redirect.jsx 重定向页面
     |__pages 页面
     |    |__home 主页
     |         |__bussiness 业务组件
     |         |__index.js 主文件
     |         |__adapter.js 数据转换
     |         |__validator.js 数据检验
     |    |__product 产品页
     |    |__solution 解决方案
     |__components 通用组件
     |__types 类型声明
     |__plugins 引用插件
     |__libs 库文件
     |__platform 平台（浏览器）相关
     |__utils 工具函数
     |__locale 本地化
     |__index.tsx 入口文件
     |__index.css 全局样式
     |__routes.jsx 路由组件
     |__helpers.js 辅助函数