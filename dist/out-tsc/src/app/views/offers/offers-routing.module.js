import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OffersComponent } from './offers.component';
import { OffersDetailComponent } from './offers-detail/offers-detail.component';
var routes = [
    {
        path: '',
        component: OffersComponent
    },
    {
        path: 'my-offers',
        component: OffersComponent,
        data: { my_offers: true }
    },
    {
        path: ':id',
        component: OffersDetailComponent
    }
];
var OffersRoutingModule = /** @class */ (function () {
    function OffersRoutingModule() {
    }
    OffersRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], OffersRoutingModule);
    return OffersRoutingModule;
}());
export { OffersRoutingModule };
//# sourceMappingURL=offers-routing.module.js.map