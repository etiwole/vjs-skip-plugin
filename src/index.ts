import videojs, { VideoJsPlayer } from "video.js";

import { Container } from "./container";
import { ContainerOptions } from "./types";

const Plugin = videojs.getPlugin('plugin');

export class SkipPlugin extends Plugin
{
    constructor(player: VideoJsPlayer, options: ContainerOptions[]) {
        super(player);

        options.forEach(option => {
            player.addChild(new Container(player, option)).hide();
        });
    }
}

videojs.registerPlugin('SkipPlugin', SkipPlugin);
