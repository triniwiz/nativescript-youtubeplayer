import { Directive } from '@angular/core';

@Directive({
  selector: 'YoutubePlayer'
})
export class YoutubePlayerDirective {
  constructor() {}
}
export const YOUTUBEPLAYER_DIRECTIVES = [YoutubePlayerDirective];
