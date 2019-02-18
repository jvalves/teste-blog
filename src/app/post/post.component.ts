import { PostParagPipe } from './post-parag.pipe';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService,
              private postParagPipe: PostParagPipe, private datePipe: DatePipe) { }

  posts: Post[];

  ngOnInit() {
    this.postService.getPosts().subscribe(a => this.posts = a);

  }

}
