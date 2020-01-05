import { AppTheme, EMail } from '../models';

export class SetTheme {
  static readonly type = '[APP] Set Theme';
  constructor(public payload: AppTheme) {}
}

export class SendEMail {
  static readonly type = '[APP] Send EMail';
  constructor(public payload: EMail) {}
}

export class SendEMailSuccess {
  static readonly type = '[APP] Send EMail success';
  constructor(public payload: EMail) {}
}

export class SendEMailFailure {
  static readonly type = '[APP] Send EMail failure';
  constructor(public payload: any) {}
}
