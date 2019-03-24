(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/dashboard/dashboard.module": [
		"./src/app/views/dashboard/dashboard.module.ts",
		"views-dashboard-dashboard-module"
	],
	"./views/favorites/favorites.module": [
		"./src/app/views/favorites/favorites.module.ts",
		"views-favorites-favorites-module"
	],
	"./views/forgot-password/forgot-password.module": [
		"./src/app/views/forgot-password/forgot-password.module.ts",
		"views-forgot-password-forgot-password-module"
	],
	"./views/offers/offers.module": [
		"./src/app/views/offers/offers.module.ts",
		"views-offers-offers-module"
	],
	"./views/profile/profile.module": [
		"./src/app/views/profile/profile.module.ts",
		"views-profile-profile-module"
	],
	"./views/signin/signin.module": [
		"./src/app/views/signin/signin.module.ts",
		"views-signin-signin-module"
	],
	"./views/signup/signup.module": [
		"./src/app/views/signup/signup.module.ts",
		"views-signup-signup-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard'; */
var rootRouterConfig = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        loadChildren: './views/signin/signin.module#SigninModule',
        data: { title: 'Signin' }
    },
    {
        path: 'forgot-password',
        loadChildren: './views/forgot-password/forgot-password.module#ForgotPasswordModule',
        data: { title: 'Forgot Password' }
    },
    {
        path: 'signup',
        loadChildren: './views/signup/signup.module#SignupModule',
        data: { title: 'Signup' }
    },
    {
        path: 'admin',
        /*  component: AdminLayoutComponent, */
        /* canActivate: [AuthGuard], */
        children: [
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule',
                data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
            },
            {
                path: 'favorites',
                loadChildren: './views/favorites/favorites.module#FavoritesModule',
                data: { title: 'Favorites', breadcrumb: 'FAVORITES' }
            },
            {
                path: 'profile',
                loadChildren: './views/profile/profile.module#ProfileModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'offers',
                loadChildren: './views/offers/offers.module#OffersModule',
                data: { title: 'Offers', breadcrumb: 'Offers' }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'UOCJob';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/core.module */ "./src/app/shared/core.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["rootRouterConfig"], { useHash: false })
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/app.settings.ts":
/*!****************************************!*\
  !*** ./src/app/shared/app.settings.ts ***!
  \****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* import * as moment from 'moment'; */
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.getAvatar = function (user, size) {
        if (size === void 0) { size = 'sm'; }
        if (!user || !user.avatar_hash) {
            return this.IMAGES.UNKNOWN_FACE;
        }
        var _a = user.avatar_hash.split('.'), hash = _a[0], extension = _a[1];
        return "" + this.STATIC_AVATAR_ENDPOINT + user.uid + "/" + hash + size + "." + extension;
    };
    AppSettings.APP_NAME = 'PoliJob';
    AppSettings.APP_LOCALSTORAGE_TOKEN = 'PoliJob_Token';
    AppSettings.APP_VERSION = '0.1.0';
    AppSettings.API_ENDPOINT = '//localhost:3000/';
    AppSettings.STATIC_ENDPOINT = AppSettings.API_ENDPOINT + 'static/';
    AppSettings.STATIC_AVATAR_ENDPOINT = AppSettings.STATIC_ENDPOINT + 'images/avatar/';
    AppSettings.API_ENDPOINT_APP = AppSettings.API_ENDPOINT + 'app/';
    AppSettings.API_ENDPOINT_USER = AppSettings.API_ENDPOINT + 'user';
    AppSettings.API_ENDPOINT_USER_ME = AppSettings.API_ENDPOINT + 'user-me';
    AppSettings.API_ENDPOINT_USER_CREATE = AppSettings.API_ENDPOINT_USER + '/create';
    AppSettings.API_ENDPOINT_CONFIRM_USER = AppSettings.API_ENDPOINT_USER + '/confirm-user';
    AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/remember-password';
    AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/request-remember-password';
    AppSettings.API_ENDPOINT_USER_REQUEST_USER_AVATAR = AppSettings.API_ENDPOINT_USER + '/request-avatar-user';
    AppSettings.API_ENDPOINT_USER_UPLOAD_AVATAR = AppSettings.API_ENDPOINT_USER + '/upload-avatar';
    AppSettings.API_ENDPOINT_USER_SENDMAIL = AppSettings.API_ENDPOINT_USER + '/sendmail';
    AppSettings.API_ENDPOINT_AUTH = AppSettings.API_ENDPOINT + 'auth/';
    AppSettings.API_ENDPOINT_AUTH_LOCAL = AppSettings.API_ENDPOINT + 'auth/local/';
    AppSettings.APP_QUILL_EDITOR_CONFIGURATION = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ direction: 'rtl' }],
            ['clean'],
            ['link']
        ]
    };
    AppSettings.APP_DEFAULT_MOMENT_LOCALE = 'es';
    AppSettings.GUESS_ROL = {
        value: 'guess',
        text: 'settings.rol.GUESS'
    };
    AppSettings.STUDENT_ROL = {
        value: 'student',
        text: 'settings.rol.STUDENT'
    };
    AppSettings.ADMINISTRATOR_ROL = {
        value: 'admin',
        text: 'settings.rol.ADMINISTRATOR'
    };
    AppSettings.COMPANY_ROL = {
        value: 'company',
        text: 'settings.rol.COMPANY'
    };
    AppSettings.ROLES = [
        AppSettings.GUESS_ROL,
        AppSettings.STUDENT_ROL,
        AppSettings.COMPANY_ROL,
        AppSettings.ADMINISTRATOR_ROL
    ];
    AppSettings.USER_STATUS_PENDING = {
        value: 'pending',
        text: 'settings.status.PENDING'
    };
    AppSettings.USER_STATUS_ACTIVE = {
        value: 'active',
        text: 'settings.status.ACTIVE'
    };
    AppSettings.USER_STATUS_INACTIVE = {
        value: 'inactive',
        text: 'settings.status.INACTIVE'
    };
    AppSettings.USER_STATUS = [
        AppSettings.USER_STATUS_PENDING,
        AppSettings.USER_STATUS_ACTIVE,
        AppSettings.USER_STATUS_INACTIVE
    ];
    AppSettings.FORMAT_DATE = 'MM/DD/YYYY';
    AppSettings.IMAGES = {
        UNKNOWN_IMAGE: 'assets/images/image-not-found.png',
        UNKNOWN_FACE: 'assets/images/face-unknown.png',
        UNKNOWN_TEAM: 'assets/images/image-not-found.png'
    };
    AppSettings.NOTIFICATIONS = {
        DEFAULT_TIME: 2000
    };
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/shared/core.module.ts":
/*!***************************************!*\
  !*** ./src/app/shared/core.module.ts ***!
  \***************************************/
