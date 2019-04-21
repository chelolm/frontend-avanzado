import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Store, select } from '@ngrx/store';
import { UserLogin } from '../../shared/state/user/actions/user.actions';
import { selectUser } from '../../shared/state/user/selectors/user.selectors';
var SigninComponent = /** @class */ (function () {
    function SigninComponent(signinService, profileService, formBuilder, router, _store) {
        this.signinService = signinService;
        this.profileService = profileService;
        this.formBuilder = formBuilder;
        this.router = router;
        this._store = _store;
        this.submitted = false;
        this.errorLogin = false;
        this.user$ = this._store.pipe(select(selectUser));
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._store.dispatch(new UserLogin(tslib_1.__assign({}, this.loginForm.value)));
    };
    SigninComponent = tslib_1.__decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SigninService,
            ProfileService,
            FormBuilder,
            Router,
            Store])
    ], SigninComponent);
    return SigninComponent;
}());
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map