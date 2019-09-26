(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ac-analysis-ac-analysis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/ac-analysis/ac-analysis.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/ac-analysis/ac-analysis.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Temperature</ion-title>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"fahrenheit\">\n    <ion-segment-button value=\"fahrenheit\">\n      <ion-label>Fahrenheit</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"celcius\">\n      <ion-label>Celcius</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropleft\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToVoltageAnalysis()\"><b>V</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToCurrentAnalysis()\"><b>C</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToPowerConAnalysis()\"><b>P</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToVibrationAnalysis()\"><b>Vi</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"tertiary\" (click)=\"goToHumidityAnalysis()\"><b>H</b></ion-button></ion-fab-button>\n      <ion-fab-button><ion-button color=\"primary\" (click)=\"goToTemperatureAnalysis()\"><b>T</b></ion-button></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <h4>Compressor</h4>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempWeeklyStatus() }}</div>\n        <p class=\"reader\" ><b>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Recent\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Daily Average\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Weekly Average</b></p>\n        <h4>Evaporator</h4>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempWeeklyStatus() }}</div>\n        <p class=\"reader\" ><b>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Recent\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Daily Average\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Weekly Average</b></p>\n        <h4>Other</h4>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempWeeklyStatus() }}</div>\n        <p class=\"reader\" ><b>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Recent\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Daily Average\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Weekly Average</b></p>\n        <h4>Other</h4>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempWeeklyStatus() }}</div>\n        <p class=\"reader\" ><b>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Recent\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Daily Average\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Weekly Average</b></p>\n\n        <!--\n        <h4>Temperature</h4>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempWeeklyStatus() }}</div>\n        <p class=\"reader\" ><b>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Recent\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Daily Average\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Weekly Average</b></p>\n        <h4>Temperature</h4>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempWeeklyStatus() }}</div>\n        <p class=\"reader\" ><b>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Recent\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Daily Average\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Weekly Average</b></p>\n        -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n          <ion-button shape=\"round\" size=\"default\" expland=\"block\">\n            <ion-back-button color=\"tertiary\" defaultHref=\"/main\"></ion-back-button>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main/ac-analysis/ac-analysis.module.ts":
/*!********************************************************!*\
  !*** ./src/app/main/ac-analysis/ac-analysis.module.ts ***!
  \********************************************************/
/*! exports provided: AcAnalysisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcAnalysisPageModule", function() { return AcAnalysisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ac_analysis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ac-analysis.page */ "./src/app/main/ac-analysis/ac-analysis.page.ts");







const routes = [
    {
        path: '',
        component: _ac_analysis_page__WEBPACK_IMPORTED_MODULE_6__["AcAnalysisPage"]
    }
];
let AcAnalysisPageModule = class AcAnalysisPageModule {
};
AcAnalysisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ac_analysis_page__WEBPACK_IMPORTED_MODULE_6__["AcAnalysisPage"]]
    })
], AcAnalysisPageModule);



/***/ }),

/***/ "./src/app/main/ac-analysis/ac-analysis.page.scss":
/*!********************************************************!*\
  !*** ./src/app/main/ac-analysis/ac-analysis.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWMtYW5hbHlzaXMvYWMtYW5hbHlzaXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/ac-analysis/ac-analysis.page.ts":
/*!******************************************************!*\
  !*** ./src/app/main/ac-analysis/ac-analysis.page.ts ***!
  \******************************************************/
/*! exports provided: AcAnalysisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcAnalysisPage", function() { return AcAnalysisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let AcAnalysisPage = class AcAnalysisPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.selectedPath = '';
        this.router.events.subscribe((event) => {
            this.selectedPath = event.url;
        });
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        this.category = ev.detail.value;
        console.log(ev);
    }
    getTempRecentStatus() {
        this.recentTemp = 32;
        if (this.category === 'celcius') {
            return this.recentTemp;
        }
        else {
            return (this.recentTemp * 1.8) + 32;
        }
    }
    getTempDailyStatus() {
        this.dailyTemp = 24;
        if (this.category === 'celcius') {
            return this.dailyTemp;
        }
        else {
            return (this.dailyTemp * 1.8) + 32;
        }
    }
    getTempWeeklyStatus() {
        this.weeklyTemp = 27;
        if (this.category === 'celcius') {
            return this.weeklyTemp;
        }
        else {
            return (this.weeklyTemp * 1.8) + 32;
        }
    }
    getHumRecentStatus() {
        this.recentHum = 70;
        if (this.category === 'other') {
            return this.recentHum;
        }
        else {
            return (this.recentHum) + 12;
        }
    }
    getHumDailyStatus() {
        this.dailyHum = 85;
        if (this.category === 'other') {
            return this.dailyHum + 13;
        }
        else {
            return this.dailyHum;
        }
    }
    getHumWeeklyStatus() {
        this.weeklyHum = 79;
        return this.weeklyHum;
    }
    getPowRecentStatus() {
        this.recentPow = 70;
        if (this.category === 'kwh') {
            return this.recentPow;
        }
        else {
            return (this.recentPow) + 12;
        }
    }
    getPowDailyStatus() {
        this.dailyPow = 85;
        if (this.category === 'kwh') {
            return this.dailyPow + 13;
        }
        else {
            return this.dailyPow;
        }
    }
    getPowWeeklyStatus() {
        this.weeklyPow = 73;
        return this.weeklyPow;
    }
    getCurRecentStatus() {
        this.recentCur = 3;
        if (this.category === 'A') {
            return this.recentCur;
        }
        else {
            return (this.recentCur) / 1000;
        }
    }
    getCurDailyStatus() {
        this.dailyCur = 2.5;
        if (this.category === 'A') {
            return this.dailyCur;
        }
        else {
            return this.dailyCur / 1000;
        }
    }
    getCurWeeklyStatus() {
        this.weeklyCur = 2;
        if (this.category === 'A') {
            return this.weeklyCur;
        }
        else {
            return this.weeklyCur / 1000;
        }
    }
    getVolRecentStatus() {
        this.recentVol = 15;
        if (this.category === 'V') {
            return this.recentVol;
        }
        else {
            return (this.recentVol) / 1000;
        }
    }
    getVolDailyStatus() {
        this.dailyVol = 11;
        if (this.category === 'V') {
            return this.dailyVol;
        }
        else {
            return this.dailyVol / 1000;
        }
    }
    getVolWeeklyStatus() {
        this.weeklyVol = 9.6;
        if (this.category === 'V') {
            return this.weeklyVol;
        }
        else {
            return this.weeklyVol / 1000;
        }
    }
    goToTemperatureAnalysis() {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/ac-analysis');
    }
    goToHumidityAnalysis() {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/humidity-analysis');
    }
    goToVibrationAnalysis() {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/vibration-analysis');
    }
    goToPowerConAnalysis() {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/power-consumption-analysis');
    }
    goToCurrentAnalysis() {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/current-analysis');
    }
    goToVoltageAnalysis() {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/voltage-analysis');
    }
};
AcAnalysisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AcAnalysisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ac-analysis',
        template: __webpack_require__(/*! raw-loader!./ac-analysis.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/ac-analysis/ac-analysis.page.html"),
        styles: [__webpack_require__(/*! ./ac-analysis.page.scss */ "./src/app/main/ac-analysis/ac-analysis.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AcAnalysisPage);



/***/ })

}]);
//# sourceMappingURL=main-ac-analysis-ac-analysis-module-es2015.js.map