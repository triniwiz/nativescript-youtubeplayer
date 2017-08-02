import * as common from './youtubeplayer.common';
global.moduleMerge(common, exports);
export class YoutubePlayer extends common.YoutubePlayer {
    private _fullScreen: boolean;
    private _playerVars: any;
    nativeView: YTPlayerView;
    public createNativeView() {
        return YTPlayerView.new();
    }
    [common.srcProperty.setNative](src: string) {
        this.nativeView.loadWithVideoIdPlayerVars(src, <any>this._playerVars);
    }
    [common.optionsProperty.defaultValue]() {
        this._playerVars = {
            "modestbranding": "1",
            "controls": "2",
            "playsinline": "1",
            "autohide": "1",
            "showinfo": "0",
            "autoplay": "1",
            "fs": "1",
            "rel": "0",
            "loop": "0",
            "enablejsapi": "1",
            "iv_load_policy": "3"
        }
    }
    [common.optionsProperty.setNative](options: any) {
        this._playerVars = options;
        if (this.src) {
            this.nativeView.cueVideoByIdStartSecondsSuggestedQuality(this.src, this.nativeView.currentTime(), YTPlaybackQuality.kYTPlaybackQualityAuto);
        }
    }
    play(): void {
        this.nativeView.playVideo();
    }
    pause(): void {
        this.nativeView.pauseVideo();
    }
    stop(): void {
        this.nativeView.stopVideo();
    }
    destory(): void {
        if (this.isPlaying) {
            this.nativeView.stopVideo();
            this.nativeView = null;
        } else {
            this.nativeView = null;
        }
    }
    isPlaying(): boolean {
        if (this.nativeView.playerState() === YTPlayerState.kYTPlayerStatePlaying) {
            return true;
        }
        return false;
    }
    toggleFullscreen() {
        /* TODO
        this._fullScreen = !this._fullScreen;
        const currentTime = this.nativeView.currentTime();
        const vars = {
            "modestbranding": "1",
            "controls": "2",
            "playsinline": "1",
            "autohide": "1",
            "showinfo": "0",
            "autoplay": "1",
            "fs": "1",
            "rel": "0",
            "loop": "0",
            "enablejsapi": "1",
            "iv_load_policy": "3"
        }
        this.nativeView.loadWithVideoIdPlayerVars(this.src, <any>vars);
        this.nativeView.cueVideoByIdStartSecondsSuggestedQuality(this.src, currentTime, YTPlaybackQuality.kYTPlaybackQualityAuto);*/
    }
}