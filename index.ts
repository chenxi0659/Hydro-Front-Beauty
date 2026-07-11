import type { Context } from 'hydrooj';

/**
 * 第一版只通过 frontend/hydro_front_beauty.page.ts 注入样式。
 * 保留插件入口，后续路径 B 的页面挂载点也将在此处注册。
 */
export async function apply(_ctx: Context) {
  // No server-side behavior in v0.1.
}
