import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

interface ErrorI {
  message: string;
  hide: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  errors: ErrorI[] = [];
  timeout = 7500;
  constructor() {}

  private isIncludes(message: string) {
    let includes = false;
    this.errors.forEach((e) =>
      e.message === message ? (includes = true) : null
    );
    return includes;
  }

  private getIndex(message: string) {
    let index = -1;
    this.errors.forEach((e, i) => (e.message === message ? (index = i) : null));
    return index;
  }

  add(error: string) {
    if (this.isIncludes(error)) return;
    this.errors.push({
      message: error,
      hide: false,
    });

    timer(this.timeout - 300).subscribe(() => {
      const index = this.getIndex(error);

      if (this.errors[index].message === error) {
        this.errors[index] = { ...this.errors[index], hide: true };
      }
    });
    timer(this.timeout).subscribe(() => {
      this.errors = this.errors.filter((e) => e.message !== error);
    });
  }

  remove(error: string) {
    const index = this.getIndex(error);

    if (this.errors[index].message === error) {
      this.errors[index] = { ...this.errors[index], hide: true };
    }
    timer(300).subscribe(() => {
      this.errors = this.errors.filter((e) => e.message !== error);
    });
  }

  fastRemove(error: string) {
    this.errors = this.errors.filter((e) => e.message !== error);
  }
}
