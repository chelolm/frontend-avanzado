import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */
// COMPONENTS
import { AppComfirmComponent } from './services/app-confirm/app-confirm.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
// DIRECTIVES
// PIPES
// SERVICES
import { AppConfirmService } from './services/app-confirm/app-confirm.service';
var declarations = [AppComfirmComponent, AdminLayoutComponent];
var exports = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppComfirmComponent,
    AdminLayoutComponent
];
var providers = [AppConfirmService];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
            entryComponents: [AppComfirmComponent],
            providers: providers,
            declarations: declarations,
            exports: exports
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map