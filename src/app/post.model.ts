import {User} from "./user.model";

export interface Post {
  "id": string,
  "user": User
  "emojiId": number,
  "createdAt": string
}
