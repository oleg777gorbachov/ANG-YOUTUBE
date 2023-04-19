import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subscribes',
})
export class SubscribesPipe implements PipeTransform {
  transform(value: number): string {
    const abs = Math.abs(value);

    const values = {
      T: 12,
      B: 9,
      M: 6,
      K: 3,
    };
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        const val = values[key as keyof typeof values];
        if (abs >= Math.pow(10, val)) {
          return (value / Math.pow(10, val)).toFixed(1) + key;
        }
      }
    }

    return value.toString();
  }
}
