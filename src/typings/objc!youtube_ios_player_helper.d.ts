
declare const enum YTPlaybackQuality {

	kYTPlaybackQualitySmall = 0,

	kYTPlaybackQualityMedium = 1,

	kYTPlaybackQualityLarge = 2,

	kYTPlaybackQualityHD720 = 3,

	kYTPlaybackQualityHD1080 = 4,

	kYTPlaybackQualityHighRes = 5,

	kYTPlaybackQualityAuto = 6,

	kYTPlaybackQualityDefault = 7,

	kYTPlaybackQualityUnknown = 8
}

declare const enum YTPlayerError {

	kYTPlayerErrorInvalidParam = 0,

	kYTPlayerErrorHTML5Error = 1,

	kYTPlayerErrorVideoNotFound = 2,

	kYTPlayerErrorNotEmbeddable = 3,

	kYTPlayerErrorUnknown = 4
}

declare const enum YTPlayerState {

	kYTPlayerStateUnstarted = 0,

	kYTPlayerStateEnded = 1,

	kYTPlayerStatePlaying = 2,

	kYTPlayerStatePaused = 3,

	kYTPlayerStateBuffering = 4,

	kYTPlayerStateQueued = 5,

	kYTPlayerStateUnknown = 6
}

declare class YTPlayerView extends UIView implements WKNavigationDelegate {

	static alloc(): YTPlayerView; // inherited from NSObject

	static appearance(): YTPlayerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): YTPlayerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): YTPlayerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): YTPlayerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): YTPlayerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): YTPlayerView; // inherited from UIAppearance

	static new(): YTPlayerView; // inherited from NSObject

	delegate: YTPlayerViewDelegate;

	readonly webView: WKWebView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	availablePlaybackRates(): NSArray<any>;

	availableQualityLevels(): NSArray<any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	cuePlaylistByPlaylistIdIndexStartSecondsSuggestedQuality(playlistId: string, index: number, startSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	cuePlaylistByVideosIndexStartSecondsSuggestedQuality(videoIds: NSArray<any>, index: number, startSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	cueVideoByIdStartSecondsEndSecondsSuggestedQuality(videoId: string, startSeconds: number, endSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	cueVideoByIdStartSecondsSuggestedQuality(videoId: string, startSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	cueVideoByURLStartSecondsEndSecondsSuggestedQuality(videoURL: string, startSeconds: number, endSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	cueVideoByURLStartSecondsSuggestedQuality(videoURL: string, startSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	currentTime(): number;

	duration(): number;

	fullScreen(fullScreen: boolean): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadPlaylistByPlaylistIdIndexStartSecondsSuggestedQuality(playlistId: string, index: number, startSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	loadPlaylistByVideosIndexStartSecondsSuggestedQuality(videoIds: NSArray<any>, index: number, startSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	loadVideoByIdStartSecondsEndSecondsSuggestedQuality(videoId: string, startSeconds: number, endSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	loadVideoByIdStartSecondsSuggestedQuality(videoId: string, startSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	loadVideoByURLStartSecondsEndSecondsSuggestedQuality(videoURL: string, startSeconds: number, endSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	loadVideoByURLStartSecondsSuggestedQuality(videoURL: string, startSeconds: number, suggestedQuality: YTPlaybackQuality): void;

	loadWithPlayerParams(additionalPlayerParams: NSDictionary<any, any>): boolean;

	loadWithPlaylistId(playlistId: string): boolean;

	loadWithPlaylistIdPlayerVars(playlistId: string, playerVars: NSDictionary<any, any>): boolean;

	loadWithVideoId(videoId: string): boolean;

	loadWithVideoIdPlayerVars(videoId: string, playerVars: NSDictionary<any, any>): boolean;

	nextVideo(): void;

	pauseVideo(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	playVideo(): void;

	playVideoAt(index: number): void;

	playbackQuality(): YTPlaybackQuality;

	playbackRate(): number;

	playerState(): YTPlayerState;

	playlist(): NSArray<any>;

	playlistIndex(): number;

	previousVideo(): void;

	removeWebView(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	seekToSecondsAllowSeekAhead(seekToSeconds: number, allowSeekAhead: boolean): void;

	self(): this;

	setLoop(loop: boolean): void;

	setPlaybackQuality(suggestedQuality: YTPlaybackQuality): void;

	setPlaybackRate(suggestedRate: number): void;

	setShuffle(shuffle: boolean): void;

	stopVideo(): void;

	videoEmbedCode(): string;

	videoLoadedFraction(): number;

	videoUrl(): NSURL;

	webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

	webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

	webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewWebContentProcessDidTerminate(webView: WKWebView): void;
}

interface YTPlayerViewDelegate extends NSObjectProtocol {

	playerViewDidBecomeReady?(playerView: YTPlayerView): void;

	playerViewDidChangeFullScreen?(playerView: YTPlayerView, fullScreen: boolean): void;

	playerViewDidChangeToQuality?(playerView: YTPlayerView, quality: YTPlaybackQuality): void;

	playerViewDidChangeToState?(playerView: YTPlayerView, state: YTPlayerState): void;

	playerViewDidPlayTime?(playerView: YTPlayerView, playTime: number): void;

	playerViewPreferredInitialLoadingView?(playerView: YTPlayerView): UIView;

	playerViewPreferredWebViewBackgroundColor?(playerView: YTPlayerView): UIColor;

	playerViewReceivedError?(playerView: YTPlayerView, error: YTPlayerError): void;
}
declare var YTPlayerViewDelegate: {

	prototype: YTPlayerViewDelegate;
};

declare var youtube_ios_player_helperVersionNumber: number;

declare var youtube_ios_player_helperVersionString: interop.Reference<number>;
