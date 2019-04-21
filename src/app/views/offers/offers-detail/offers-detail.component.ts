import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../shared/state/app.state';
import { selectUser } from '../../../shared/state/user/selectors/user.selectors';
import { selectOffer } from '../../../shared/state/offer/selectors/offer.selectors';
import { updateUser } from '../../../shared/state/user/actions/user.actions';
import { getOffers } from 'src/app/shared/state/offer/actions/offer.actions';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss']
})
export class OffersDetailComponent implements OnInit {
  offer: Offer;
  user: User;
  constructor(
    private _store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const user$ = this._store.pipe(select(selectUser));
    user$.subscribe(usuario => {
      this.user = usuario;
      this.route.params.subscribe(params => {
        const offer$ = this._store.pipe(select(selectOffer));
          offer$.subscribe(ofertas => {
            const offers = ofertas;

            const offerID = +params.id;
            this.offer = (offers.find(offer => offer.id === offerID) || {}) as Offer;
          });
      });
    });
  }

  subscribeOffer() {
    this.user.offers = [...this.user.offers, this.offer];
    this.router.navigate(['/admin/profile']);
  }
  unsubscribeOffer() {
    this.user.offers = this.user.offers.filter(
      _offer => _offer.id !== this.offer.id
    );
    this.router.navigate(['/admin/profile']);
  }
  isSubscribe(): boolean {
    return !!this.user.offers.find(_offer => this.offer.id === _offer.id);
  }

  ngOnInit() {}
}
