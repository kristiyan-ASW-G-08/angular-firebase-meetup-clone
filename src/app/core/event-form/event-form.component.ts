import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

const categories = ['tech', 'art', 'sports', 'health', 'culture'];

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
})
export class EventFormComponent {
  eventForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private router: Router,
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
        });
        this.router.navigate([`/`]);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
