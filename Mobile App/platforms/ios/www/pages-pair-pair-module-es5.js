(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pair-pair-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pair/pair.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pair/pair.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"tertiary\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"connection\">\n    <ion-segment-button value=\"connection\">\n      <ion-label>BLE Connection</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"liveData\">\n      <ion-label>Live Data</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"thermostat\">\n      <ion-label>Thermostat</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"test\">\n      <ion-label>Test</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <br><br><br><br><br><br><br>\n        <img style=\"border:3px solid midnightblue ;\" src=\"../assets/rv1.png\" align=\"center\" width=\"250\" height=\"100\"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br><br>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <ion-button shape=\"round\" size=\"large\" expland=\"block\" (click)=\"goToAcAnalysis()\">AC Analysis</ion-button><br><br>\n        <ion-button color=\"tertiary\" shape=\"round\" size=\"large\" expland=\"block\" (click)=\"goToThermoAnalysis()\">Thermostat<br>Analysis</ion-button><br><br>\n        <ion-button shape=\"round\" size=\"large\" expland=\"block\" (click)=\"goToAnalysisHistory()\">Analysis <br> History</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/pair/pair.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/pair/pair.module.ts ***!
  \*******************************************/
/*! exports provided: PairPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairPageModule", function() { return PairPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pair_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pair.page */ "./src/app/pages/pair/pair.page.ts");







var routes = [
    {
        path: '',
        component: _pair_page__WEBPACK_IMPORTED_MODULE_6__["PairPage"]
    }
];
var PairPageModule = /** @class */ (function () {
    function PairPageModule() {
    }
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
    return PairPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pair/pair.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/pair/pair.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhaXIvcGFpci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/pair/pair.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/pair/pair.page.ts ***!
  \*****************************************/
/*! exports provided: PairPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairPage", function() { return PairPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PairPage = /** @class */ (function () {
    function PairPage(navCtrl, router) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.router = router;
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    PairPage.prototype.ngOnInit = function () {
    };
    PairPage.prototype.segmentChanged = function (ev) {
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
                this.navCtrl.navigateRoot('/pair');
                break;
            }
        }
    };
    PairPage.prototype.goToAcAnalysis = function () {
        this.navCtrl.navigateRoot('/ac-analysis');
    };
    PairPage.prototype.goToThermoAnalysis = function () {
        this.navCtrl.navigateRoot('/thermostat');
    };
    PairPage.prototype.goToAnalysisHistory = function () {
        this.navCtrl.navigateRoot('/analysis-history');
    };
    PairPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PairPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pair',
            template: __webpack_require__(/*! raw-loader!./pair.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pair/pair.page.html"),
            styles: [__webpack_require__(/*! ./pair.page.scss */ "./src/app/pages/pair/pair.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PairPage);
    return PairPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pair-pair-module-es5.js.map