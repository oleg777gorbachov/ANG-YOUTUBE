import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { YouTubeVideoI } from 'src/app/types/youtube';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryPage implements OnInit {
  items: YouTubeVideoI[] = [];

  constructor(
    private ApiService: ApiService,
    private history: HistoryService
  ) {}

  ngOnInit(): void {
    this.history.get().subscribe((data) => {
      for (let i in data) {
        const key = data[i];
        this.ApiService.getVideo(key).subscribe((data) => {
          this.items[i] = data.items[0];
        });
      }
    });
  }
}
