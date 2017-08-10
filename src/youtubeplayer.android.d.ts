import * as common from './youtubeplayer.common';
export declare class YoutubePlayer extends common.YoutubePlayer {
    player: any;
    private _fullScreen;
    createNativeView(): any;
    initNativeView(): void;
    private initializePlayer();
    play(): void;
    stop(): void;
    destroy(): void;
    pause(): void;
    isPlaying(): any;
    toggleFullscreen(): void;
}
