import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  state = false;
  constructor() {}

  toggle() {
    this.state = !this.state;
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}
