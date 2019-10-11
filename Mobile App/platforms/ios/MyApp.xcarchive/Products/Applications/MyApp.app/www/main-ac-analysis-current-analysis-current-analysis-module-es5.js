(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ac-analysis-current-analysis-current-analysis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ac-analysis/current-analysis/current-analysis.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ac-analysis/current-analysis/current-analysis.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Current</ion-title>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"mA\">\n    <ion-segment-button value=\"mA\">\n      <ion-label>Milliampere</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"A\">\n      <ion-label>Ampere</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropleft\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToVoltageAnalysis()\"><b>V</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"primary\" (click)=\"goToCurrentAnalysis()\"><b>C</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToPowerConAnalysis()\"><b>P</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToVibrationAnalysis()\"><b>Vi</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToHumidityAnalysis()\"><b>H</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToTemperatureAnalysis()\"><b>T</b></ion-button></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <br><br><br><br>\n        <div class=\"sensorsDisplay\"><p>{{ getCurRecentStatus() }}</div>\n        <p class=\"reader\" ><b>Recent</b></p>\n        <br><br>\n        <div class=\"sensorsDisplay\"><p>{{ getCurDailyStatus() }}</div>\n        <p class=\"reader\" ><b>Daily Average</b></p>\n        <br><br>\n        <div class=\"sensorsDisplay\"><p>{{ getCurWeeklyStatus() }}</div>\n        <p class=\"reader\" ><b>Weekly Average</b></p>\n        <br><br><br><br>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n          <ion-button shape=\"round\" size=\"default\" expland=\"block\">\n            <ion-back-button color=\"tertiary\" defaultHref=\"/main\"></ion-back-button>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main/ac-analysis/current-analysis/current-analysis.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/ac-analysis/current-analysis/current-analysis.module.ts ***!
  \******************************************************************************/
/*! exports provided: CurrentAnalysisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentAnalysisPageModule", function() { return CurrentAnalysisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _current_analysis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./current-analysis.page */ "./src/app/main/ac-analysis/current-analysis/current-analysis.page.ts");







var routes = [
    {
        path: '',
        component: _current_analysis_page__WEBPACK_IMPORTED_MODULE_6__["CurrentAnalysisPage"]
    }
];
var CurrentAnalysisPageModule = /** @class */ (function () {
    function CurrentAnalysisPageModule() {
    }
    CurrentAnalysisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_current_analysis_page__WEBPACK_IMPORTED_MODULE_6__["CurrentAnalysisPage"]]
        })
    ], CurrentAnalysisPageModule);
    return CurrentAnalysisPageModule;
}());



/***/ }),

/***/ "./src/app/main/ac-analysis/current-analysis/current-analysis.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/ac-analysis/current-analysis/current-analysis.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWMtYW5hbHlzaXMvY3VycmVudC1hbmFseXNpcy9jdXJyZW50LWFuYWx5c2lzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/ac-analysis/current-analysis/current-analysis.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/ac-analysis/current-analysis/current-analysis.page.ts ***!
  \****************************************************************************/
/*! exports provided: CurrentAnalysisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentAnalysisPage", function() { return CurrentAnalysisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var CurrentAnalysisPage = /** @class */ (function () {
    function CurrentAnalysisPage(navCtrl, router) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.router = router;
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    CurrentAnalysisPage.prototype.ngOnInit = function () {
    };
    CurrentAnalysisPage.prototype.precisionRoundMod = function (number, precision) {
        var factor = Math.pow(10, precision);
        var n = precision < 0 ? number : 0.01 / factor + number;
        return Math.round(n * factor) / factor;
    };
    CurrentAnalysisPage.prototype.segmentChanged = function (ev) {
        this.category = ev.detail.value;
        console.log(ev);
    };
    CurrentAnalysisPage.prototype.getCurRecentStatus = function () {
        this.recentCur = 3;
        if (this.category === 'A') {
            return this.recentCur;
        }
        else {
            return (this.recentCur) / 1000;
        }
    };
    CurrentAnalysisPage.prototype.getCurDailyStatus = function () {
        var converter;
        this.dailyCur = 2.56;
        if (this.category === 'A') {
            return this.precisionRoundMod(this.dailyCur, 3);
        }
        else {
            converter = this.dailyCur / 1000;
            return this.precisionRoundMod(converter, 3);
        }
    };
    CurrentAnalysisPage.prototype.getCurWeeklyStatus = function () {
        this.weeklyCur = 2;
        if (this.category === 'A') {
            return this.weeklyCur;
        }
        else {
            return this.weeklyCur / 1000;
        }
    };
    CurrentAnalysisPage.prototype.goToTemperatureAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/ac-analysis');
    };
    CurrentAnalysisPage.prototype.goToHumidityAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/humidity-analysis');
    };
    CurrentAnalysisPage.prototype.goToVibrationAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/vibration-analysis');
    };
    CurrentAnalysisPage.prototype.goToPowerConAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/power-consumption-analysis');
    };
    CurrentAnalysisPage.prototype.goToCurrentAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/current-analysis');
    };
    CurrentAnalysisPage.prototype.goToVoltageAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/voltage-analysis');
    };
    CurrentAnalysisPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CurrentAnalysisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-analysis',
            template: __webpack_require__(/*! raw-loader!./current-analysis.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/ac-analysis/current-analysis/current-analysis.page.html"),
            styles: [__webpack_require__(/*! ./current-analysis.page.scss */ "./src/app/main/ac-analysis/current-analysis/current-analysis.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CurrentAnalysisPage);
    return CurrentAnalysisPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-ac-analysis-current-analysis-current-analysis-module-es5.js.map