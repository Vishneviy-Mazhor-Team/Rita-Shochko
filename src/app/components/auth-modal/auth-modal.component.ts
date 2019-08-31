import {Component, Input, OnInit} from '@angular/core';
import {BaseModal} from '../../extra/BaseModal';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent extends BaseModal implements OnInit {

  @Input() loginPlaceHolder: string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  callHideModal() {
    this.closeModal.emit();
  }

}