/*! exports provided: CORE_SERVICES, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORE_SERVICES", function() { return CORE_SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/profile.service */ "./src/app/shared/services/profile.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/notifications.service */ "./src/app/shared/services/notifications.service.ts");



/* import { JWTInterceptor } from './interceptors/jwt.interceptor'; */
/* import { JwtExpiredInterceptor } from './interceptors/jwt-expired.interceptor'; */
/* import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; */
/* import { metaReducers, reducers } from './states/root.reducer';
import { AuthEffects } from './states/auth/effects/auth.effects';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './states/router/effects/router.effects';

import { UserEffects } from './states/user/effects/user.effects';
import { AppEffects } from './states/app/effects'; */
/* import { UsersEffects } from './states/users/effects'; */
/* import { UsersService } from '../views/users/shared/users.service'; */

/* import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; */


/* export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
} */
var CORE_SERVICES = [
    _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
    _services_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtExpiredInterceptor,
      multi: true,
    }, */
    /*   { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: RouterStateSerializer, useClass: CustomSerializer }, */
    /* {
      provide: MatPaginatorIntl,
      useClass: DatatablePaginatorIntl,
      deps: [TranslateService],
    }, */
];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                /*     StoreModule.forRoot(reducers, { metaReducers }),
                StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
                StoreDevtoolsModule.instrument({ maxAge: 50 }),
                EffectsModule.forRoot([
                  AppEffects,
                  AuthEffects,
                  UserEffects,
                  RouterEffects
                ]),*/
                /*  TranslateModule.forRoot({
                  loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                  }
                }) */
                // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
            ],
            providers: CORE_SERVICES
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppComfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function() { return AppComfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; */

var AppComfirmComponent = /** @class */ (function () {
    function AppComfirmComponent() {
    }
    AppComfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: "\n    <h1 matDialogTitle>{{ data.title }}</h1>\n    <div mat-dialog-content>{{ data.message }}</div>\n    <div mat-dialog-actions>\n      <button\n        type=\"button\"\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"dialogRef.close(true)\"\n      >\n        OK\n      </button>\n      &nbsp;\n      <span fxFlex></span>\n      <button\n        type=\"button\"\n        color=\"accent\"\n        mat-raised-button\n        (click)=\"dialogRef.close(false)\"\n      >\n        Cancel\n      </button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComfirmComponent);
    return AppComfirmComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
  \********************************************************************/
/*! exports provided: AppConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfirmService", function() { return AppConfirmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material'; */

var AppConfirmService = /** @class */ (function () {
    function AppConfirmService( /* private dialog: MatDialog */) {
    }
    AppConfirmService.prototype.confirm = function (data) {
        if (data === void 0) { data = {}; }
        /*  data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        let dialogRef: MatDialogRef<AppComfirmComponent>;
        dialogRef = this.dialog.open(AppComfirmComponent, {
          width: '380px',
          disableClose: true,
          data: { title: data.title, message: data.message }
        });
        return dialogRef.afterClosed(); */
    };
    AppConfirmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppConfirmService);
    return AppConfirmService;
}());



/***/ }),

