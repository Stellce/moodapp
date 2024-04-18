import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../environments/prod.environment";
import {Post} from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token: string = '';

  constructor(private http: HttpClient) {}

  sendMood(emojiId: number) {
    let params = (new HttpParams()).append('emojiId', emojiId);
    let headers = (new HttpHeaders()).append('Authorization', this.token);
    console.log(this.token);
    console.log(headers);
    return this.http.post(
      `${environment.backendUrl}/posts`,
      {},
      {
        params: params,
        headers: headers
      }
    )
  }

  getAllPosts() {
    let headers = (new HttpHeaders()).append('Authorization', this.token);
    console.log(headers);
    return this.http.get<Post[]>(`${environment.backendUrl}/posts`, {headers: headers});
  }
}
