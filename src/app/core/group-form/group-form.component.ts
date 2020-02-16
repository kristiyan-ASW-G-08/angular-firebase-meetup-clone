import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import categories from '../../shared/categories';
import { GroupService } from 'src/app/services/group.service';
@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
})
export class GroupFormComponent {
  groupForm: FormGroup;
  categories = categories;
  constructor(
    private formBuilder: FormBuilder,
    private groupService: GroupService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
  ) {
    this.groupForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(200)]],
      location: ['', [Validators.required]],
      category: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
    });
  }
  async onSubmit() {
    try {
      if (this.groupForm.status === 'VALID') {
        console.log(this.groupForm.value);
        this.authService.getAuth().subscribe(auth => {
          this.groupService.addNewGroup({
            ...this.groupForm.value,
            organizer: auth.uid,
          });
          this.router.navigate([`/`]);
        });
      }
    } catch (err) {
      this.flashMessage.show('Something went wrong. Try again.', {
        cssClass: 'message is-danger',
        timeout: 4000,
      });
    }
  }
}
