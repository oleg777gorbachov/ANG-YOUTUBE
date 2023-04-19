import { ModalService } from './../../services/modal.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  ModalService: ModalService;
  constructor(ModalService: ModalService) {
    this.ModalService = ModalService;
  }

  close() {
    console.log('sds');
    this.ModalService.toggle();
  }
}
