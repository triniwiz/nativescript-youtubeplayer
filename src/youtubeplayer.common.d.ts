import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Property } from "tns-core-modules/ui/core/view";
export declare const apiKeyProperty: Property<YoutubePlayer, string>;
export declare const srcProperty: Property<YoutubePlayer, string>;
export declare class YoutubePlayer extends StackLayout {
    apiKey: string;
    src: string;
}
