import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { ModalState, HideCookiesPolicyModal } from '../../shared/state';

import { constants } from '../../shared/data/index';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  companyName = constants.companyName;
  domainName = constants.domainName;

  @Select(ModalState.getShowCookiesPolicy)
  public showCookiesPolicy$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  close() {
    this.store.dispatch(new HideCookiesPolicyModal());
  }

}
