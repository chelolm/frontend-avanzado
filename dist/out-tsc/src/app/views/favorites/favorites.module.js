import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
var FavoritesModule = /** @class */ (function () {
    function FavoritesModule() {
    }
    FavoritesModule = tslib_1.__decorate([
        NgModule({
            declarations: [FavoritesComponent],
            imports: [
                CommonModule,
                FavoritesRoutingModule
            ]
        })
    ], FavoritesModule);
    return FavoritesModule;
}());
export { FavoritesModule };
//# sourceMappingURL=favorites.module.js.map