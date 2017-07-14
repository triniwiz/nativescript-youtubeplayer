import * as common from './youtubeplayer.common';
export declare class YoutubePlayer extends common.YoutubePlayer {
    player: any;
    private _fullScreen;
    createNativeView(): any;
    play(): void;
    stop(): void;
    destory(): void;
    pause(): void;
    isPlaying(): any;
    toggleFullscreen(): void;
}
