(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ac-analysis-power-consumption-analysis-power-consumption-analysis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.page.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.page.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Power Consuption</ion-title>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"powerPercentage\">\n    <ion-segment-button value=\"powerPercentage\">\n      <ion-label>Percentage</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"kwh\">\n      <ion-label>Kilowatt Hour</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropleft\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToVoltageAnalysis()\"><b>V</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToCurrentAnalysis()\"><b>C</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"primary\" (click)=\"goToPowerConAnalysis()\"><b>P</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToVibrationAnalysis()\"><b>Vi</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToHumidityAnalysis()\"><b>H</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToTemperatureAnalysis()\"><b>T</b></ion-button></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <br><br><br><br>\n        <div class=\"sensorsDisplay\"><p>{{ getPowRecentStatus() }}</div>\n        <p class=\"reader\" ><b>Recent</b></p>\n        <br><br>\n        <div class=\"sensorsDisplay\"><p>{{ getPowDailyStatus() }}</div>\n        <p class=\"reader\" ><b>Daily Average</b></p>\n        <br><br>\n        <div class=\"sensorsDisplay\"><p>{{ getPowWeeklyStatus() }}</div>\n        <p class=\"reader\" ><b>Weekly Average</b></p>\n        <br><br><br><br>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n          <ion-button shape=\"round\" size=\"default\" expland=\"block\">\n            <ion-back-button color=\"tertiary\" defaultHref=\"/main\"></ion-back-button>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: PowerConsumptionAnalysisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerConsumptionAnalysisPageModule", function() { return PowerConsumptionAnalysisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _power_consumption_analysis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./power-consumption-analysis.page */ "./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.page.ts");







var routes = [
    {
        path: '',
        component: _power_consumption_analysis_page__WEBPACK_IMPORTED_MODULE_6__["PowerConsumptionAnalysisPage"]
    }
];
var PowerConsumptionAnalysisPageModule = /** @class */ (function () {
    function PowerConsumptionAnalysisPageModule() {
    }
    PowerConsumptionAnalysisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_power_consumption_analysis_page__WEBPACK_IMPORTED_MODULE_6__["PowerConsumptionAnalysisPage"]]
        })
    ], PowerConsumptionAnalysisPageModule);
    return PowerConsumptionAnalysisPageModule;
}());



/***/ }),

/***/ "./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.page.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.page.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWMtYW5hbHlzaXMvcG93ZXItY29uc3VtcHRpb24tYW5hbHlzaXMvcG93ZXItY29uc3VtcHRpb24tYW5hbHlzaXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.page.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.page.ts ***!
  \************************************************************************************************/
/*! exports provided: PowerConsumptionAnalysisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerConsumptionAnalysisPage", function() { return PowerConsumptionAnalysisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PowerConsumptionAnalysisPage = /** @class */ (function () {
    function PowerConsumptionAnalysisPage(navCtrl, router) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.router = router;
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    PowerConsumptionAnalysisPage.prototype.ngOnInit = function () {
    };
    PowerConsumptionAnalysisPage.prototype.segmentChanged = function (ev) {
        this.category = ev.detail.value;
        console.log(ev);
    };
    PowerConsumptionAnalysisPage.prototype.getTempRecentStatus = function () {
        this.recentTemp = 32;
        if (this.category === 'celcius') {
            return this.recentTemp;
        }
        else {
            return (this.recentTemp * 1.8) + 32;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getTempDailyStatus = function () {
        this.dailyTemp = 24;
        if (this.category === 'celcius') {
            return this.dailyTemp;
        }
        else {
            return (this.dailyTemp * 1.8) + 32;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getTempWeeklyStatus = function () {
        this.weeklyTemp = 27;
        if (this.category === 'celcius') {
            return this.weeklyTemp;
        }
        else {
            return (this.weeklyTemp * 1.8) + 32;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getHumRecentStatus = function () {
        this.recentHum = 70;
        if (this.category === 'other') {
            return this.recentHum;
        }
        else {
            return (this.recentHum) + 12;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getHumDailyStatus = function () {
        this.dailyHum = 85;
        if (this.category === 'other') {
            return this.dailyHum + 13;
        }
        else {
            return this.dailyHum;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getHumWeeklyStatus = function () {
        this.weeklyHum = 79;
        return this.weeklyHum;
    };
    PowerConsumptionAnalysisPage.prototype.getPowRecentStatus = function () {
        this.recentPow = 70;
        if (this.category === 'kwh') {
            return this.recentPow;
        }
        else {
            return (this.recentPow) + 12;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getPowDailyStatus = function () {
        this.dailyPow = 85;
        if (this.category === 'kwh') {
            return this.dailyPow + 13;
        }
        else {
            return this.dailyPow;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getPowWeeklyStatus = function () {
        this.weeklyPow = 73;
        return this.weeklyPow;
    };
    PowerConsumptionAnalysisPage.prototype.getCurRecentStatus = function () {
        this.recentCur = 3;
        if (this.category === 'A') {
            return this.recentCur;
        }
        else {
            return (this.recentCur) / 1000;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getCurDailyStatus = function () {
        this.dailyCur = 2.5;
        if (this.category === 'A') {
            return this.dailyCur;
        }
        else {
            return this.dailyCur / 1000;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getCurWeeklyStatus = function () {
        this.weeklyCur = 2;
        if (this.category === 'A') {
            return this.weeklyCur;
        }
        else {
            return this.weeklyCur / 1000;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getVolRecentStatus = function () {
        this.recentVol = 15;
        if (this.category === 'V') {
            return this.recentVol;
        }
        else {
            return (this.recentVol) / 1000;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getVolDailyStatus = function () {
        this.dailyVol = 11;
        if (this.category === 'V') {
            return this.dailyVol;
        }
        else {
            return this.dailyVol / 1000;
        }
    };
    PowerConsumptionAnalysisPage.prototype.getVolWeeklyStatus = function () {
        this.weeklyVol = 9.6;
        if (this.category === 'V') {
            return this.weeklyVol;
        }
        else {
            return this.weeklyVol / 1000;
        }
    };
    PowerConsumptionAnalysisPage.prototype.goToTemperatureAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/ac-analysis');
    };
    PowerConsumptionAnalysisPage.prototype.goToHumidityAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/humidity-analysis');
    };
    PowerConsumptionAnalysisPage.prototype.goToVibrationAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/vibration-analysis');
    };
    PowerConsumptionAnalysisPage.prototype.goToPowerConAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/power-consumption-analysis');
    };
    PowerConsumptionAnalysisPage.prototype.goToCurrentAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/current-analysis');
    };
    PowerConsumptionAnalysisPage.prototype.goToVoltageAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/voltage-analysis');
    };
    PowerConsumptionAnalysisPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PowerConsumptionAnalysisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-power-consumption-analysis',
            template: __webpack_require__(/*! raw-loader!./power-consumption-analysis.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.page.html"),
            styles: [__webpack_require__(/*! ./power-consumption-analysis.page.scss */ "./src/app/main/ac-analysis/power-consumption-analysis/power-consumption-analysis.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PowerConsumptionAnalysisPage);
    return PowerConsumptionAnalysisPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-ac-analysis-power-consumption-analysis-power-consumption-analysis-module-es5.js.map