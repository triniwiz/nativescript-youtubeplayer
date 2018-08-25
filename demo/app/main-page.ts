import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
// Event handler for Page 'loaded' event attached in main-page.xml
let player;

export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
    player = page.getViewById('player');
    player.on('playing', args => {
        console.log('playing');
    });
    player.on('paused', args => {
        console.log('paused');
    });
    player.on('fullScreen', args => {
        console.log(`isFullScreen: ${args.object.get('value')}`);
    });
    player.on('ended', args => {
        console.log('ended');
    });
}

export function toggleFullScreen() {
    player.toggleFullscreen();
}
