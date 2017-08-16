import { Property } from "tns-core-modules/ui/core/view";
import { ContentView } from 'tns-core-modules/ui/content-view';
export const FULLSCREEN_EVENT = 'fullScreen';
export const PLAYING_EVENT = 'playing';
export const PAUSED_EVENT = 'paused';
export const STOPPED_EVENT = 'stopped';
export const BUFFERING_EVENT = 'buffering';
export const LOADING_EVENT = 'loading';
export const ADSTARTED_EVENT = 'adStarted';
export const STARTED_EVENT = 'started';
export const ENDED_EVENT = 'ended';
export const VIDEO_LOADED_EVENT = 'videoLoaded';
export const ERROR_EVENT = 'error';
export const SEEK_EVENT = 'seek';
export const apiKeyProperty = new Property<YoutubePlayer, string>({
    name: 'apiKey',
    defaultValue: ''
});
export const srcProperty = new Property<YoutubePlayer, string>({
    name: 'src',
    defaultValue: ''
});
export const optionsProperty = new Property<YoutubePlayer, any>({
    name: 'options'
});

export class YoutubePlayer extends ContentView {
    apiKey: string;
    src: string;
    options: any;
}

srcProperty.register(YoutubePlayer);
apiKeyProperty.register(YoutubePlayer);
optionsProperty.register(YoutubePlayer);