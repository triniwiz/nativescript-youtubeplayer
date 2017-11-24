import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

import { YOUTUBEPLAYER_DIRECTIVES } from './nativescript-youtubeplayer.directive';

@NgModule({
  declarations: [YOUTUBEPLAYER_DIRECTIVES],
  exports: [YOUTUBEPLAYER_DIRECTIVES]
})
export class YoutubePlayerModule {}

registerElement('YoutubePlayer', () => require('../').YoutubePlayer);
