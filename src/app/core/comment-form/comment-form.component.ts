import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CommentService } from 'src/app/services/comment.service';
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent {
  commentForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
  ) {
    this.commentForm = formBuilder.group({
      content: ['', [Validators.required]],
    });
  }
  async onSubmit() {
    try {
      if (this.commentForm.status === 'VALID') {
        this.commentService.addNewComment({
          ...this.commentForm.value,
          group: this.route.snapshot.paramMap.get('groupId'),
          date: Date.now().toString(),
          displayName: 'Placeholder',
        });

        this.commentForm.reset();
      }
    } catch (err) {
      this.flashMessage.show('Something went wrong. Try again.', {
        cssClass: 'message is-danger',
        timeout: 4000,
      });
    }
  }
}
