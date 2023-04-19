import { YouTubeVideosI } from 'src/app/types/youtube';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage implements OnInit {
  videos: YouTubeVideosI | null = null;
  constructor(private ApiService: ApiService) {}
  ngOnInit(): void {
    this.ApiService.suggestVideo().subscribe((data) => (this.videos = data));
  }
}
