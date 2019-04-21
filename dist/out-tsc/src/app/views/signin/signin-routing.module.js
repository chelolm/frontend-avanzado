import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
var routes = [
    {
        path: '',
        component: SigninComponent
    }
];
var SigninRoutingModule = /** @class */ (function () {
    function SigninRoutingModule() {
    }
    SigninRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], SigninRoutingModule);
    return SigninRoutingModule;
}());
export { SigninRoutingModule };
//# sourceMappingURL=signin-routing.module.js.map