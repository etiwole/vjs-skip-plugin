"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipPlugin = void 0;
const video_js_1 = __importDefault(require("video.js"));
const container_1 = require("./container");
const Plugin = video_js_1.default.getPlugin('plugin');
class SkipPlugin extends Plugin {
    constructor(player, options) {
        super(player);
        options.forEach(option => {
            player.addChild(new container_1.Container(player, option)).hide();
        });
    }
}
exports.SkipPlugin = SkipPlugin;
video_js_1.default.registerPlugin('SkipPlugin', SkipPlugin);
