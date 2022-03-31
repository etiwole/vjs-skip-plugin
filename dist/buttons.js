"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakButton = exports.SkipButton = void 0;
const video_js_1 = __importDefault(require("video.js"));
const Button = video_js_1.default.getComponent('Button');
class SkipButton extends Button {
    constructor(player, options, container) {
        super(player);
        this.container = container;
        this.el().innerHTML = options.skipLabel;
    }
    handleClick(event) {
        this.container.trigger('jump');
    }
}
exports.SkipButton = SkipButton;
class BreakButton extends Button {
    constructor(player, options, container) {
        super(player);
        this.container = container;
        this.el().innerHTML = options.breakLabel;
    }
    handleClick(event) {
        this.hide();
        this.container.trigger('break');
    }
}
exports.BreakButton = BreakButton;
