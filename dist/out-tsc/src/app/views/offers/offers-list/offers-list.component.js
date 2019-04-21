import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
var OffersListComponent = /** @class */ (function () {
    function OffersListComponent(profileService, offersService) {
        this.profileService = profileService;
        this.offersService = offersService;
        this.offersStudy = [];
        this.offersOther = [];
        this.selectOffers();
    }
    OffersListComponent.prototype.selectOffers = function () {
        var studiesOfUser = this.profileService.user.studies;
        var offersOfUser = this.profileService.user.offers;
        this.offersStudy = this.offersService.offers
            .filter(function (offer) {
            return studiesOfUser.some(function (study) { return study.uid === offer.category.uid; });
        })
            .map(function (offer) {
            var offerUser = !!offersOfUser.find(function (_offerUser) { return _offerUser.id === offer.id; });
            return tslib_1.__assign({}, offer, { subscribe: offerUser });
        });
        this.offersOther = this.offersService.offers.filter(function (offer) {
            return studiesOfUser.every(function (study) { return study.uid !== offer.category.uid; });
        });
    };
    OffersListComponent.prototype.ngOnInit = function () { };
    OffersListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-offers-list',
            templateUrl: './offers-list.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService,
            OffersService])
    ], OffersListComponent);
    return OffersListComponent;
}());
export { OffersListComponent };
//# sourceMappingURL=offers-list.component.js.map