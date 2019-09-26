(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pair-pair-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/pair/pair.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/pair/pair.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pair</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main/pair/pair.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/pair/pair.module.ts ***!
  \******************************************/
/*! exports provided: PairPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairPageModule", function() { return PairPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pair_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pair.page */ "./src/app/main/pair/pair.page.ts");







const routes = [
    {
        path: '',
        component: _pair_page__WEBPACK_IMPORTED_MODULE_6__["PairPage"]
    }
];
let PairPageModule = class PairPageModule {
};
PairPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pair_page__WEBPACK_IMPORTED_MODULE_6__["PairPage"]]
    })
], PairPageModule);



/***/ }),

/***/ "./src/app/main/pair/pair.page.scss":
/*!******************************************!*\
  !*** ./src/app/main/pair/pair.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGFpci9wYWlyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/pair/pair.page.ts":
/*!****************************************!*\
  !*** ./src/app/main/pair/pair.page.ts ***!
  \****************************************/
/*! exports provided: PairPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairPage", function() { return PairPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PairPage = class PairPage {
    constructor() { }
    ngOnInit() {
    }
};
PairPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pair',
        template: __webpack_require__(/*! raw-loader!./pair.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/pair/pair.page.html"),
        styles: [__webpack_require__(/*! ./pair.page.scss */ "./src/app/main/pair/pair.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PairPage);



/***/ })

}]);
//# sourceMappingURL=main-pair-pair-module-es2015.js.map