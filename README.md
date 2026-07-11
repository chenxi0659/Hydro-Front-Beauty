# Hydro Front Beauty

HydroOJ 的渐进式前端美化工程，采用两条并行路径：

- 路径 A：以 CSS 设计令牌和 UI Default 覆盖样式统一全站视觉。
- 路径 B：以 React + Mantine 逐页重做高频后台界面。

## 目录

- `src/styles/`：全站颜色、间距、圆角、阴影等设计令牌，以及针对 UI Default 的覆盖样式。
- `src/mantine/`：Mantine 主题与统一 Provider。
- `src/pages/`：逐步替换的 React 页面原型；首个目标为控制面板。
- `docs/`：视觉规范和接入计划。

## 接入原则

1. 先在测试 Hydro 实例验证路径 A，不直接修改生产实例的核心模板。
2. 现有 Nunjucks 路由与后端接口保持不变；路径 B 仅替换页面内容层。
3. 每次改造按“一个全局组件或一个页面”提交，确保可回滚并便于合并 Hydro 上游更新。

## 当前状态

第一版已具备 Hydro 插件结构：Hydro 在启动时会编译
`frontend/hydro_front_beauty.page.ts`，并把其中导入的 CSS 注入现有 UI Default。
它不注册路由、不修改模板，也不改变后端接口。

## 第一版范围

- 统一背景、表面、边框、字体、圆角、阴影与焦点状态；
- 美化通用 `.section`、按钮、表格、输入框、菜单和分页组件；
- 首页右侧的讨论节点、最新题目、一言与推荐支持独立折叠；折叠状态会保存在浏览器中，并采用内联 SVG 线条图标与平滑的先快后慢动画；
- 保留 UI Default 现有的 HTML 结构和暗色主题切换机制；
- 提供 Mantine 主题文件，供第二阶段逐页替换后台页面时复用。

## 在测试实例接入

将本仓库作为 Hydro 插件安装到测试实例后重启 Hydro。无需复制 CSS 到
Hydro 核心仓库；UI Default 会扫描插件的 `frontend` 目录并自动打包。
首次接入前应在测试环境确认问题列表、题目页、控制面板和移动端显示正常。
