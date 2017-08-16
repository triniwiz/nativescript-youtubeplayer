import { Property } from "tns-core-modules/ui/core/view";
import { ContentView } from 'tns-core-modules/ui/content-view';
export declare const FULLSCREEN_EVENT = "fullScreen";
export declare const PLAYING_EVENT = "playing";
export declare const PAUSED_EVENT = "paused";
export declare const STOPPED_EVENT = "stopped";
export declare const BUFFERING_EVENT = "buffering";
export declare const LOADING_EVENT = "loading";
export declare const ADSTARTED_EVENT = "adStarted";
export declare const STARTED_EVENT = "started";
export declare const ENDED_EVENT = "ended";
export declare const VIDEO_LOADED_EVENT = "videoLoaded";
export declare const ERROR_EVENT = "error";
export declare const SEEK_EVENT = "seek";
export declare const apiKeyProperty: Property<YoutubePlayer, string>;
export declare const srcProperty: Property<YoutubePlayer, string>;
export declare const optionsProperty: Property<YoutubePlayer, any>;
export declare class YoutubePlayer extends ContentView {
    apiKey: string;
    src: string;
    options: any;
}
