import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TouchNRide';
  modalOpened: boolean;
  modalPlaceholder = 'Test';
  showModal() {
    this.modalOpened = true;
  }

  hideModal() {
    this.modalOpened = false;
  }

}
