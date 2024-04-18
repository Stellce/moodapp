import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Dialog, DialogModule} from "primeng/dialog";
import {HttpService} from "../http.service";
import {ButtonModule} from "primeng/button";
import {NgClass, NgForOf, NgIf} from "@angular/common";
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
    NgClass,
    NgIf
  ],
  templateUrl: './pick-mood.component.html',
  styleUrl: './pick-mood.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PickMoodComponent implements OnInit {
  @ViewChild('dialog') dialog: Dialog;
  @Input() isDialogShown: boolean;
  @Output() isDialogShownChange = new EventEmitter<boolean>();
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
    this.isDialogShown = false;
    this.isDialogShownChange.emit(false);
    let emojiId = this.emojis.indexOf(this.selected);
    this.emojisService.selectedEmoji = this.selected;
    console.log(this.route.snapshot)
    this.httpService.token = 'Bearer ' + this.route.snapshot.queryParams['token'];
    this.httpService.sendMood(emojiId).subscribe(res => {
      console.log(res);
    })
  }
}
