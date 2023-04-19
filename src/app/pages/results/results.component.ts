import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import {
  YouTubeVideoShortI,
  YoutubeChannelShortI,
} from 'src/app/types/youtube';
import { YoutubeItemService } from 'src/app/services/youtube-item.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsPage implements OnInit {
  query!: string;
  videos?: (YouTubeVideoShortI | YoutubeChannelShortI)[];
  constructor(
    private ApiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private youtube: YoutubeItemService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ApiService.search(this.query).subscribe((data) => {
          this.videos = this.youtube.filterVideo(data.items);
        });
      }
    });
  }

  isVideo(item: YouTubeVideoShortI | YoutubeChannelShortI) {
    if (item.id.kind !== 'youtube#channel') {
      return item;
    }
    return null;
  }

  video(item: any) {
    return item as YouTubeVideoShortI;
  }

  ngOnInit(): void {
    this.ApiService.search(this.query).subscribe((data) => {
      console.log(data.items[1]);
      this.videos = this.youtube.filterVideo(data.items);
    });
  }
}
