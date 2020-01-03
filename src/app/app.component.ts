import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store, Select } from '@ngxs/store';

import { 
  ShowRequestConsultationModal } from './shared/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private store: Store) { }

  ngOnInit() {  }

  showRequestForm() {
    this.store.dispatch(new ShowRequestConsultationModal());
  }


}
