import { Plugin, TAbstractFile, TFolder } from 'obsidian';

export default class AddReadmePlugin extends Plugin {
	async onload() {
		console.log("Add_README 插件加载");

		this.registerEvent(
			this.app.vault.on("create", async (file: TAbstractFile) => {
				if (file instanceof TFolder) {
					const readmePath = `${file.path}/README.md`;

					if (!this.app.vault.getAbstractFileByPath(readmePath)) {
						await this.app.vault.create(readmePath, '')
						console.log(`已为文件夹 ${file.path} 创建README.md`)
					}
				}
			})
		)
	}

	onunload(): void {
		console.log("ADD_README 插件已卸载")
	}
}