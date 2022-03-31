import videojs, { VideoJsPlayer } from "video.js";
import { ContainerOptions } from "./types";
import { Container } from "./container";

const Button = videojs.getComponent('Button');

export class SkipButton extends Button
{
    private container: Container;

    constructor(player: VideoJsPlayer, options: ContainerOptions, container: Container) {
        super(player);

        this.container = container

        this.addClass('vjs-skip-button');
        this.el().innerHTML = options.skipLabel;
    }

    handleClick(event: videojs.EventTarget.Event): void {
        this.container.trigger('jump');
    }
}

export class BreakButton extends Button
{
    private container: Container;

    constructor(player: VideoJsPlayer, options: ContainerOptions, container: Container) {
        super(player);

        this.container = container;

        this.addClass('vjs-break-button');
        this.el().innerHTML = options.breakLabel;
    }

    handleClick(event: videojs.EventTarget.Event): void {
        this.hide();
        this.container.trigger('break');
    }
}