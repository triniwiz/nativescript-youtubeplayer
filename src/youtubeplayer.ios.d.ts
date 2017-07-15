import * as common from './youtubeplayer.common';
export declare class YoutubePlayer extends common.YoutubePlayer {
    private _fullScreen;
    nativeView: YTPlayerView;
    createNativeView(): YTPlayerView;
    initNativeView(): void;
    play(): void;
    pause(): void;
    stop(): void;
    destory(): void;
    isPlaying(): boolean;
    toggleFullscreen(): void;
}
