import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  requestConsultation = false;

  showRequestForm() {
    console.log('Show Request Form');
    this.requestConsultation = true;
  }

  cancelRequestForm() {
    console.log('Cancel Request for Consultation');
    this.requestConsultation = false;
  }

  submitRequest() {
    console.log('Submit Request for Consultation');
    this.requestConsultation = false;
  }

}
