import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { OffersService } from '../../services/offers.service';
var AdminLayoutComponent = /** @class */ (function () {
    /*   constructor() {} */
    /* MOCK PURPOSES */
    function AdminLayoutComponent(profileService, offersService, http) {
        var _this = this;
        this.profileService = profileService;
        this.offersService = offersService;
        this.http = http;
        this.login({ email: 'carlos.caballero@gmail.com', password: '1234' }).then(function (user) {
            _this.profileService.user = user;
        });
        this.offersService.getOffers().subscribe(function (offers) {
            _this.offersService.offers = offers;
        });
    }
    AdminLayoutComponent.prototype.getUsers = function () {
        return this.http.get(AppSettings.API_ENDPOINT_USERS).toPromise();
    };
    AdminLayoutComponent.prototype.login = function (_a) {
        var email = _a.email, password = _a.password;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var users;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getUsers()];
                    case 1:
                        users = _b.sent();
                        // Mock response from backend:
                        return [2 /*return*/, users.find(function (user) { return user.email === email && user.password === password; })];
                }
            });
        });
    };
    AdminLayoutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-layout',
            templateUrl: './admin-layout.template.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService,
            OffersService,
            HttpClient])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());
export { AdminLayoutComponent };
//# sourceMappingURL=admin-layout.component.js.map