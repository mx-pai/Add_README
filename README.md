# Add_README

在 Obsidian 中，当你创建一个新文件夹时，自动在该文件夹内生成 README.md 文件。

## 功能
- 监听新建文件夹事件，自动创建 README.md
- README 默认内容包含文件夹名称
- 仅在不存在 README.md 时创建，避免覆盖已有文件

## 安装
1. 运行 `npm install`
2. 运行 `npm run build` 生成 `main.js`
3. 将以下文件拷贝到你的库目录：`Vault/.obsidian/plugins/add_readme/`
   - `manifest.json`
   - `main.js`
   - `styles.css`（可选）
4. 在 Obsidian 设置 → 社区插件 中启用 Add_README

## 使用
- 在 Obsidian 中创建任意新文件夹
- 插件会自动在该文件夹内生成 `README.md`
- 默认内容示例：
  ```md
  # <文件夹名称>

  这个文件夹的说明。
  ```

## 配置
当前版本不含设置面板。如需自定义模板，可在 `main.ts` 中修改：
- 生成路径：`const readmePath = \`${file.path}/README.md\``
- 模板内容：`# ${file.name}\n\n这个文件夹的说明。`

## 兼容性
- Obsidian 最低版本：0.15.0

## 开发
- `npm run dev`：监听编译，输出到 `main.js`
- `npm run build`：类型检查并生成生产构建

## 注意
- 仅在新建文件夹且不存在 `README.md` 时创建
- 如未生效，查看开发者控制台是否打印“Add_README 插件加载”并确认 `main.js` 已生成与部署