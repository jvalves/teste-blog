import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:3000/posts';
  posts: any;
  constructor(private http: HttpClient) { }

  getPosts() {
   return this.http.get<Post[]>(this.url);
  }

  getPost(id: number) {
    return this.http.get<Post>(this.url + '/' + id);
  }

  deletePost(id: number){
    return this.http.delete<Post>(this.url + '/' + id);
  }

  putPost(post: Post){
    return this.http.put<Post>(this.url + '/' + post.id, post);
  }

  postPost(post:Post){
    return this.http.post<Post>(this.url, post);
  }

}
