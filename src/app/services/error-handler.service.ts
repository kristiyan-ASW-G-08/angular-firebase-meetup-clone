import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private flashMessage: FlashMessagesService) {}
  handleError(error) {
    this.flashMessage.show('Something went wrong. Try again.', {
      cssClass: 'message is-danger',
      timeout: 4000,
    });
  }
}
