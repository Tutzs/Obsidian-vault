/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => AutoCorrectPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  exclusionList: []
};
var AutoCorrectPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.lastReplacement = null;
    this.isReplacing = false;
  }
  async onload() {
    console.log("Loading AutoCorrectPlugin");
    await this.loadSettings();
    this.addSettingTab(new AutoCorrectSettingTab(this.app, this));
    this.registerEvent(
      this.app.workspace.on("editor-change", (editor) => {
        if (this.isReplacing)
          return;
        const punctuation = [" ", ".", ",", ";", ":", "!", "?", "\n"];
        const doc = editor.getDoc();
        const cursor = doc.getCursor();
        const line = doc.getLine(cursor.line);
        const lineUpToCursor = line.substring(0, cursor.ch);
        const lastChar = lineUpToCursor.slice(-1);
        let lastWordMatch;
        if (punctuation.includes(lastChar)) {
          if (lineUpToCursor.length > 0) {
            lastWordMatch = lineUpToCursor.match(/[\p{L}\p{M}]+(?=\W*$)/u);
          }
          if (lastWordMatch) {
            const lastWordStart = lineUpToCursor.lastIndexOf(lastWordMatch[0]);
            const lastWord = lastWordMatch[0].trim();
            if (this.settings.exclusionList.includes(lastWord)) {
              return;
            }
            if (/[\p{Lu}]{2}[\p{Ll}]+/u.test(lastWord)) {
              if (lastWord.length < 3) {
                return;
              }
              if (lastWord[0] === lastWord[0].toUpperCase() && lastWord[0] !== lastWord[0].toLowerCase() && (lastWord[1] === lastWord[1].toUpperCase() && lastWord[1] !== lastWord[1].toLowerCase()) && (lastWord[2] === lastWord[2].toLowerCase() && lastWord[2] !== lastWord[2].toUpperCase())) {
                if (this.isInCodeBlock(editor, lastWordStart))
                  return;
                const start = lastWordStart + 1;
                const end = lastWordStart + 2;
                const replacedChar = lastWord[1].toLowerCase();
                this.isReplacing = true;
                this.lastReplacement = {
                  position: { line: cursor.line, ch: start },
                  originalChar: lastWord[1],
                  replacedChar
                };
                doc.replaceRange(replacedChar, { line: cursor.line, ch: start }, { line: cursor.line, ch: end });
                this.isReplacing = false;
                return;
              }
            }
          }
        }
      })
    );
  }
  isInCodeBlock(editor, firstCharacterPosition) {
    const doc = editor.getDoc();
    const cursor = doc.getCursor();
    const line = doc.getLine(cursor.line);
    const linesAbove = doc.getRange({ line: 0, ch: 0 }, { line: cursor.line, ch: 0 });
    const codeBlockMatches = (linesAbove.match(/```/g) || []).length;
    if (codeBlockMatches % 2 !== 0) {
      return true;
    }
    const inlineCodeMatches = line.match(/`/g) || [];
    let backticksCount = 0;
    for (let i = 0; i < firstCharacterPosition; i++) {
      if (line[i] === "`") {
        backticksCount++;
      }
    }
    return backticksCount % 2 !== 0;
  }
  onunload() {
    console.log("Unloading AutoCorrectPlugin");
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var AutoCorrectSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "AutoCorrect Capitals Misspelling Settings" });
    new import_obsidian.Setting(containerEl).setName("Exclusion List").setDesc("Add words to this list to prevent them from being autocorrected.").addTextArea(
      (text) => text.setPlaceholder("separate words with commas").setValue(this.plugin.settings.exclusionList.join(", ")).onChange(async (value) => {
        this.plugin.settings.exclusionList = value.split(",").map((word) => word.trim());
        await this.plugin.saveSettings();
      })
    );
  }
};


/* nosourcemap */