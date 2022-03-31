import videojs, { VideoJsPlayer } from "video.js";
import { ContainerOptions } from "./types";
declare const Plugin: {
    new (player: VideoJsPlayer, options?: any): videojs.Plugin;
    prototype: videojs.Plugin;
    BASE_PLUGIN_NAME: string;
    deregisterPlugin(name: string): void;
    getPlugin(name: string): any;
    getPluginVersion(name: string): string;
    getPlugins(names?: string[] | undefined): {
        [name: string]: videojs.Plugin;
    };
    isBasic(plugin: string | (() => any)): boolean;
    registerPlugin<T, K>(name: string, plugin: (this: VideoJsPlayer, ...options: K[]) => T): (...options: K[]) => T;
    registerPlugin<T_1 extends any>(name: string, plugin: T_1): () => T_1;
};
export declare class SkipPlugin extends Plugin {
    constructor(player: VideoJsPlayer, options: ContainerOptions[]);
}
export {};
