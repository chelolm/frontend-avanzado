import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { switchMap, map, tap, mergeMap, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../../app.state';
import { SigninService } from '../../../../views/signin/signin.service';

import {
  EUserActions,
  UserLogin,
  GetUserSuccess,
  GetUserFailure,
  deleteLanguage,
  deleteStudy,
} from '../actions/user.actions';

@Injectable()
export class UserEffects {
  @Effect()
  userLogin$ = this._actions$.pipe(
    ofType<UserLogin>(EUserActions.UserLogin),
    mergeMap( action => this._signinService.getUsers()
    .pipe (
        map(users => {
            const user = users.find(
                (user: any) => user.email === action.payload.email && user.password === action.payload.password
            );
            if (user) 
                return new GetUserSuccess(user);
            else
                return new GetUserFailure();
        }
        )
    )
    ));

  @Effect({ dispatch: false })
  getUserSuccess$ = this._actions$.pipe(
    ofType(EUserActions.GetUserSuccess),
    tap(() => this.router.navigate(['/admin']))
  );

  constructor(
    private _signinService: SigninService,
    private _actions$: Actions,
    private router: Router,
    private _store: Store<IAppState>
  ) {}
}
