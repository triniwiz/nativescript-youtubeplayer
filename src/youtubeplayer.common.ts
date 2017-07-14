import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Property } from "tns-core-modules/ui/core/view";
import { ContentView } from 'tns-core-modules/ui/content-view';
export const apiKeyProperty = new Property<YoutubePlayer, string>({
  name: 'apiKey'
});
export const srcProperty = new Property<YoutubePlayer, string>({
  name: 'src'
});
export class YoutubePlayer extends ContentView {
  apiKey: string;
  src: string;
}
srcProperty.register(YoutubePlayer);
apiKeyProperty.register(YoutubePlayer);