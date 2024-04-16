import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmojisService {
  private _emojis: string[] = ['😂', '😍', '😊', '😭', '😎', '😀', '😘', '😒', '😳', '🤔'];
  private _selectedEmoji: string;

  get selectedEmoji(): string {
    return this._selectedEmoji;
  }

  set selectedEmoji(value: string) {
    this._selectedEmoji = value;
  }

  get emojis() {
    return this._emojis;
  }

  constructor() { }


}
