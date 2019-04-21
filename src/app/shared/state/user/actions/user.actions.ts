import { Action } from '@ngrx/store';

import { User } from '../../../models/user.model';
import { LoginUser } from '../../../models/user.model';

export enum EUserActions {
  UserLogin = '[User] Login',
  GetUserSuccess = '[User] Get User Success',
  GetUserFailure = '[User] Get User Failure',
  updateUser = '[User] Update Account',
  deleteStudy = '[User] Delete Study',
  deleteLanguage = '[User] Delete Language'
}

export class UserLogin implements Action {
    public readonly type = EUserActions.UserLogin;
    constructor(public payload: { email: string, password: string }) {}
}

export class GetUserFailure implements Action {
  public readonly type = EUserActions.GetUserFailure;
  constructor() {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: User) {}
}

export class updateUser implements Action {
  public readonly type = EUserActions.updateUser;
  constructor(public payload: User) {}
}

export class deleteStudy implements Action {
  public readonly type = EUserActions.deleteStudy;
  constructor(public payload: number) {}
}

export class deleteLanguage implements Action {
  public readonly type = EUserActions.deleteLanguage;
  constructor(public payload: number) {}
}


export type UserActions = deleteStudy | GetUserFailure | deleteLanguage | GetUserSuccess | UserLogin | updateUser;
