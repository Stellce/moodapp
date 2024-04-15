import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Dialog, DialogModule} from "primeng/dialog";
import {HttpService} from "../http.service";
import {ButtonModule} from "primeng/button";
import {NgClass, NgForOf} from "@angular/common";
import {SharedModule} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {routes} from "../app.routes";

@Component({
  selector: 'app-pick-mood',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    NgForOf,
    SharedModule,
    NgClass
  ],
  templateUrl: './pick-mood.component.html',
  styleUrl: './pick-mood.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PickMoodComponent implements OnInit {

  @ViewChild('dialog') dialog: Dialog;
  selected: string = '';
  emojis: string[] = ['😂', '😍', '😊', '😭', '😎', '😀', '😘', '😒', '😳', '🤔'];
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let e = this.emojis[0].toString();
  }

  onSelectEmoji(emoji: string) {
    if(this.selected === emoji) return this.selected = '';
    this.selected = emoji;
  }

  onSaveMood() {
    this.dialog.visible = false;
    let emojiId = this.emojis.indexOf(this.selected);
    this.httpService.token = this.route.snapshot.queryParams['userId'];
    this.httpService.sendMood(emojiId).subscribe(res => {
      console.log(res);
    })
  }

}
