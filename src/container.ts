import videojs, { VideoJsPlayer } from "video.js";
import { ContainerOptions, Range } from "./types";
import { SkipButton, BreakButton } from "./buttons";

const Component = videojs.getComponent('Component');

export class Container extends Component
{
    private timeout?: number = undefined;
    private range: Range;

    constructor(player: VideoJsPlayer, options: ContainerOptions) {
        super(player);

        this.range = options.range;

        this.addChild(new SkipButton(player, options, this));
        this.addChild(new BreakButton(player, options, this));

        player.ready(() => {
            player.on('timeupdate', () => {
                if (!player.paused() && this.isCurrentTimeInRange()) {
                    this.show()

                    if (!this.timeout) {
                        this.timeout = this.setTimeout(() => {
                            this.trigger('jump');
                        }, 5000);
                    }
                }
            });

            this.on('break', () => {
                clearTimeout(this.timeout);
            })

            this.on('jump', () => {
                this.hide();

                clearTimeout(this.timeout);
                player.currentTime(this.range.end);
            });
        });

        this.addClass('vjs-skip-plugin');
        this.setBottomMargin();
    }

    private isCurrentTimeInRange(): boolean {
        return this.range.start <= super.player().currentTime()
            && super.player().currentTime() < this.range.end;
    }

    private setBottomMargin(): void {
        this.el().setAttribute('style',`bottom: 120px`);
    }
}