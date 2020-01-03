import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { ModalState, HideRequestConsultationModal } from '../../shared/state';

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
    email: new FormControl('', Validators.required),
    notes: new FormControl(''),
  });

  constructor(private store: Store) { }

  ngOnInit() {}

  cancelRequestForm() {
    this.store.dispatch(new HideRequestConsultationModal());
  }

  submitRequest() {
    this.store.dispatch(new HideRequestConsultationModal());
  }

}
