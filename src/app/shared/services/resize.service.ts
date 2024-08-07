import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  private widthSubject = signal<number>(screen.width);
  width$ = computed(() => this.widthSubject());

  updateWidth(width: number) {
    this.widthSubject.set(width);
  }
}