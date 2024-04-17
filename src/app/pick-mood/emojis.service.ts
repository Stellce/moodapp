import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmojisService {
  private _emojis: string[] = ['😂', '😍', '😊', '😭', '😎', '😀', '😘', '😒', '😳', '🤔'];
  private _selectedEmoji = new BehaviorSubject<string>('');

  get selectedEmoji(): Observable<string> {
    return this._selectedEmoji.asObservable();
  }

  set selectedEmoji(value: string) {
    this._selectedEmoji.next(value);
  }

  get emojis(): string[] {
    return this._emojis;
  }

  constructor() { }


}
