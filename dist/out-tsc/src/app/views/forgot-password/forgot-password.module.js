import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = tslib_1.__decorate([
        NgModule({
            declarations: [ForgotPasswordComponent],
            imports: [
                CommonModule,
                ForgotPasswordRoutingModule
            ]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());
export { ForgotPasswordModule };
//# sourceMappingURL=forgot-password.module.js.map