import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user/user.state';
import { IOfferState, initialOfferState } from './offer/offer.state';

export interface IAppState {
  router?: RouterReducerState;
  user: IUserState;
  offer: IOfferState;
}

export const initialAppState: IAppState = {
  user: initialUserState,
  offer: initialOfferState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
