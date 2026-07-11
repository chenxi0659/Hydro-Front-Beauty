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

仓库仅包含设计系统初始化文件，尚未安装依赖、构建或注入任何 HydroOJ 实例。

