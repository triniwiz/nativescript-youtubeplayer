import * as common from './youtubeplayer.common';
import * as utils from 'tns-core-modules/utils/utils';
import { fromObject } from 'tns-core-modules/data/observable';
global.moduleMerge(common, exports);
declare const com;
export class YoutubePlayer extends common.YoutubePlayer {
    player: any;
    private _fullScreen: boolean;
    public createNativeView() {
        return new com.google.android.youtube.player.YouTubePlayerView(this._context);
    }
    public initNativeView() {
        if (this.apiKey) {
            this.initializePlayer();
        }
    }
    [common.srcProperty.setNative](src: string) {
        if (this.player) {
            this.player.cueVideo(src);
        }
    }
    [common.apiKeyProperty.setNative](apiKey: string) {
        this.initializePlayer();
    }
    private initializePlayer() {
        const that = this;
        const cb = new com.google.android.youtube.player.YouTubePlayer.OnInitializedListener({
            onInitializationFailure(provider, error) {
                that.notify({
                    eventName: 'error',
                    object: fromObject({ message: error })
                })
            },
            onInitializationSuccess(provider, player, wasRestored) {
                that.player = player;
                player.cueVideo(that.src);
            }
        })
        this.nativeView.initialize(this.apiKey, cb);
    }
    play() {
        if (this.player) {
            this.player.play();
        }
    }
    stop() {
        if (this.player) {
            this.player.stop();
        }
    }
    destroy() {
        if (this.player) {
            this.player.release()();
        }
    }
    pause() {
        if (this.player) {
            this.player.pause();
        }
    }
    isPlaying() {
        if (this.player) {
            return this.player.isPlaying()
        }
        return false;
    }
    toggleFullscreen() {
        if (this.player) {
            this._fullScreen = !this._fullScreen;
            this.player.setFullscreen(this._fullScreen);
        }
    }

}