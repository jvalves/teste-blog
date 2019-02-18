import { AdminService } from './admin/admin.service';

import { PostService } from './post/post.service';
import { PostComponent } from './post/post.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostParagPipe } from './post/post-parag.pipe';
import { TagToTextPipe } from './post/tag-to-text.pipe';
import { AdminComponent } from './admin/admin.component';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    PostParagPipe,
    TagToTextPipe,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [PostService, PostParagPipe, DatePipe, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
