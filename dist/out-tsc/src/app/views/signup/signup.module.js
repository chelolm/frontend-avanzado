import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = tslib_1.__decorate([
        NgModule({
            declarations: [SignupComponent],
            imports: [
                CommonModule,
                SignupRoutingModule
            ]
        })
    ], SignupModule);
    return SignupModule;
}());
export { SignupModule };
//# sourceMappingURL=signup.module.js.map