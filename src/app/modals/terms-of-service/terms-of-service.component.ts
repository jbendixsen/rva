import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { ModalState, HideTermsOfServiceModal } from '../../shared/state';

import { constants } from '../../shared/data';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.scss']
})
export class TermsOfServiceComponent implements OnInit {

  companyName = constants.companyName;
  companyEmail = constants.companyEmail;
  domainName = constants.domainName;

  @Select(ModalState.getShowTermsOfService)
  public showTermsOfService$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  close() {
    this.store.dispatch(new HideTermsOfServiceModal());
  }

}
