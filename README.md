# 抖音流量密码 · 交互式报告

本项目是中文静态报告，介绍抖音创作者画像、内容引擎、平台逻辑和未来策略。使用 HTML、CSS、原生 JavaScript 和 Chart.js，实现雷达图、话题播放量柱状图、创作者标签切换、策略表格和移动端章节导航。

## 快速启动

需要 Python 3.7+ 和支持 JavaScript 的现代浏览器，不需要安装 Python 第三方依赖、Node.js 或配置密钥。

```sh
git clone https://github.com/homeqian96/ai.git
cd ai
python3 scripts/serve.py
```

浏览器打开 http://127.0.0.1:8000 。Windows 可使用 `py -3 scripts/serve.py`。按 Ctrl+C 停止。端口占用时使用 `python3 scripts/serve.py --port 8080`。脚本始终从项目根目录提供文件，仅监听本机。

也可从根目录执行 `python3 -m http.server 8000 --bind 127.0.0.1`。直接打开 index.html 也可查看，但建议使用本地 HTTP 服务。

## 目录

```text
index.html             页面内容与入口
assets/css/style.css   自定义样式
assets/js/app.js        图表、数据与交互
scripts/serve.py        标准库本地预览服务
README.md              用途、依赖与运行说明
LICENSE                原有 MIT 许可
```

## 依赖与网络

| 依赖 | 加载方式 | 用途 |
| --- | --- | --- |
| Tailwind CSS Play CDN | https://cdn.tailwindcss.com | 页面工具类样式；原仓库未固定版本 |
| Chart.js 4.4.9 | jsDelivr，版本固定 | 雷达图、柱状图 |
| Noto Sans SC | Google Fonts | 中文字体，可回退到系统无衬线字体 |
| Python 3.7+ | 本机标准库 | 可选本地 HTTP 预览服务 |

完整样式和图表需要联网。Chart.js 不可达时显示提示，标签切换、表格和导航仍会初始化；Tailwind 不可达时布局会退化。这不是离线发行版。Play CDN 适合当前预览基础版；生产发布前应编译并本地托管样式、图表和字体依赖。

## 内容来源与边界

整理依据为原仓库提交 `ff26147d86975c41bbf0ba64cd54b6daa12c48c0`（2025-06-24）。原文件仅有 LICENSE、内容为 `# ai` 的 README.md 和单文件 index.html。

保留原报告正文、图表数据和交互，不将仓库名称 ai 推断为模型服务。没有后端、数据库、模型调用、实时数据接口或用户登录。页面中的评分和播放量是原页面硬编码内容；未附源报告、数据集、计算口径或可核验引用，不能视为实时统计或已验证研究结论。底部“由AI根据源文档生成”是原页面文字，源文档未包含在仓库中。

本次补齐文档、样式/脚本目录和启动入口；移除描述了未实现功能的设计注释，固定图表版本，并处理图表组件缺失时的降级。没有凭空加入筛选、表格点击高亮或 AI 功能。

## 手动检查

1. 启动后打开首页，确认中文正文及两个图表显示。
2. 切换四个创作者标签，确认案例内容变化。
3. 确认策略表格包含三个参与者类型。
4. 缩小窗口，通过下拉导航跳转章节。
5. 阻止 Chart.js 请求后刷新，确认图表提示出现且标签、表格仍工作。

后续如需真实分析能力，首先补充源报告、数据来源与更新流程，再确定接口和业务需求。

## 许可

保留原 MIT License，版权信息见 LICENSE。
