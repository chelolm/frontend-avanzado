import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../shared/state/app.state';
import { selectUser } from '../../../shared/state/user/selectors/user.selectors';
import { selectOffer } from '../../../shared/state/offer/selectors/offer.selectors';
import { updateUser } from '../../../shared/state/user/actions/user.actions';
import { getOffers } from 'src/app/shared/state/offer/actions/offer.actions';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnInit {
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];
  constructor(
    private _store: Store<IAppState>
  ) {
    this.selectOffers();
  }

  private selectOffers() {
    const user$ = this._store.pipe(select(selectUser));
    user$.subscribe(user => {
      const studiesOfUser = user.studies;
      const offersOfUser = user.offers;

      const offer$ = this._store.pipe(select(selectOffer));
      offer$.subscribe(offers => {
        
        this.offersStudy = offers
          .filter(offer =>
            studiesOfUser.some(study => study.uid === offer.category.uid)
          )
          .map(offer => {
            const offerUser = !!offersOfUser.find(
              _offerUser => _offerUser.id === offer.id
            );
            return { ...offer, subscribe: offerUser };
          });

        this.offersOther = offers.filter(offer =>
          studiesOfUser.every(study => study.uid !== offer.category.uid)
        );
        });
      }); 
  }

  ngOnInit() {}
}
