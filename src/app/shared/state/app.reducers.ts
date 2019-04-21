import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from './app.state';
import { userReducers } from './user/reducers/user.reducers';
import { offerReducers } from './offer/reducers/offer.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  user: userReducers,
  offer: offerReducers
};