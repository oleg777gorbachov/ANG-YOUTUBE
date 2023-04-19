import { ApiService } from './services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project';

  constructor(private ApiService: ApiService) {
    this.fetch();
  }

  async fetch() {
    // this.ApiService.suggetVideo().subscribe((data) => {
    //   console.log(data);
    // });
  }
}
