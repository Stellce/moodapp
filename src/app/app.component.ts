import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PickMoodComponent} from "./pick-mood/pick-mood.component";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {NgClass} from "@angular/common";
import {HttpService} from "./http.service";
import {Post} from "./post.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PickMoodComponent, CardModule, ButtonModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  posts: Post[];
  constructor(private http: HttpService) {
  }
  ngOnInit() {
    this.http.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts)
    })
  }

}
