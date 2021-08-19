import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  public getPosts(): Post[] {
    return [...this.posts];
  }

  public getPostUpdatedListener(){
    return this.postsUpdated.asObservable();
  }

  public addPost(title: string, content: string) {
    const post = { title, content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
