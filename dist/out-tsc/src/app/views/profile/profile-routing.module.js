import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileStudyComponent } from './profile-student/study/profile-study.component';
import { ProfileLanguageComponent } from './profile-student/language/profile-language.component';
import { ProfileAccountComponent } from './profile-student/account/profile-account.component';
var routes = [
    {
        path: '',
        component: ProfileComponent
    },
    {
        path: 'profile-student/account',
        component: ProfileAccountComponent
    },
    {
        path: 'profile-student/study',
        component: ProfileStudyComponent
    },
    {
        path: 'profile-student/study/:uid',
        component: ProfileStudyComponent
    },
    {
        path: 'profile-student/language',
        component: ProfileLanguageComponent
    },
    {
        path: 'profile-student/language/:uid',
        component: ProfileLanguageComponent
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());
export { ProfileRoutingModule };
//# sourceMappingURL=profile-routing.module.js.map