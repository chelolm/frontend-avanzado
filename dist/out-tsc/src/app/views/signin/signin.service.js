import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
var SigninService = /** @class */ (function () {
    function SigninService(http) {
        this.http = http;
    }
    SigninService.prototype.getUsers = function () {
        return this.http.get(AppSettings.API_ENDPOINT_USERS);
    };
    SigninService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SigninService);
    return SigninService;
}());
export { SigninService };
//# sourceMappingURL=signin.service.js.map