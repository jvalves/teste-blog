import { AdminComponent } from './admin/admin.component';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post/post-detail/post-detail.component';

const routes: Routes = [
  {path: 'home', component: PostComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'admin', component: AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
