import { Offer } from '../../models/offer.model';

export interface IOfferState {
  offer: Offer[];
}

export const initialOfferState: IOfferState = {
  offer: null
};
