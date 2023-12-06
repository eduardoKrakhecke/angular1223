import { User } from "@app/models/user/user";

export class Post {
  userId: number
  user: User | undefined
  id?: number
  title: string
  body: string
}
