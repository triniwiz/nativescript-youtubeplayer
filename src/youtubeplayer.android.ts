import * as common from './youtubeplayer.common';
import * as utils from 'tns-core-modules/utils/utils';
import { fromObject } from 'tns-core-modules/data/observable';
import { Property } from "tns-core-modules/ui/core/view";
global.moduleMerge(common, exports);
declare const com;
const playerStyleProperty = new Property<YoutubePlayer, string>({
    name: 'playerStyle'
});
export class YoutubePlayer extends common.YoutubePlayer {
    player: any;
    playerStyle: number;
    private _fullScreen: boolean;
    public createNativeView() {
        return new com.google.android.youtube.player.YouTubePlayerView(this._context);
    }
    public initNativeView() {
        if (this.apiKey) {
            this.initializePlayer();
        }
    }
    public disposeNativeView() {
        this.destroy();
    }
    [common.srcProperty.setNative](src: string) {
        if (this.player) {
            this.player.cueVideo(src);
        } else if (this.apiKey && !this.player) {
            this.initializePlayer();
        }
    }
    [common.apiKeyProperty.setNative](apiKey: string) {
        if (!this.player) {
            this.initializePlayer();
        }
    }
    [playerStyleProperty.getDefault](): number {
        return 1;
    }
    [playerStyleProperty.setNative](style: number) {
        if (this.player) {
            switch (style) {
                case 0:
                    this.player.setPlayerStyle(com.google.android.youtube.player.YouTubePlayer.PlayerStyle.CHROMELESS);
                    break;
                case 1:
                    this.player.setPlayerStyle(com.google.android.youtube.player.YouTubePlayer.PlayerStyle.DEFAULT);
                    break;
                case 2:
                    this.player.setPlayerStyle(com.google.android.youtube.player.YouTubePlayer.PlayerStyle.MINIMAL);
                    break;
            }
        }
    }
    private initializePlayer() {
        const that = this;
        const cb = new com.google.android.youtube.player.YouTubePlayer.OnInitializedListener({
            onInitializationFailure(provider, error) {
                that.notify({
                    eventName: 'error',
                    object: fromObject({ message: error })
                });
            },
            onInitializationSuccess(provider, player, wasRestored) {
                that.player = player;
                const fullScreenCb = new com.google.android.youtube.player.YouTubePlayer.OnFullscreenListener({
                    onFullscreen(isFullscreen: boolean) {
                        that.notify({
                            eventName: common.FULLSCREEN_EVENT,
                            object: fromObject({
                                value: isFullscreen
                            })
                        })
                    }
                });
                const playbackEventCb = new com.google.android.youtube.player.YouTubePlayer.PlaybackEventListener({
                    onBuffering(isBuffering: boolean) {
                        that.notify({
                            eventName: common.BUFFERING_EVENT,
                            object: fromObject({
                                value: isBuffering
                            })
                        });
                    },
                    onPaused() {
                        that.notify({
                            eventName: common.PAUSED_EVENT,
                            object: fromObject({})
                        });
                    },
                    onPlaying() {
                        that.notify({
                            eventName: common.PLAYING_EVENT,
                            object: fromObject({})
                        });
                    },
                    onSeekTo(newPositionMillis: number) {
                        that.notify({
                            eventName: common.SEEK_EVENT,
                            object: fromObject({
                                value: newPositionMillis
                            })
                        });
                    },
                    onStopped() {
                        that.notify({
                            eventName: common.BUFFERING_EVENT,
                            object: fromObject({})
                        });
                    }
                });
                const playerStateChangeCb = new com.google.android.youtube.player.YouTubePlayer.PlayerStateChangeListener({
                    onAdStarted() {
                        that.notify({
                            eventName: common.ADSTARTED_EVENT,
                            object: fromObject({})
                        })
                    },
                    onError(reason) {
                        that.notify({
                            eventName: common.ERROR_EVENT,
                            object: fromObject({
                                value: reason.toString()
                            })
                        })
                    },
                    onLoaded(videoId: string) {
                        that.notify({
                            eventName: common.VIDEO_LOADED_EVENT,
                            object: fromObject({
                                value: videoId
                            })
                        })
                    },
                    onLoading() {
                        that.notify({
                            eventName: common.LOADING_EVENT,
                            object: fromObject({})
                        })
                    },
                    onVideoEnded() {
                        that.notify({
                            eventName: common.ENDED_EVENT,
                            object: fromObject({})
                        })
                    },
                    onVideoStarted() {
                        that.notify({
                            eventName: common.STARTED_EVENT,
                            object: fromObject({})
                        })
                    }
                });
                player.setPlayerStateChangeListener(playerStateChangeCb);
                player.setPlaybackEventListener(playbackEventCb);
                player.setOnFullscreenListener(fullScreenCb);
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
            this.player.release();
            this.player = null;
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
playerStyleProperty.register(YoutubePlayer);