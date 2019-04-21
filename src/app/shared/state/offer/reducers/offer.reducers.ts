import { EOfferActions } from '../actions/offer.actions';
import { OfferActions } from '../actions/offer.actions';
import { initialOfferState, IOfferState } from '../offer.state';

export const offerReducers = (
  state = initialOfferState,
  action: OfferActions
): IOfferState => {
  switch (action.type) {
    case EOfferActions.GetOffersSuccess: {
      return {
        ...state,
        offer: action.payload
      };
    }
    default:
      return state;
  }
};
