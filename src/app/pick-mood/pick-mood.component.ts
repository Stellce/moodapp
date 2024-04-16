import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Dialog, DialogModule} from "primeng/dialog";
import {HttpService} from "../http.service";
import {ButtonModule} from "primeng/button";
import {NgClass, NgForOf} from "@angular/common";
import {SharedModule} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {routes} from "../app.routes";
import {EmojisService} from "./emojis.service";

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
  emojis: string[];
  selected: string = '';
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private emojisService: EmojisService
  ) {}

  ngOnInit() {
    this.emojis = this.emojisService.emojis;
  }

  onSaveMood() {
    this.dialog.visible = false;
    let emojiId = this.emojis.indexOf(this.selected);
    this.emojisService.selectedEmoji = this.selected;
    this.httpService.token = 'Bearer ' + this.route.snapshot.queryParams['token'];
    this.httpService.sendMood(emojiId).subscribe(res => {
      console.log(res);
    })
  }

}
