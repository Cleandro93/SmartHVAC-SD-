(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ac-analysis-voltage-analysis-voltage-analysis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Voltage</ion-title>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"mV\">\n    <ion-segment-button value=\"mV\">\n      <ion-label>Millivolts</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"V\">\n      <ion-label>Volts</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropleft\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button><ion-button color=\"primary\" (click)=\"goToVoltageAnalysis()\"><b>V</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToCurrentAnalysis()\"><b>C</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToPowerConAnalysis()\"><b>P</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToVibrationAnalysis()\"><b>Vi</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToHumidityAnalysis()\"><b>H</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToTemperatureAnalysis()\"><b>T</b></ion-button></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <br><br><br><br>\n        <div class=\"sensorsDisplay\"><p>{{ getVolRecentStatus() }}</div>\n        <p class=\"reader\" ><b>Recent</b></p>\n        <br><br>\n        <div class=\"sensorsDisplay\"><p>{{ getVolDailyStatus() }}</div>\n        <p class=\"reader\" ><b>Daily Average</b></p>\n        <br><br>\n        <div class=\"sensorsDisplay\"><p>{{ getVolWeeklyStatus() }}</div>\n        <p class=\"reader\" ><b>Weekly Average</b></p>\n        <br><br><br><br>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n          <ion-button shape=\"round\" size=\"default\" expland=\"block\">\n            <ion-back-button color=\"tertiary\" defaultHref=\"/main\"></ion-back-button>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.module.ts ***!
  \******************************************************************************/
/*! exports provided: VoltageAnalysisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoltageAnalysisPageModule", function() { return VoltageAnalysisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _voltage_analysis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voltage-analysis.page */ "./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.page.ts");







var routes = [
    {
        path: '',
        component: _voltage_analysis_page__WEBPACK_IMPORTED_MODULE_6__["VoltageAnalysisPage"]
    }
];
var VoltageAnalysisPageModule = /** @class */ (function () {
    function VoltageAnalysisPageModule() {
    }
    VoltageAnalysisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_voltage_analysis_page__WEBPACK_IMPORTED_MODULE_6__["VoltageAnalysisPage"]]
        })
    ], VoltageAnalysisPageModule);
    return VoltageAnalysisPageModule;
}());



/***/ }),

/***/ "./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWMtYW5hbHlzaXMvdm9sdGFnZS1hbmFseXNpcy92b2x0YWdlLWFuYWx5c2lzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.page.ts ***!
  \****************************************************************************/
/*! exports provided: VoltageAnalysisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoltageAnalysisPage", function() { return VoltageAnalysisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var VoltageAnalysisPage = /** @class */ (function () {
    function VoltageAnalysisPage(navCtrl, router) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.router = router;
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    VoltageAnalysisPage.prototype.ngOnInit = function () {
    };
    VoltageAnalysisPage.prototype.segmentChanged = function (ev) {
        this.category = ev.detail.value;
        console.log(ev);
    };
    VoltageAnalysisPage.prototype.getTempRecentStatus = function () {
        this.recentTemp = 32;
        if (this.category === 'celcius') {
            return this.recentTemp;
        }
        else {
            return (this.recentTemp * 1.8) + 32;
        }
    };
    VoltageAnalysisPage.prototype.getTempDailyStatus = function () {
        this.dailyTemp = 24;
        if (this.category === 'celcius') {
            return this.dailyTemp;
        }
        else {
            return (this.dailyTemp * 1.8) + 32;
        }
    };
    VoltageAnalysisPage.prototype.getTempWeeklyStatus = function () {
        this.weeklyTemp = 27;
        if (this.category === 'celcius') {
            return this.weeklyTemp;
        }
        else {
            return (this.weeklyTemp * 1.8) + 32;
        }
    };
    VoltageAnalysisPage.prototype.getHumRecentStatus = function () {
        this.recentHum = 70;
        if (this.category === 'other') {
            return this.recentHum;
        }
        else {
            return (this.recentHum) + 12;
        }
    };
    VoltageAnalysisPage.prototype.getHumDailyStatus = function () {
        this.dailyHum = 85;
        if (this.category === 'other') {
            return this.dailyHum + 13;
        }
        else {
            return this.dailyHum;
        }
    };
    VoltageAnalysisPage.prototype.getHumWeeklyStatus = function () {
        this.weeklyHum = 79;
        return this.weeklyHum;
    };
    VoltageAnalysisPage.prototype.getPowRecentStatus = function () {
        this.recentPow = 70;
        if (this.category === 'kwh') {
            return this.recentPow;
        }
        else {
            return (this.recentPow) + 12;
        }
    };
    VoltageAnalysisPage.prototype.getPowDailyStatus = function () {
        this.dailyPow = 85;
        if (this.category === 'kwh') {
            return this.dailyPow + 13;
        }
        else {
            return this.dailyPow;
        }
    };
    VoltageAnalysisPage.prototype.getPowWeeklyStatus = function () {
        this.weeklyPow = 73;
        return this.weeklyPow;
    };
    VoltageAnalysisPage.prototype.getCurRecentStatus = function () {
        this.recentCur = 3;
        if (this.category === 'A') {
            return this.recentCur;
        }
        else {
            return (this.recentCur) / 1000;
        }
    };
    VoltageAnalysisPage.prototype.getCurDailyStatus = function () {
        this.dailyCur = 2.5;
        if (this.category === 'A') {
            return this.dailyCur;
        }
        else {
            return this.dailyCur / 1000;
        }
    };
    VoltageAnalysisPage.prototype.getCurWeeklyStatus = function () {
        this.weeklyCur = 2;
        if (this.category === 'A') {
            return this.weeklyCur;
        }
        else {
            return this.weeklyCur / 1000;
        }
    };
    VoltageAnalysisPage.prototype.getVolRecentStatus = function () {
        this.recentVol = 15;
        if (this.category === 'V') {
            return this.recentVol;
        }
        else {
            return (this.recentVol) / 1000;
        }
    };
    VoltageAnalysisPage.prototype.getVolDailyStatus = function () {
        this.dailyVol = 11;
        if (this.category === 'V') {
            return this.dailyVol;
        }
        else {
            return this.dailyVol / 1000;
        }
    };
    VoltageAnalysisPage.prototype.getVolWeeklyStatus = function () {
        this.weeklyVol = 9.6;
        if (this.category === 'V') {
            return this.weeklyVol;
        }
        else {
            return this.weeklyVol / 1000;
        }
    };
    VoltageAnalysisPage.prototype.goToTemperatureAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/ac-analysis');
    };
    VoltageAnalysisPage.prototype.goToHumidityAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/humidity-analysis');
    };
    VoltageAnalysisPage.prototype.goToVibrationAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/vibration-analysis');
    };
    VoltageAnalysisPage.prototype.goToPowerConAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/power-consumption-analysis');
    };
    VoltageAnalysisPage.prototype.goToCurrentAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/current-analysis');
    };
    VoltageAnalysisPage.prototype.goToVoltageAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/voltage-analysis');
    };
    VoltageAnalysisPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    VoltageAnalysisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-voltage-analysis',
            template: __webpack_require__(/*! raw-loader!./voltage-analysis.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.page.html"),
            styles: [__webpack_require__(/*! ./voltage-analysis.page.scss */ "./src/app/main/ac-analysis/voltage-analysis/voltage-analysis.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VoltageAnalysisPage);
    return VoltageAnalysisPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-ac-analysis-voltage-analysis-voltage-analysis-module-es5.js.map