import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { switchMap, map, tap, mergeMap, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../../app.state';
import { OffersService } from '../../../services/offers.service';
import { of } from 'rxjs';

import {
  EOfferActions,
  getOffers,
  GetOffersSuccess
} from '../actions/offer.actions';

@Injectable()
export class OfferEffects {
  @Effect()
  userLogin$ = this._actions$.pipe(
    ofType<getOffers>(EOfferActions.getOffers),
    switchMap(() => this._offersService.getOffers()),
    switchMap((offers) => {
      return of(new GetOffersSuccess(offers));
    })
    );

  constructor(
    private _offersService: OffersService,
    private _actions$: Actions,
    private router: Router,
    private _store: Store<IAppState>
  ) {}
}
