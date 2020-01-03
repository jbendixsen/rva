import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AppTheme } from '../models';
import { SetTheme } from './app.actions';

export interface AppStateModel {
  theme: AppTheme;
}

const defaults: AppStateModel = {
  theme: AppTheme.LIGHT,
};

@State<AppStateModel>({
  name: 'app',
  defaults
})
export class AppState {

  constructor() { }

  @Selector()
  static getTheme(state: AppStateModel) {
    return state.theme;
  }

  @Action(SetTheme)
  setTheme(context: StateContext<AppStateModel>, { payload }: SetTheme) {
    console.log('Set Theme');

  }


}
