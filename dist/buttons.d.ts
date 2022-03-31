import videojs, { VideoJsPlayer } from "video.js";
import { ContainerOptions } from "./types";
import { Container } from "./container";
declare const Button: {
    new (player: VideoJsPlayer, options?: videojs.ComponentOptions | undefined): videojs.Button;
    prototype: videojs.Button;
};
export declare class SkipButton extends Button {
    private container;
    constructor(player: VideoJsPlayer, options: ContainerOptions, container: Container);
    handleClick(event: videojs.EventTarget.Event): void;
}
export declare class BreakButton extends Button {
    private container;
    constructor(player: VideoJsPlayer, options: ContainerOptions, container: Container);
    handleClick(event: videojs.EventTarget.Event): void;
}
export {};
