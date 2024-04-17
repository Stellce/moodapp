import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PickMoodComponent} from "./pick-mood/pick-mood.component";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {HttpService} from "./http.service";
import {Post} from "./post.model";
import {EmojisService} from "./pick-mood/emojis.service";
import {ToolbarModule} from "primeng/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PickMoodComponent, CardModule, ButtonModule, NgClass, NgForOf, DatePipe, ToolbarModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  posts: Post[];
  emojis: string[];
  selectedEmoji: string;
  isPickMoodShown: boolean = true;
  constructor(
    private http: HttpService,
    private emojisService: EmojisService
  ) {}

  ngOnInit() {
    this.emojis = this.emojisService.emojis;
    this.emojisService.selectedEmoji.subscribe(emoji => this.selectedEmoji = emoji);
    this.http.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
