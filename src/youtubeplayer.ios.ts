import * as common from './youtubeplayer.common';

global.moduleMerge(common, exports);

export class YoutubePlayer extends common.YoutubePlayer {
    private _fullScreen: boolean;
    private _playerVars: any;
    nativeView: YTPlayerView;

    public createNativeView() {
        this._playerVars = NSDictionary.dictionaryWithObjectsForKeys(<any>[1, 2, 1, 1, 0, 1, 1, 0, 0, 1, 3],<any>
            [
                "modestbranding",
                "controls",
                "playsinline",
                "autohide",
                "showinfo",
                "autoplay",
                "fs",
                "rel",
                "loop",
                "enablejsapi",
                "iv_load_policy"
            ]);
        return YTPlayerView.new();
    }

    [common.srcProperty.setNative](src: string) {
        this.nativeView.loadWithVideoIdPlayerVars(src, <any>this._playerVars);
    }

    [common.optionsProperty.setNative](options: any) {
        let opts = NSDictionary.dictionaryWithDictionary(this.options);
        this._playerVars = opts;
        this.nativeView.loadWithPlayerParams(opts);
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

    destroy(): void {
        if (this.isPlaying) {
            this.nativeView.stopVideo();
            this.nativeView = null;
        } else {
            this.nativeView = null;
        }
    }

    isPlaying(): boolean {
        return this.nativeView.playerState() === YTPlayerState.kYTPlayerStatePlaying;
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