import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
var OffersDetailComponent = /** @class */ (function () {
    function OffersDetailComponent(profileService, offersService, route, router) {
        var _this = this;
        this.profileService = profileService;
        this.offersService = offersService;
        this.route = route;
        this.router = router;
        this.user = this.profileService.user;
        this.route.params.subscribe(function (params) {
            var offers = _this.offersService.offers;
            var offerID = +params.id;
            _this.offer = (offers.find(function (offer) { return offer.id === offerID; }) || {});
        });
    }
    OffersDetailComponent.prototype.subscribeOffer = function () {
        this.user.offers = this.user.offers.concat([this.offer]);
        this.router.navigate(['/admin/profile']);
    };
    OffersDetailComponent.prototype.unsubscribeOffer = function () {
        var _this = this;
        this.user.offers = this.user.offers.filter(function (_offer) { return _offer.id !== _this.offer.id; });
        this.router.navigate(['/admin/profile']);
    };
    OffersDetailComponent.prototype.isSubscribe = function () {
        var _this = this;
        return !!this.user.offers.find(function (_offer) { return _this.offer.id === _offer.id; });
    };
    OffersDetailComponent.prototype.ngOnInit = function () { };
    OffersDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-offers-detail',
            templateUrl: './offers-detail.component.html',
            styleUrls: ['./offers-detail.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService,
            OffersService,
            ActivatedRoute,
            Router])
    ], OffersDetailComponent);
    return OffersDetailComponent;
}());
export { OffersDetailComponent };
//# sourceMappingURL=offers-detail.component.js.map