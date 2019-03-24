(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-signin-signin-module"],{

/***/ "./src/app/views/signin/signin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/signin/signin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SigninRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninRoutingModule", function() { return SigninRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.component */ "./src/app/views/signin/signin.component.ts");




var routes = [
    {
        path: '',
        component: _signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    }
];
var SigninRoutingModule = /** @class */ (function () {
    function SigninRoutingModule() {
    }
    SigninRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SigninRoutingModule);
    return SigninRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/signin/signin.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/signin/signin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signin works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/signin/signin.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/signin/signin.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/signin/signin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/views/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/views/signin/signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/views/signin/signin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/signin/signin.module.ts ***!
  \***********************************************/
/*! exports provided: SigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin-routing.module */ "./src/app/views/signin/signin-routing.module.ts");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin.component */ "./src/app/views/signin/signin.component.ts");





var SigninModule = /** @class */ (function () {
    function SigninModule() {
    }
    SigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _signin_routing_module__WEBPACK_IMPORTED_MODULE_3__["SigninRoutingModule"]
            ]
        })
    ], SigninModule);
    return SigninModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-signin-signin-module.js.map