import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
var ProfileService = /** @class */ (function () {
    function ProfileService(http /* , private store$: Store<AppStore> */) {
        this.http = http;
        this._user = {};
    }
    Object.defineProperty(ProfileService.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (_user) {
            this._user = _user;
        },
        enumerable: true,
        configurable: true
    });
    ProfileService.prototype.loadProfile = function () {
        return of(this.user);
        //return this.http.get<UserOptions>(AppSettings.API_ENDPOINT_USER_ME);
    };
    ProfileService.prototype.logout = function () {
        /*  this.store$.dispatch(new UserActions.Logout()); */
    };
    ProfileService.prototype.updateProfile = function (profile /* User */) {
        return this.http.put(AppSettings.API_ENDPOINT_USERS, tslib_1.__assign({}, profile));
    };
    ProfileService.prototype.signupProfile = function (profile /* UserOptions */) {
        return this.http.post(AppSettings.API_ENDPOINT_USER_CREATE, profile);
    };
    ProfileService.prototype.requestRememberPassword = function (uid) {
        return this.http.post(AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD, uid);
    };
    ProfileService.prototype.rememberPassword = function (uidAndHash) {
        return this.http.post(AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD, uidAndHash);
    };
    ProfileService.prototype.confirmUser = function (uidAndHash) {
        return this.http.post(AppSettings.API_ENDPOINT_CONFIRM_USER, uidAndHash);
    };
    ProfileService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient /* , private store$: Store<AppStore> */])
    ], ProfileService);
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile.service.js.map