import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
var OffersProfileComponent = /** @class */ (function () {
    function OffersProfileComponent(profileService) {
        this.profileService = profileService;
        this.offers = [];
        this.selectOffers();
    }
    OffersProfileComponent.prototype.selectOffers = function () {
        this.offers = this.profileService.user.offers;
    };
    OffersProfileComponent.prototype.ngOnInit = function () { };
    OffersProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-offers-profile',
            templateUrl: './offers-profile.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService])
    ], OffersProfileComponent);
    return OffersProfileComponent;
}());
export { OffersProfileComponent };
//# sourceMappingURL=offers-profile.component.js.map