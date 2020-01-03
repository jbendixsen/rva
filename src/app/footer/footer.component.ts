import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { 
  ShowTermsOfServiceModal,
  ShowCookiesPolicyModal,
  ShowPrivacyPolicyModal } from '../shared/state';

import { constants } from '../shared/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  companyName = constants.companyName;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  showCookiesPolicyModal() {
    this.store.dispatch(new ShowCookiesPolicyModal());
  }

  showPrivacyPolicyModal() {
    this.store.dispatch(new ShowPrivacyPolicyModal());
  }

  showTermsOfServiceModal() {
    this.store.dispatch(new ShowTermsOfServiceModal());
  }

}
