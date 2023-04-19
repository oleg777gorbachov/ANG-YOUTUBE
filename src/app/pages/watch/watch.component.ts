import { ApiService } from './../../services/api.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';
import {
  YouTubeVideoI,
  YouTubeVideosI,
  YoutubeChannelI,
} from 'src/app/types/youtube';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchPage implements OnInit {
  id!: string;
  item?: YouTubeVideoI;
  videos?: YouTubeVideosI;
  channel?: YoutubeChannelI;
  width: string = '';
  height: string = '';
  description = true;

  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiService,
    private sanitizer: DomSanitizer,
    private history: HistoryService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.ApiService.getVideo(this.id).subscribe((data) => {
      this.item = data.items[0];
      this.history.add(this.id);

      this.ApiService.getChannel(data.items[0].snippet.channelId).subscribe(
        (data) => (this.channel = data.items[0])
      );
    });
    this.ApiService.suggestVideo(this.id).subscribe(
      (data) => (this.videos = data)
    );
  }

  descToggle() {
    this.description = !this.description;
  }

  src() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.id
    );
  }
}
