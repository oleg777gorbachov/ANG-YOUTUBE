import { Inject, Injectable } from '@angular/core';
import {
  YouTubeVideoShortI,
  YoutubeChannelShortI,
  YoutubePlaylistI,
} from '../types/youtube';

@Injectable({
  providedIn: 'root',
})
export class YoutubeItemService {
  filterChannel(items: any[]) {
    const filtered = items.filter(
      (e) => e.id.kind === 'youtube#channel'
    ) as YoutubeChannelShortI[];
    return filtered;
  }

  filterVideo(items: any[]) {
    const filtered = items.filter(
      (e) => e.id.kind === 'youtube#video'
    ) as YouTubeVideoShortI[];

    return filtered;
  }

  filterPlaylist(items: any[]) {
    const filtered = items.filter(
      (e) => e.id.kind === 'youtube#playlist'
    ) as YoutubePlaylistI[];
    return filtered;
  }
}
