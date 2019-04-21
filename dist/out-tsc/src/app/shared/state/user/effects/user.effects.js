import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { map, tap, mergeMap } from 'rxjs/operators';
import { SigninService } from '../../../../views/signin/signin.service';
import { EUserActions, GetUserSuccess, GetUserFailure, } from '../actions/user.actions';
var UserEffects = /** @class */ (function () {
    function UserEffects(_signinService, _actions$, router, _store) {
        var _this = this;
        this._signinService = _signinService;
        this._actions$ = _actions$;
        this.router = router;
        this._store = _store;
        this.userLogin$ = this._actions$.pipe(ofType(EUserActions.UserLogin), mergeMap(function (action) { return _this._signinService.getUsers()
            .pipe(map(function (users) {
            var user = users.find(function (user) { return user.email === action.payload.email && user.password === action.payload.password; });
            if (user)
                return new GetUserSuccess(user);
            else
                return new GetUserFailure();
        })); }));
        this.getUserSuccess$ = this._actions$.pipe(ofType(EUserActions.GetUserSuccess), tap(function () { return _this.router.navigate(['/admin']); }));
    }
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UserEffects.prototype, "userLogin$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], UserEffects.prototype, "getUserSuccess$", void 0);
    UserEffects = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [SigninService,
            Actions,
            Router,
            Store])
    ], UserEffects);
    return UserEffects;
}());
export { UserEffects };
//# sourceMappingURL=user.effects.js.map