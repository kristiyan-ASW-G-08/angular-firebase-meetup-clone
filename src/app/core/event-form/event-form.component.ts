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
import { EventService } from 'src/app/services/event.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import categories from '../../shared/categories';
@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
})
export class EventFormComponent {
  eventForm: FormGroup;
  categories = categories;
  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) {
    this.eventForm = formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });
  }
  async onSubmit() {
    try {
      if (this.eventForm.status === 'VALID') {
        this.eventService.addNewEvent({
          ...this.eventForm.value,
          attendees: 0,
          group: this.route.snapshot.paramMap.get('groupId'),
        });
        this.router.navigate([`/`]);
      }
    } catch (err) {
      this.flashMessage.show('Something went wrong. Try again.', {
        cssClass: 'message is-danger',
        timeout: 4000,
      });
    }
  }
}
