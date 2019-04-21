import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninService } from './signin.service';
var SigninModule = /** @class */ (function () {
    function SigninModule() {
    }
    SigninModule = tslib_1.__decorate([
        NgModule({
            declarations: [SigninComponent],
            imports: [SharedModule, SigninRoutingModule],
            providers: [SigninService]
        })
    ], SigninModule);
    return SigninModule;
}());
export { SigninModule };
//# sourceMappingURL=signin.module.js.map