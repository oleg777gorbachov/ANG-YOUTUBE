import { Component, Input } from '@angular/core';
import { YoutubePlaylistI } from 'src/app/types/youtube';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss'],
})
export class PlaylistItemComponent {
  @Input('item') item!: YoutubePlaylistI;
}
