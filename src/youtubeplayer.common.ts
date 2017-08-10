import {Property} from "tns-core-modules/ui/core/view";
import {ContentView} from 'tns-core-modules/ui/content-view';

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