import { Action } from '@ngrx/store';

import { Offer } from '../../../models/offer.model';

export enum EOfferActions {
  getOffers = '[Offer] Get Offers',
  GetOffersSuccess = '[Offer] Get Offers Success'
}

export class getOffers implements Action {
  public readonly type = EOfferActions.getOffers;
}

export class GetOffersSuccess implements Action {
  public readonly type = EOfferActions.GetOffersSuccess;
  constructor(public payload: Offer[]) {}
}

export type OfferActions = getOffers | GetOffersSuccess;
