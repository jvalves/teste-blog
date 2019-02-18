import { PostService } from './../post/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  preserveWhitespaces: true
})
export class AdminComponent implements OnInit {

  constructor(private postService: PostService
  ) { }
  posts: Post[];
  p: Post;
  ngOnInit() {
    this.postService.getPosts().subscribe(a => this.posts = a);

  }

  deletePost(p){
    if(p){
      this.postService.deletePost(p.id).subscribe();
    }
    this.closeModal('deleteModal');
    this.closeModal('formModal');
  }

  openModal(modalName){
    document.getElementById(modalName).style.opacity = '1';
    document.body.style.overflowY = 'hidden';
    document.getElementById(modalName).style.pointerEvents = 'auto';
    document.getElementById('container').style.pointerEvents = 'none';
  }
  
  closeModal(modalName){
    document.body.style.overflowY = 'auto';   
    document.getElementById(modalName).style.opacity = '0';
    document.getElementById(modalName).style.pointerEvents = 'none';
    document.getElementById('container').style.pointerEvents = 'auto';
  }

  openFormModal(modalName, post){
    this.p = post;
    this.openModal(modalName);

  }

  openDeleteModal(){
    document.getElementById('deleteModal').style.opacity = '1';
    document.getElementById('deleteModal').style.zIndex = '50';
    document.body.style.overflowY = 'hidden';
    document.getElementById('deleteModal').style.pointerEvents = 'auto';
    document.getElementById('container').style.pointerEvents = 'none';
  }

  onSubmit(form){
    let nPost = form.value;
    if(this.p){
        this.p.comment = '<p>' + nPost.comment.replace(/\n/g, "</p><p>") + '</p>'; 
        this.p.subtitle = nPost.subtitle;
        //this.p.publication_date = formatDate(Date.now(), 'YYYY-MM-DD', 'en-US');
      this.postService.putPost(this.p).subscribe();
      this.closeModal('formModal');
    }else{
      let a = {
        title: nPost.title.toUpperCase(),
        subtitle: nPost.subtitle,
        comment: '<p>' + nPost.comment.replace(/\n/g, "</p><p>") + '</p>',
        publication_date: formatDate(Date.now(), 'yyyy-MM-dd', 'en-US')
      }
      this.postService.postPost(a).subscribe();
      this.closeModal('formModal');
    }
  }



}
