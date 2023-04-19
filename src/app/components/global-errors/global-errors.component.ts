import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-errors',
  templateUrl: './global-errors.component.html',
  styleUrls: ['./global-errors.component.scss'],
})
export class GlobalErrorsComponent {
  ErrorService: ErrorService;
  constructor(ErrorService: ErrorService) {
    this.ErrorService = ErrorService;
  }
}
