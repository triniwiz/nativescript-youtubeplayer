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

# TODO

* [x] IOS
* [ ] toggleFullscreen IOS
