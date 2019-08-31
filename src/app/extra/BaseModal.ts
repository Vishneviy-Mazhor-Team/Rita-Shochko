import {EventEmitter, Output} from '@angular/core';

export class BaseModal {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

}
