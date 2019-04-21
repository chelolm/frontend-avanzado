import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { OffersDetailComponent } from './offers-detail/offers-detail.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersProfileComponent } from './offers-profile/offers-profile.component';
var OffersModule = /** @class */ (function () {
    function OffersModule() {
    }
    OffersModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                OffersComponent,
                OffersProfileComponent,
                OffersListComponent,
                OffersDetailComponent
            ],
            imports: [CommonModule, OffersRoutingModule]
        })
    ], OffersModule);
    return OffersModule;
}());
export { OffersModule };
//# sourceMappingURL=offers.module.js.map