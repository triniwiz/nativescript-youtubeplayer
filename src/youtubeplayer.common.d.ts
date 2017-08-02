import { Property } from "tns-core-modules/ui/core/view";
import { ContentView } from 'tns-core-modules/ui/content-view';
export declare const apiKeyProperty: Property<YoutubePlayer, string>;
export declare const srcProperty: Property<YoutubePlayer, string>;
export declare const optionsProperty: Property<YoutubePlayer, any>;
export declare class YoutubePlayer extends ContentView {
    apiKey: string;
    src: string;
}
