import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { ModalState, HidePrivacyPolicyModal } from '../../shared/state';

import { constants } from '../../shared/data/index';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  companyName = constants.companyName;

  @Select(ModalState.getShowPrivacyPolicy)
  public showPrivacyPolicy$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  close() {
    this.store.dispatch(new HidePrivacyPolicyModal());
  }

}
