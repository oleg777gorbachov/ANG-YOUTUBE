import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private name = 'YOUTUBE-HISTORY';
  constructor() {}

  get(): Observable<string[]> {
    return new Observable<string[]>((observer) => {
      const data = JSON.parse(localStorage.getItem(this.name)!);
      if (data) {
        observer.next(data);
      } else {
        observer.next([]);
      }
      observer.complete();
    });
  }

  async add(id: string) {
    this.get().subscribe((data) => {
      localStorage.setItem(
        this.name,
        JSON.stringify([...data.filter((e) => e !== id), id])
      );
    });
  }
}
