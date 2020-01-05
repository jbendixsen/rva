import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { ModalState, HideRequestConsultationModal, SendEMail } from '../../shared/state';

@Component({
  selector: 'app-request-consultation',
  templateUrl: './request-consultation.component.html',
  styleUrls: ['./request-consultation.component.scss']
})
export class RequestConsultationComponent implements OnInit {

  @Select(ModalState.getShowRequestConsultation)
  public showRequestConsultation$: Observable<boolean>;

  requestConsultation = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl(''),
    email: new FormControl('', Validators.required),
    notes: new FormControl(''),
  });

  constructor(private store: Store) { }

  ngOnInit() {}

  cancelRequestForm() {
    this.store.dispatch(new HideRequestConsultationModal());
    this.requestConsultation.reset();
  }

  submitRequest() {
    this.store.dispatch(new SendEMail({
      name: this.requestConsultation.value.name,
      phone: this.requestConsultation.value.phone,
      email: this.requestConsultation.value.email,
      desc: this.requestConsultation.value.notes
    }));
    this.store.dispatch(new HideRequestConsultationModal());
    this.requestConsultation.reset();
  }

}
