# NativeScript YoutubePlayer

[![npm](https://img.shields.io/npm/v/nativescript-youtubeplayer.svg)](https://www.npmjs.com/package/nativescript-youtubeplayer)
[![npm](https://img.shields.io/npm/dt/nativescript-youtubeplayer.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-youtubeplayer)
[![Build Status](https://travis-ci.org//triniwiz/nativescript-youtubeplayer.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-youtubeplayer)

## Installation

```
tns plugin add nativescript-youtubeplayer
```

## Usage

### Android

Api key follow ➡
[link](https://developers.google.com/youtube/android/player/register) to get
your api key

IMPORTANT: Make sure you include xmlns:ui="nativescript-youtubeplayer" on the
Page element

```xml
<ui:YoutubePlayer id="player" apiKey="AIzaSyCDH3BGQZT2ebUfSE8D3I8NLqaCPu4FRh0" src="{{src}}" height="250" width="100%" backgroundColor="gray" />
```

#### Angular

```
import { YoutubePlayerModule } from 'nativescript-youtubeplayer/angular';

@NgModule({
    imports: [
    YoutubePlayerModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
```

```xml
<YoutubePlayer id="player" apiKey="AIzaSyCDH3BGQZT2ebUfSE8D3I8NLqaCPu4FRh0" src="{{src}}" height="250" width="100%" backgroundColor="gray"></YoutubePlayer>
```


## Properties

| Property | Default | Type | Required | Description  |
| --- | --- | --- | ---| ---|
| src | null | string | <ul><li>- [x] </li></ul> |
| options | null | Object | <ul><li>- [ ] </li></ul> |
| isFullScreen | false  | boolean | <ul><li>- [ ] </li></ul> |

## Api

| Method | Default | Type | Description  |
| --- | --- | --- | ---|
| play() | | void | Starts video playback of the currently cued / loaded video. |
| stop() | | void | Stops and cancels loading of the current video. |
| destroy() | | void | Destroy the video player and free resources. |
| pause() | | void | Pauses the currently playing video. | 
| isPlaying() | false | boolean | Returns is current video is playing. |
| toggleFullscreen() | | void | Toggle fullscreen mode. |

## Example Image
| IOS | Android|
| --- | ---|
|![IOS](https://i.imgur.com/GqNqzMY.png) | ![Android](https://i.imgur.com/0jpewm2.png)|



# TODO

* [x] IOS
* [x] toggleFullscreen IOS
