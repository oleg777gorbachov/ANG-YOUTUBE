import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, HostListener, OnInit } from '@angular/core';
import {
  YouTubeVideoI,
  YouTubeVideoShortI,
  YoutubeChannelI,
  YoutubePlaylistI,
} from 'src/app/types/youtube';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeItemService } from 'src/app/services/youtube-item.service';
import { ModalService } from 'src/app/services/modal.service';

type state = 'home' | 'video' | 'playlist' | 'about';

interface menuI {
  label: string;
  value: state;
}

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelPage implements OnInit {
  id!: string;
  state: state = 'home';
  channel?: YoutubeChannelI;
  videos?: YouTubeVideoShortI[];
  playlists?: YoutubePlaylistI[];
  width = 0;
  height = 0;
  playlistState = false;

  homeVideo?: YouTubeVideoI;
  isIncludeVideo = false;

  items: menuI[] = [
    { label: 'home', value: 'home' },
    { label: 'videos', value: 'video' },
    { label: 'playlists', value: 'playlist' },
    { label: 'about', value: 'about' },
  ];

  constructor(
    private ApiService: ApiService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private youtube: YoutubeItemService,
    private modal: ModalService
  ) {
    this.id = this.cutStringAfterCharacter(router.url.split('/')[2], '?');
  }

  private cutStringAfterCharacter(str: string, char: string) {
    const index = str.indexOf(char);
    if (index !== -1) {
      return str.substring(0, index);
    }
    return str;
  }

  stateChange(item: state) {
    this.state = item;
    this.router.navigate(['channel/' + this.id], {
      queryParams: { state: item },
    });
  }

  bgImage() {
    return {
      backgroundImage: `url(${this.channel?.brandingSettings.image.bannerExternalUrl})`,
    };
  }

  playlistClick() {
    this.playlistState = !this.playlistState;
    this.modal.on();
  }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe((params) => {
      this.state = params['state'] || 'home';
    });
    this.ApiService.getChannel(this.id).subscribe(
      (data) => (this.channel = data.items[0])
    );
    this.ApiService.channelVideo(this.id).subscribe((data) => {
      this.videos = this.youtube.filterVideo(data.items);
      this.playlists = this.youtube.filterPlaylist(data.items);
      if (!this.videos) return false;
      for (let key of this.videos) {
        if (key.id.kind === 'youtube#video') {
          this.isIncludeVideo = true;
          this.ApiService.getVideo(key.id.videoId).subscribe(
            (data) => (this.homeVideo = data.items[0])
          );
          return true;
        }
      }

      return false;
    });
  }

  src() {
    if (!this.homeVideo) return null;

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.homeVideo.id
    );
  }
}
