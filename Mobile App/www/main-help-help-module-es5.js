(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-help-help-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/help/help.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/help/help.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>HELP</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <ion-button direction=\"back\" shape=\"round\" size=\"default\" expland=\"block\">\n          <ion-back-button color=\"tertiary\" defaultHref=\"/main\"></ion-back-button>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main/help/help.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/help/help.module.ts ***!
  \******************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "./src/app/main/help/help.page.ts");







var routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]
    }
];
var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());



/***/ }),

/***/ "./src/app/main/help/help.page.scss":
/*!******************************************!*\
  !*** ./src/app/main/help/help.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVscC9oZWxwLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/help/help.page.ts":
/*!****************************************!*\
  !*** ./src/app/main/help/help.page.ts ***!
  \****************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpPage = /** @class */ (function () {
    function HelpPage() {
    }
    HelpPage.prototype.ngOnInit = function () {
    };
    HelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/help/help.page.html"),
            styles: [__webpack_require__(/*! ./help.page.scss */ "./src/app/main/help/help.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpPage);
    return HelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-help-help-module-es5.js.map