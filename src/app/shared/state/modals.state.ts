import { State, Action, StateContext, Selector } from '@ngxs/store';

import {
  ShowRequestConsultationModal, HideRequestConsultationModal,
  ShowCookiesPolicyModal, HideCookiesPolicyModal,
  ShowPrivacyPolicyModal, HidePrivacyPolicyModal,
  ShowTermsOfServiceModal, HideTermsOfServiceModal
  } from './modals.actions';

export interface ModalStateModel {
  showRequestConsultation: boolean;
  showCookiesPolicy: boolean;
  showPrivacyPolicy: boolean;
  showTermsOfService: boolean;
}

const defaults: ModalStateModel = {
  showRequestConsultation: false,
  showCookiesPolicy: false,
  showPrivacyPolicy: false,
  showTermsOfService: false
};

@State<ModalStateModel>({
  name: 'modals',
  defaults
})
export class ModalState {

  constructor() { }

  @Selector()
  static getShowRequestConsultation(state: ModalStateModel) {
    return state.showRequestConsultation;
  }

  @Selector()
  static getShowCookiesPolicy(state: ModalStateModel) {
    return state.showCookiesPolicy;
  }

  @Selector()
  static getShowPrivacyPolicy(state: ModalStateModel) {
    return state.showPrivacyPolicy;
  }

  @Selector()
  static getShowTermsOfService(state: ModalStateModel) {
    return state.showTermsOfService;
  }

  @Action(ShowRequestConsultationModal)
  showRequestConsultation(context: StateContext<ModalStateModel>) {
    context.patchState( { showRequestConsultation: true } );
  }

  @Action(HideRequestConsultationModal)
  hideRequestConsultation(context: StateContext<ModalStateModel>) {
    context.patchState( { showRequestConsultation: false } );
  }

  @Action(ShowCookiesPolicyModal)
  showCookiesPolicy(context: StateContext<ModalStateModel>) {
    context.patchState( { showCookiesPolicy: true } );
  }

  @Action(HideCookiesPolicyModal)
  hideCookiesPolicy(context: StateContext<ModalStateModel>) {
    context.patchState( { showCookiesPolicy: false } );
  }

  @Action(ShowPrivacyPolicyModal)
  showPrivacyPolicy(context: StateContext<ModalStateModel>) {
    context.patchState( { showPrivacyPolicy: true } );
  }

  @Action(HidePrivacyPolicyModal)
  hidePrivacyPolicy(context: StateContext<ModalStateModel>) {
    context.patchState( { showPrivacyPolicy: false } );
  }

  @Action(ShowTermsOfServiceModal)
  showTermsOfService(context: StateContext<ModalStateModel>) {
    context.patchState( { showTermsOfService: true } );
  }

  @Action(HideTermsOfServiceModal)
  hideTermsOfService(context: StateContext<ModalStateModel>) {
    context.patchState( { showTermsOfService: false } );
  }

}
