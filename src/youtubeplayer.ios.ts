import {
    BUFFERING_EVENT,
    ENDED_EVENT,
    ERROR_EVENT,
    FULLSCREEN_EVENT,
    optionsProperty,
    PAUSED_EVENT,
    PLAYING_EVENT,
    srcProperty,
    VIDEO_LOADED_EVENT,
    YoutubePlayerBase
} from './youtubeplayer.common';
import { fromObject } from 'tns-core-modules/data/observable';
import * as utils from 'tns-core-modules/utils/utils';
import * as application from 'tns-core-modules/application';
import { layout } from 'tns-core-modules/ui/core/view';

export class YoutubePlayer extends YoutubePlayerBase {
    specHeight: number;
    specWidth: number;
    layoutHeight: number;
    layoutWidth: number;
    _fullScreen: boolean;
    private _playerVars: any;
    nativeView: YTPlayerView;
    _observer: any;
    delegate: YTPlayerViewDelegateImpl;

    constructor() {
        super();
        this._playerVars = NSDictionary.dictionaryWithObjectsForKeys(
            <any>[1, 2, 1, 1, 0, 1, 1, 0, 0, 1, 3],
            <any>[
                'modestbranding',
                'controls',
                'playsinline',
                'autohide',
                'showinfo',
                'autoplay',
                'fs',
                'rel',
                'loop',
                'enablejsapi',
                'iv_load_policy'
            ]
        );
        this.nativeView = YTPlayerView.new();
        this.delegate = YTPlayerViewDelegateImpl.initWithOwner(new WeakRef(this));
    }

    public initNativeView(): void {
        this.nativeView.delegate = this.delegate;
        super.initNativeView();
    }

    [srcProperty.setNative](src: string) {
        this.nativeView.loadWithVideoIdPlayerVars(src, <any>this._playerVars);
    }

    [optionsProperty.setNative](options: any) {
        let opts = NSDictionary.dictionaryWithDictionary(this.options);
        this._playerVars = opts;
        this.nativeView.loadWithPlayerParams(opts);
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        const nativeView = this.nativeView;
        if (nativeView) {
            const width = layout.getMeasureSpecSize(widthMeasureSpec);
            const height = layout.getMeasureSpecSize(heightMeasureSpec);
            this.setMeasuredDimension(width, height);
        }
    }

    public play(): void {
        this.nativeView.playVideo();
    }

    public pause(): void {
        this.nativeView.pauseVideo();
    }

    public stop(): void {
        this.nativeView.stopVideo();
    }

    public destroy(): void {
        const center = utils.ios.getter(
            NSNotificationCenter,
            NSNotificationCenter.defaultCenter
        );
        application.ios.removeNotificationObserver(
            this._observer,
            UIWindowDidResignKeyNotification
        );
        if (this.isPlaying) {
            this.nativeView.stopVideo();
            this.nativeView = null;
        } else {
            this.nativeView = null;
        }
    }

    public isPlaying(): boolean {
        return (
            this.nativeView.playerState() === YTPlayerState.kYTPlayerStatePlaying
        );
    }

    public toggleFullscreen(): void {
        this.nativeView.fullScreen(!this._fullScreen);
    }

    get isFullScreen(): boolean {
        return this._fullScreen;
    }
}

export class YTPlayerViewDelegateImpl extends NSObject
    implements YTPlayerViewDelegate {
    public static ObjCProtocols = [YTPlayerViewDelegate];
    private _owner: WeakRef<YoutubePlayer>;

    static initWithOwner(
        owner: WeakRef<YoutubePlayer>
    ): YTPlayerViewDelegateImpl {
        let delegate = new YTPlayerViewDelegateImpl();
        delegate._owner = owner;
        return delegate;
    }

    playerViewDidChangeFullScreen(
        playerView: YTPlayerView,
        fullScreen: boolean
    ): void {
        const owner = this._owner.get();
        owner._fullScreen = fullScreen;
        owner.notify({
            eventName: FULLSCREEN_EVENT,
            object: fromObject({
                value: fullScreen
            })
        });
    }

    playerViewDidBecomeReady(playerView: YTPlayerView) {
        const owner = this._owner.get();
        owner._observer = application.ios.addNotificationObserver(
            UIWindowDidResignKeyNotification,
            notification => {
                if (
                    notification.object === application.ios.window &&
                    !owner._fullScreen
                ) {
                    owner._fullScreen = true;
                    owner.notify({
                        eventName: FULLSCREEN_EVENT,
                        object: fromObject({
                            value: owner._fullScreen
                        })
                    });
                } else if (
                    notification.object !== application.ios.window &&
                    owner._fullScreen
                ) {
                    owner._fullScreen = false;
                    owner.notify({
                        eventName: FULLSCREEN_EVENT,
                        object: fromObject({
                            value: owner._fullScreen
                        })
                    });
                }
            }
        );
        owner.notify({
            eventName: VIDEO_LOADED_EVENT,
            object: fromObject({})
        });
    }

    playerViewDidChangeToState(playerView: YTPlayerView, state: YTPlayerState) {
        const owner = this._owner.get();
        switch (state) {
            case YTPlayerState.kYTPlayerStateBuffering:
                owner.notify({
                    eventName: BUFFERING_EVENT,
                    object: fromObject({})
                });
                break;
            case YTPlayerState.kYTPlayerStateEnded:
                owner.notify({
                    eventName: ENDED_EVENT,
                    object: fromObject({})
                });
                break;
            case YTPlayerState.kYTPlayerStatePaused:
                owner.notify({
                    eventName: PAUSED_EVENT,
                    object: fromObject({})
                });
                break;
            case YTPlayerState.kYTPlayerStatePlaying:
                owner.notify({
                    eventName: PLAYING_EVENT,
                    object: fromObject({})
                });
                break;
        }
    }

    playerViewReceivedError(playerView: YTPlayerView, error: YTPlayerError) {
        const owner = this._owner.get();
        switch (error) {
            case YTPlayerError.kYTPlayerErrorInvalidParam:
                owner.notify({
                    eventName: ERROR_EVENT,
                    object: fromObject({
                        value: 'The request contains an invalid parameter value'
                    })
                });
                break;
            case YTPlayerError.kYTPlayerErrorHTML5Error:
                owner.notify({
                    eventName: ERROR_EVENT,
                    object: fromObject({
                        value: 'The requested content cannot be played in an HTML5 player'
                    })
                });
                break;
            case YTPlayerError.kYTPlayerErrorVideoNotFound:
                owner.notify({
                    eventName: ERROR_EVENT,
                    object: fromObject({
                        value: 'The video requested was not found'
                    })
                });
                break;
            case YTPlayerError.kYTPlayerErrorNotEmbeddable:
                owner.notify({
                    eventName: ERROR_EVENT,
                    object: fromObject({
                        value:
                            'The owner of the requested video does not allow it to be played in embedded players'
                    })
                });
                break;
            case YTPlayerError.kYTPlayerErrorUnknown:
                owner.notify({
                    eventName: ERROR_EVENT,
                    object: fromObject({
                        value: 'Error occurred'
                    })
                });
                break;
        }
    }
}
