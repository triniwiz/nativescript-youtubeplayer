import { Directive, NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { YoutubePlayer } from '../';
@Directive({
  selector: 'YoutubePlayer'
})
export class YoutubePlayerDirective {}

@NgModule({
  declarations: [YoutubePlayerDirective],
  exports: [YoutubePlayerDirective]
})
export class YoutubePlayerModule {}

registerElement('YoutubePlayer', () => YoutubePlayer);
