import { AppTheme } from '../models';

export class SetTheme {
  static readonly type = '[APP] Set Theme';
  constructor(public payload: AppTheme) {}
}
