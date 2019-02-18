import { PostService } from './../post.service';
import { Post } from './../post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  sub: Subscription;
  post: Post;
  constructor(private route: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.postService.getPost(id).subscribe(a => this.post = a );
      }
    );
  }

}
