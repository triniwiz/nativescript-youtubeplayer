# NativeScript YoutubePlayer


## Installation


```
tns plugin add nativescript-youtubeplayer
```

## Usage 

### Android
Update your default activity to use the custom activity needed for the player.

```xml
<activity
			android:name="com.github.triniwiz.YoutubePlayerActivity"
			android:label="@string/title_activity_kimera"
			android:configChanges="keyboardHidden|orientation|screenSize"
			android:theme="@style/LaunchScreenTheme">
```
Api key follow ➡ [link](https://developers.google.com/youtube/android/player/register) to get your api key

IMPORTANT: Make sure you include xmlns:ui="nativescript-youtubeplayer" on the Page element

```xml
<ui:YoutubePlayer id="player" apiKey="AIzaSyCDH3BGQZT2ebUfSE8D3I8NLqaCPu4FRh0" src="{{src}}" height="250" width="100%" backgroundColor="gray" />
```

#### Angular

```ts
import { registerElement } from "nativescript-angular/element-registry";
registerElement("YoutubePlayer", () => require("nativescript-youtubeplayer").YoutubePlayer);
```

# TODO

- [*] IOS
- [ ] toggleFullscreen IOS
