import { Component, Input } from '@angular/core';
import {
  YouTubeVideoShortI,
  YoutubeChannelShortI,
} from 'src/app/types/youtube';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss'],
})
export class VideoPreviewComponent {
  @Input('item') item!: YouTubeVideoShortI;

  constructor() {}
}
