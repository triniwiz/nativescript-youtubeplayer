import { YoutubePlayerBase } from './youtubeplayer.common';
export declare class YoutubePlayer extends YoutubePlayerBase {
  play(): void;
  stop(): void;
  destroy(): void;
  pause(): void;
  isPlaying(): boolean;
  toggleFullscreen(): void;
  options: any;
  readonly isFullScreen: boolean;
}
