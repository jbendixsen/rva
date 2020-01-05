import { State, Action, StateContext, Selector } from '@ngxs/store';

import { RVAService } from '../services'
import { AppTheme, EMail, UserInfo } from '../models';
import { SetTheme, SendEMail, SendEMailSuccess, SendEMailFailure } from './app.actions';

export interface AppStateModel {
  theme: AppTheme;
  userInfo: UserInfo;
}

const defaults: AppStateModel = {
  theme: AppTheme.LIGHT,
  userInfo: {
    name: '',
    phone: '',
    email: ''
  }
};

@State<AppStateModel>({
  name: 'app',
  defaults
})
export class AppState {

  constructor(private rva: RVAService) { }

  @Selector()
  static getTheme(state: AppStateModel) {
    return state.theme;
  }

  @Action(SetTheme)
  setTheme(context: StateContext<AppStateModel>, { payload }: SetTheme) {
    console.log('Set Theme');
  }

  @Action(SendEMail)
  sendEMail(context: StateContext<AppStateModel>, { payload }: SendEMail) {
    const message: EMail = {
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      desc: payload.desc
    };
    this.rva.sendEMail(message).subscribe(
      () => context.dispatch(new SendEMailSuccess(message)),
      error => context.dispatch(new SendEMailFailure(error))
    );

  }

  @Action(SendEMailSuccess)
  sendEMailSuccess(context: StateContext<AppStateModel>, { payload }: SendEMailSuccess) {
    context.patchState({
      userInfo: {
        name: payload.name,
        phone: payload.phone,
        email: payload.email
      }
    });
  }

  @Action(SendEMailFailure)
  sendEMailFailure(context: StateContext<AppStateModel>, { payload }: SendEMailFailure) {
    console.error(payload);
  }

}
