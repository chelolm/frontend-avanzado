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
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html'
})
export class OffersProfileComponent implements OnInit {
  offers: Offer[] = [];
  constructor(private _store: Store<IAppState>) {
    this.selectOffers();
  }

  private selectOffers() {
    const user$ = this._store.pipe(select(selectUser));
    user$.subscribe(usuario => {
      this.offers = usuario.offers;
    });
  }

  ngOnInit() {}
}