/***/ "./src/app/shared/services/notifications.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/notifications.service.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* import { MatSnackBar } from '@angular/material'; */
var NotificationsService = /** @class */ (function () {
    function NotificationsService( /* private snackBar: MatSnackBar */) {
    }
    NotificationsService.prototype.showNotification = function (message, action) {
        /*     this.snackBar.open(message, action, {
          duration: AppSettings.NOTIFICATIONS.DEFAULT_TIME
        }); */
    };
    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/shared/services/profile.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/profile.service.ts ***!
  \****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/shared/app.settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



/* import { UserOptions } from '../models/user'; */


/* import { AppStore } from '../states/store.inteface';
import { Store } from '@ngrx/store';
import * as UserActions from 'app/shared/states/user/actions';
import { User } from 'app/shared/models/user'; */
var ProfileService = /** @class */ (function () {
    function ProfileService(http /* , private store$: Store<AppStore> */) {
        this.http = http;
        this.mockUser = {
            uid: 'ajvazquez',
            name: 'Antonio Jesús',
            surname: 'Vázquez Muñoz',
            email: 'antoniojesusvazquezmunozz@gmail.com',
            roles: [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].COMPANY_ROL.value],
            avatar_hash: 'ef72d0e94ba5015d64de8522d845cfd2',
            parents: [],
            childrens: [],
            hasFailed: false,
            studies: {
                action: 'SHOW',
                entities: [
                    {
                        uid: 0,
                        level: 'Ciclo formativo',
                        title: 'Desarrollo de aplicaciones web',
                        institution: 'IES Politécnico Jesús Marin',
                        date: '1548320228',
                        certificate: false
                    },
                    {
                        uid: 1,
                        level: 'Ciclo formativo',
                        title: 'Administracion de sistemas informaticos y redes',
                        institution: 'IES Politécnico Jesús Marin',
                        date: '1397293028',
                        certificate: true
                    }
                ]
            },
            experiences: {
                action: 'SHOW',
                entities: [
                    {
                        uid: 0,
                        company: 'Suma',
                        position: 'Junior',
                        date: '1548320228'
                    },
                    {
                        uid: 0,
                        company: 'Indra',
                        position: 'engineer',
                        date: '1548320228'
                    }
                ]
            },
            languages: {
                action: 'SHOW',
                entities: [
                    {
                        uid: 0,
                        level: '6',
                        name: 'English',
                        date: '1548320228'
                    },
                    {
                        uid: 0,
                        level: '4',
                        name: 'French',
                        date: '1548320228'
                    }
                ]
            },
            offers: {
                entities: [
                    {
                        position: 'Professor Extraescolars programació i robòtica educativa',
                        company: 'Eixos Creativa',
                        family: 'Informática y Comunicaciones',
                        date: '30/01/2019'
                    },
                    {
                        position: 'Programaador Jr Java',
                        company: 'Ki - Works',
                        family: 'Informática y Comunicaciones',
                        date: '28/01/2019'
                    },
                    {
                        position: 'Programador.net',
                        company: 'Tecnic Consultores',
                        family: 'Informática y Comunicaciones',
                        date: '28/01/2019'
                    },
                    {
                        position: 'Programador Junior Java Spring boot',
                        company: 'GRUPO CMC',
                        family: 'Informática y Comunicaciones',
                        date: '25/01/2019'
                    },
                    {
                        position: 'Administrativa',
                        company: 'Servium',
                        family: 'Administración y Gestión',
                        date: '25/01/2019'
                    },
                    {
                        position: 'DESARROLLADOR/A SOFTWARE',
                        company: 'PEPPER',
                        family: 'Informática y Comunicaciones',
                        date: '23/01/2019'
                    }
                ]
            }
        } /* UserOptions */;
    }
    ProfileService.prototype.loadProfile = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.mockUser);
        //return this.http.get<UserOptions>(AppSettings.API_ENDPOINT_USER_ME);
    };
    ProfileService.prototype.logout = function () {
        /*  this.store$.dispatch(new UserActions.Logout()); */
    };
    ProfileService.prototype.updateProfile = function (profile /* User */) {
        /*if (Math.random() > 0.5) {
          return this.http.put<TokenResponse>(AppSettings.API_ENDPOINT_USER_ME, profile);
        }*/
        this.mockUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, profile);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.mockUser /* User */);
    };
    ProfileService.prototype.signupProfile = function (profile /* UserOptions */) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USER_CREATE, profile);
    };
    ProfileService.prototype.requestRememberPassword = function (uid) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD, uid);
    };
    ProfileService.prototype.rememberPassword = function (uidAndHash) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USER_REMEMBER_PASSWORD, uidAndHash);
    };
    ProfileService.prototype.confirmUser = function (uidAndHash) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_CONFIRM_USER, uidAndHash);
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] /* , private store$: Store<AppStore> */])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.component */ "./src/app/shared/services/app-confirm/app-confirm.component.ts");





/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */
// COMPONENTS
// DIRECTIVES
// PIPES
// SERVICES


var classesToInclude = [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_6__["AppComfirmComponent"]];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            providers: [_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__["AppConfirmService"]],
            entryComponents: [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_6__["AppComfirmComponent"]],
            declarations: classesToInclude,
            exports: classesToInclude
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ponsp\Dropbox (Personal)\Chelo y Pep\Máster\FRONT AVANZADO\UOCJob\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map