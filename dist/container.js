"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const video_js_1 = __importDefault(require("video.js"));
const buttons_1 = require("./buttons");
const Component = video_js_1.default.getComponent('Component');
class Container extends Component {
    constructor(player, options) {
        super(player);
        this.timeout = undefined;
        this.range = options.range;
        this.addChild(new buttons_1.SkipButton(player, options, this));
        this.addChild(new buttons_1.BreakButton(player, options, this));
        player.ready(() => {
            player.on('timeupdate', () => {
                if (!player.paused() && this.isCurrentTimeInRange()) {
                    this.show();
                    if (!this.timeout) {
                        this.timeout = this.setTimeout(() => {
                            this.trigger('jump');
                        }, 5000);
                    }
                }
            });
            this.on('break', () => {
                clearTimeout(this.timeout);
            });
            this.on('jump', () => {
                this.hide();
                clearTimeout(this.timeout);
                player.currentTime(this.range.end);
            });
        });
        this.addClass('vjs-skip-plugin');
        this.setBottomMargin();
    }
    isCurrentTimeInRange() {
        return this.range.start <= super.player().currentTime()
            && super.player().currentTime() < this.range.end;
    }
    setBottomMargin() {
        this.el().setAttribute('style', `bottom: 120px`);
    }
}
exports.Container = Container;
