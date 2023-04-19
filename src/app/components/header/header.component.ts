import { Router } from '@angular/router';
import { ErrorService } from './../../services/error.service';
import { Component } from '@angular/core';

interface ItemI {
  label: string;
  value: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  input = '';
  state = false;
  items: ItemI[] = [
    {
      label: 'home',
      value: '/',
    },
    {
      label: 'history',
      value: '/history',
    },
  ];
  constructor(private ErrorService: ErrorService, private router: Router) {}

  submit(event: Event) {
    console.log(event, 'submit', this.input);
    const val = this.input.trim();
    if (val.length <= 0) {
      return this.ErrorService.add(
        'Search request length should be more than 1 symbol'
      );
    }

    if (this.state === true) this.toggle();

    this.router.navigate(['results'], { queryParams: { query: val } });
  }

  isMobile() {
    return window.innerWidth < 468;
  }

  toggle() {
    this.state = !this.state;
  }
}
