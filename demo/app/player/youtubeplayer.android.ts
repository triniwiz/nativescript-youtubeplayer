import * as common from './youtubeplayer.common';
import { fromObject } from 'tns-core-modules/data/observable';
import { setActivityCallbacks, AndroidActivityCallbacks } from 'tns-core-modules/ui/frame';
global.moduleMerge(common, exports);
declare const com;
export class YoutubePlayer extends common.YoutubePlayer {
    player: any;
    private _fullScreen: boolean;
    public createNativeView() {
        return new com.google.android.youtube.player.YouTubePlayerView(this._context);
    }
    public initNativeView() {
        console.log(this.apiKey)
        console.log(this.src)
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
    destory() {
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

@JavaProxy("com.github.triniwiz.YoutubePlayerActivity")
class Activity extends com.google.android.youtube.player.YouTubeBaseActivity {
    private _callbacks: AndroidActivityCallbacks;

    protected onCreate(savedInstanceState: android.os.Bundle): void {
        if (!this._callbacks) {
            setActivityCallbacks(this);
        }

        this._callbacks.onCreate(this, savedInstanceState, super.onCreate);
    }

    protected onSaveInstanceState(outState: android.os.Bundle): void {
        this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
    }

    protected onStart(): void {
        this._callbacks.onStart(this, super.onStart);
    }

    protected onStop(): void {
        this._callbacks.onStop(this, super.onStop);
    }

    protected onDestroy(): void {
        this._callbacks.onDestroy(this, super.onDestroy);
    }

    public onBackPressed(): void {
        this._callbacks.onBackPressed(this, super.onBackPressed);
    }

    public onRequestPermissionsResult(requestCode: number, permissions: Array<String>, grantResults: Array<number>): void {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    }

    protected onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
    }
}