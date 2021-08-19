import { PostService } from './../../../core/services/posts.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  public enteredTitle = '';
  public enteredContent = '';

  constructor(private postService: PostService) {}

  public savePost(form: NgForm): void {
    console.log(form);
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
