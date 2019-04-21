import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var OffersComponent = /** @class */ (function () {
    function OffersComponent(route) {
        var _this = this;
        this.route = route;
        this.isOffersList = true;
        this.route.data.subscribe(function (params) { return (_this.isOffersList = !params.my_offers); });
    }
    OffersComponent.prototype.ngOnInit = function () { };
    OffersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-offers',
            templateUrl: './offers.component.html',
            styleUrls: ['./offers.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], OffersComponent);
    return OffersComponent;
}());
export { OffersComponent };
//# sourceMappingURL=offers.component.js.map