(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/test/test.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/test/test.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"tertiary\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"test\">\n    <ion-segment-button value=\"connection\">\n      <ion-label>BLE Connection</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"liveData\">\n      <ion-label>Live Data</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"thermostat\">\n      <ion-label>Thermostat</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"test\">\n      <ion-label>Test</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n    <br><br><br><br><br>\n    <div class=\"signalStatus\">\n        <div class=\"signalDisplay\"><p>R</div><br><br><br>\n        <div class=\"signalDisplay\"><p>Y</div><br><br><br>\n        <div class=\"signalDisplay\"><p>GH</div><br><br><br>\n        <div class=\"signalDisplay\"><p>GL</div><br><br><br>\n        <div class=\"signalDisplay\"><p>W</div><br><br><br>\n        <div class=\"signalDisplay\"><p>B</div>\n    </div>\n    <div class=\"signalControl\">\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/test/test.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");







var routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]
    }
];
var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
        })
    ], TestPageModule);
    return TestPageModule;
}());



/***/ }),

/***/ "./src/app/pages/test/test.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/test/test.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, router) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.router = router;
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    TestPage.prototype.ngOnInit = function () {
    };
    TestPage.prototype.segmentChanged = function (ev) {
        this.category = ev.detail.value;
        console.log(ev);
        switch (this.category) {
            case 'connection': {
                this.navCtrl.navigateRoot('/pair');
                break;
            }
            case 'liveData': {
                this.navCtrl.navigateRoot('/tabs');
                break;
            }
            case 'thermostat': {
                this.navCtrl.navigateRoot('/thermostat');
                break;
            }
            case 'test': {
                this.navCtrl.navigateRoot('/test');
                break;
            }
            default: {
                this.navCtrl.navigateRoot('/test');
                break;
            }
        }
    };
    TestPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! raw-loader!./test.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/test/test.page.html"),
            styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/pages/test/test.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TestPage);
    return TestPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-test-test-module-es5.js.map