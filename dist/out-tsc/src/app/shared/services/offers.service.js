import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
var OffersService = /** @class */ (function () {
    function OffersService(http /* , private store$: Store<AppStore> */) {
        this.http = http;
        this._offers = [{}];
    }
    Object.defineProperty(OffersService.prototype, "offers", {
        get: function () {
            return this._offers;
        },
        set: function (_offers) {
            this._offers = _offers;
        },
        enumerable: true,
        configurable: true
    });
    OffersService.prototype.getOffers = function () {
        return this.http.get(AppSettings.API_ENDPOINT_OFFERS);
    };
    OffersService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient /* , private store$: Store<AppStore> */])
    ], OffersService);
    return OffersService;
}());
export { OffersService };
//# sourceMappingURL=offers.service.js.map