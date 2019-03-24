(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-offers-offers-module"],{

/***/ "./src/app/views/offers/offers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/offers/offers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OffersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersRoutingModule", function() { return OffersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var OffersRoutingModule = /** @class */ (function () {
    function OffersRoutingModule() {
    }
    OffersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OffersRoutingModule);
    return OffersRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/offers/offers.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/offers/offers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  offers works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/offers/offers.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/offers/offers.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL29mZmVycy9vZmZlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/offers/offers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/offers/offers.component.ts ***!
  \**************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OffersComponent = /** @class */ (function () {
    function OffersComponent() {
    }
    OffersComponent.prototype.ngOnInit = function () {
    };
    OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/views/offers/offers.component.html"),
            styles: [__webpack_require__(/*! ./offers.component.scss */ "./src/app/views/offers/offers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/views/offers/offers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/offers/offers.module.ts ***!
  \***********************************************/
/*! exports provided: OffersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersModule", function() { return OffersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/views/offers/offers-routing.module.ts");
/* harmony import */ var _offers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offers.component */ "./src/app/views/offers/offers.component.ts");





var OffersModule = /** @class */ (function () {
    function OffersModule() {
    }
    OffersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_offers_component__WEBPACK_IMPORTED_MODULE_4__["OffersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _offers_routing_module__WEBPACK_IMPORTED_MODULE_3__["OffersRoutingModule"]
            ]
        })
    ], OffersModule);
    return OffersModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-offers-offers-module.js.map