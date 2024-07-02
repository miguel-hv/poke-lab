import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  private widthSubject = new BehaviorSubject<number>(0);
  width$ = this.widthSubject.asObservable();

  constructor() { }

  updateWidth(width: number) {
    this.widthSubject.next(width);
  }
}