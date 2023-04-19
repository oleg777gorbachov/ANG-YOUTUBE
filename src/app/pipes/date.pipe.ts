import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
})
export class DatePipe implements PipeTransform {
  private milTranform(mil: number) {
    const dates = {
      year: 365 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
      hour: 60 * 60 * 1000,
      minute: 60 * 1000,
      second: 1000,
    };

    for (let [key, value] of Object.entries(dates)) {
      if (value < mil) {
        const diff = Math.floor(mil / value);
        if (diff > 1) return `${diff} ${key}s ago`;
        return `${diff} ${key} ago`;
      }
    }
    return 'Just right now';
  }

  transform(value: string, ...args: unknown[]): unknown {
    const date = new Date(value);
    const now = new Date();
    const diff = Math.floor(now.getTime() - date.getTime());
    return this.milTranform(diff);
  }
}
