(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-thermostat-analysis-thermostat-analysis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/thermostat-analysis/thermostat-analysis.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/thermostat-analysis/thermostat-analysis.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Thermostat Analysis</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n          <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"fahrenheit\">\n            <ion-segment-button value=\"fahrenheit\">\n              <ion-label>Fahrenheit</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"celcius\">\n              <ion-label>Celcius</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n        <h4>Temperature</h4>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div><br>\n        <h4>Temperature</h4>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br><br>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <ion-button shape=\"round\" size=\"large\" expland=\"block\" (click)=\"goToCompressorControl()\">Compressor <br> Control</ion-button><br><br>\n        <ion-button shape=\"round\" size=\"large\" expland=\"block\" (click)=\"goToFanControl()\">Fan  <br>Control</ion-button><br><br>\n        <ion-button color=\"tertiary\" shape=\"roud\" size=\"large\" expland=\"block\" (click)=\"powerOff()\">\n            <ion-icon name=\"power\"></ion-icon>\n        </ion-button><br><br>\n        <br><br><br><br><br><br><br><br>\n        <ion-button shape=\"round\" size=\"default\" expland=\"block\">\n          <ion-back-button color=\"tertiary\" defaultHref=\"/main\"></ion-back-button>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/main/thermostat-analysis/thermostat-analysis.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/thermostat-analysis/thermostat-analysis.module.ts ***!
  \************************************************************************/
/*! exports provided: ThermostatAnalysisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermostatAnalysisPageModule", function() { return ThermostatAnalysisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thermostat_analysis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thermostat-analysis.page */ "./src/app/main/thermostat-analysis/thermostat-analysis.page.ts");







const routes = [
    {
        path: '',
        component: _thermostat_analysis_page__WEBPACK_IMPORTED_MODULE_6__["ThermostatAnalysisPage"]
    }
];
let ThermostatAnalysisPageModule = class ThermostatAnalysisPageModule {
};
ThermostatAnalysisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_thermostat_analysis_page__WEBPACK_IMPORTED_MODULE_6__["ThermostatAnalysisPage"]]
    })
], ThermostatAnalysisPageModule);



/***/ }),

/***/ "./src/app/main/thermostat-analysis/thermostat-analysis.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/thermostat-analysis/thermostat-analysis.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdGhlcm1vc3RhdC1hbmFseXNpcy90aGVybW9zdGF0LWFuYWx5c2lzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/thermostat-analysis/thermostat-analysis.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/thermostat-analysis/thermostat-analysis.page.ts ***!
  \**********************************************************************/
/*! exports provided: ThermostatAnalysisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermostatAnalysisPage", function() { return ThermostatAnalysisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");




let ThermostatAnalysisPage = class ThermostatAnalysisPage {
    constructor(navCtrl, ble) {
        this.navCtrl = navCtrl;
        this.ble = ble;
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        this.category = ev.detail.value;
        //console.log(ev);
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
    goToCompressorControl() {
        this.navCtrl.navigateRoot('/welcome/main/diagnosis-options/compressor');
    }
    goToFanControl() {
        this.navCtrl.navigateRoot('/welcome/main/diagnosis-options/fan-control');
    }
    powerOff() {
    }
};
ThermostatAnalysisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__["BLE"] }
];
ThermostatAnalysisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thermostat-analysis',
        template: __webpack_require__(/*! raw-loader!./thermostat-analysis.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/thermostat-analysis/thermostat-analysis.page.html"),
        styles: [__webpack_require__(/*! ./thermostat-analysis.page.scss */ "./src/app/main/thermostat-analysis/thermostat-analysis.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__["BLE"]])
], ThermostatAnalysisPage);



/***/ })

}]);
//# sourceMappingURL=main-thermostat-analysis-thermostat-analysis-module-es2015.js.map