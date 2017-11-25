import { YoutubePlayerBase } from './youtubeplayer.common';
export declare class YoutubePlayer extends YoutubePlayerBase {
    _fullScreen: boolean;
    private _playerVars;
    nativeView: YTPlayerView;
    _observer: any;
    createNativeView(): YTPlayerView;
    initNativeView(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    play(): void;
    pause(): void;
    stop(): void;
    destroy(): void;
    isPlaying(): boolean;
    toggleFullscreen(): void;
    readonly isFullScreen: boolean;
}
export declare class YTPlayerViewDelegateImpl extends NSObject implements YTPlayerViewDelegate {
    static ObjCProtocols: {
        prototype: YTPlayerViewDelegate;
    }[];
    private _owner;
    static initWithOwner(owner: WeakRef<YoutubePlayer>): YTPlayerViewDelegateImpl;
    playerViewDidChangeFullScreen(playerView: YTPlayerView, fullScreen: boolean): void;
    playerViewDidBecomeReady(playerView: YTPlayerView): void;
    playerViewDidChangeToState(playerView: YTPlayerView, state: YTPlayerState): void;
    playerViewReceivedError(playerView: YTPlayerView, error: YTPlayerError): void;
}
