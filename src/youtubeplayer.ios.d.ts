import * as common from './youtubeplayer.common';
export declare class YoutubePlayer extends common.YoutubePlayer {
    private _fullScreen;
    private _playerVars;
    nativeView: YTPlayerView;
    createNativeView(): YTPlayerView;
    play(): void;
    pause(): void;
    stop(): void;
    destory(): void;
    isPlaying(): boolean;
    toggleFullscreen(): void;
}
