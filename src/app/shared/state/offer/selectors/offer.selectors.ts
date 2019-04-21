import { createSelector } from '@ngrx/store';

import { IAppState } from '../../app.state';
import { IOfferState } from '../offer.state';

const selectOffers = (state: IAppState) => state.offer;

export const selectOffer = createSelector(
  selectOffers,
  (state: IOfferState) => state.offer
);

