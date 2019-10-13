(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-display-live-data-live-data-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/data-display/live-data/live-data.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/data-display/live-data/live-data.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"tertiary\"></ion-menu-button>\n    </ion-buttons>\n    <div class=\"light\" slot=\"end\"></div>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"liveData\">\n    <ion-segment-button value=\"connection\">\n      <ion-label>BLE Connection</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"liveData\">\n      <ion-label>Live Data</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"thermostat\">\n      <ion-label>Thermostat</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"test\">\n      <ion-label>Test</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <h4>Temperature & Humidity</h4>\n        <div class=\"readerLeft\" >\n          <p><b>Cabin<br>Temperature</b>\n          </p>\n        </div>\n        <div class=\"readerRight\" >\n          <p><b>Cabin<br>Humidity</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <!-- More Data-->\n        <br>\n        <div class=\"readerLeft\" >\n          <p><b>Compressor<br>Temperature</b>\n          </p>\n        </div>\n        <div class=\"readerRightTemp\" >\n          <p><b>Expasion<br>Temperature</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <!-- More Data-->\n        <div class=\"readerMiddle\" >\n          <p><b>Evaporator<br>Temperature</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n\n        <h4>Power</h4>\n        <div class=\"readerTripleLeft\" >\n          <p><b>Compressor<br>Voltage</b>\n          </p>\n        </div>\n        <div class=\"readerTripleRight\" >\n          <p><b>Fan High<br>Voltage</b>\n          </p>\n        </div>\n        <div class=\"readerTripleMiddle\" >\n          <p><b>Fan Low<br>Voltage</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <!-- More Data-->\n        <div class=\"readerTripleLeft\" >\n          <p><b>Compressor<br>Current</b>\n          </p>\n        </div>\n        <div class=\"readerTripleRight\" >\n          <p><b>Fan High<br>Current</b>\n          </p>\n        </div>\n        <div class=\"readerTripleMiddle\" >\n          <p><b>Fan Low<br>Current</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <!-- More Data-->\n        <div class=\"readerTripleLeftFreq\" >\n          <p><b>Compressor<br>Frequency</b>\n          </p>\n        </div>\n        <div class=\"readerTripleRightFreq\" >\n          <p><b>Fan High<br>Frequency</b>\n          </p>\n        </div>\n        <div class=\"readerTripleMiddleFreq\" >\n          <p><b>Fan Low<br>Frequency</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        \n        <h4>Vibration</h4>\n        <div class=\"readerTripleLeftVib\" >\n          <p><b>X-axis</b>\n          </p>\n        </div>\n        <div class=\"readerTripleRightVib\" >\n          <p><b>Y-axis</b>\n          </p>\n        </div>\n        <div class=\"readerTripleMiddleVib\" >\n          <p><b>Z-axis</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempRecentStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getTempDailyStatus() }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/data-display/live-data/live-data.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/data-display/live-data/live-data.module.ts ***!
  \******************************************************************/
/*! exports provided: LiveDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveDataPageModule", function() { return LiveDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _live_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./live-data.page */ "./src/app/pages/data-display/live-data/live-data.page.ts");







var routes = [
    {
        path: '',
        component: _live_data_page__WEBPACK_IMPORTED_MODULE_6__["LiveDataPage"],
    }
];
var LiveDataPageModule = /** @class */ (function () {
    function LiveDataPageModule() {
    }
    LiveDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_live_data_page__WEBPACK_IMPORTED_MODULE_6__["LiveDataPage"]]
        })
    ], LiveDataPageModule);
    return LiveDataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/data-display/live-data/live-data.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/data-display/live-data/live-data.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGEtZGlzcGxheS9saXZlLWRhdGEvbGl2ZS1kYXRhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/data-display/live-data/live-data.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/data-display/live-data/live-data.page.ts ***!
  \****************************************************************/
/*! exports provided: LiveDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveDataPage", function() { return LiveDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");







var LiveDataPage = /** @class */ (function () {
    function LiveDataPage(navCtrl, router, 
    //
    toastCtrl, ble, ngZone, alertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.alertController = alertController;
        this.selectedPath = '';
        //
        this.devices = [];
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    LiveDataPage.prototype.ngOnInit = function () {
    };
    LiveDataPage.prototype.segmentChanged = function (ev) {
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
                this.navCtrl.navigateRoot('/tabs');
                break;
            }
        }
    };
    LiveDataPage.prototype.getTempRecentStatus = function () {
        var _this = this;
        this.ngZone.run(function () {
            console.log(_this.adv);
            // this.recentTemp = this.adv[4];
            _this.recentTemp = 0;
        });
        if (this.category === 'celcius') {
            return this.recentTemp;
        }
        else {
            return (this.recentTemp * 1.8) + 32;
        }
    };
    LiveDataPage.prototype.getTempDailyStatus = function () {
        this.dailyTemp = 24;
        if (this.category === 'celcius') {
            return this.dailyTemp;
        }
        else {
            return (this.dailyTemp * 1.8) + 32;
        }
    };
    LiveDataPage.prototype.getTempWeeklyStatus = function () {
        this.weeklyTemp = 27;
        if (this.category === 'celcius') {
            return this.weeklyTemp;
        }
        else {
            return (this.weeklyTemp * 1.8) + 32;
        }
    };
    LiveDataPage.prototype.getHumRecentStatus = function () {
        this.recentHum = 70;
        if (this.category === 'other') {
            return this.recentHum;
        }
        else {
            return (this.recentHum) + 12;
        }
    };
    LiveDataPage.prototype.getHumDailyStatus = function () {
        this.dailyHum = 85;
        if (this.category === 'other') {
            return this.dailyHum + 13;
        }
        else {
            return this.dailyHum;
        }
    };
    LiveDataPage.prototype.getHumWeeklyStatus = function () {
        this.weeklyHum = 79;
        return this.weeklyHum;
    };
    LiveDataPage.prototype.getPowRecentStatus = function () {
        this.recentPow = 70;
        if (this.category === 'kwh') {
            return this.recentPow;
        }
        else {
            return (this.recentPow) + 12;
        }
    };
    LiveDataPage.prototype.getPowDailyStatus = function () {
        this.dailyPow = 85;
        if (this.category === 'kwh') {
            return this.dailyPow + 13;
        }
        else {
            return this.dailyPow;
        }
    };
    LiveDataPage.prototype.getPowWeeklyStatus = function () {
        this.weeklyPow = 73;
        return this.weeklyPow;
    };
    LiveDataPage.prototype.getCurRecentStatus = function () {
        this.recentCur = 3;
        if (this.category === 'A') {
            return this.recentCur;
        }
        else {
            return (this.recentCur) / 1000;
        }
    };
    LiveDataPage.prototype.getCurDailyStatus = function () {
        this.dailyCur = 2.5;
        if (this.category === 'A') {
            return this.dailyCur;
        }
        else {
            return this.dailyCur / 1000;
        }
    };
    LiveDataPage.prototype.getCurWeeklyStatus = function () {
        this.weeklyCur = 2;
        if (this.category === 'A') {
            return this.weeklyCur;
        }
        else {
            return this.weeklyCur / 1000;
        }
    };
    LiveDataPage.prototype.getVolRecentStatus = function () {
        this.recentVol = 15;
        if (this.category === 'V') {
            return this.recentVol;
        }
        else {
            return (this.recentVol) / 1000;
        }
    };
    LiveDataPage.prototype.getVolDailyStatus = function () {
        this.dailyVol = 11;
        if (this.category === 'V') {
            return this.dailyVol;
        }
        else {
            return this.dailyVol / 1000;
        }
    };
    LiveDataPage.prototype.getVolWeeklyStatus = function () {
        this.weeklyVol = 9.6;
        if (this.category === 'V') {
            return this.weeklyVol;
        }
        else {
            return this.weeklyVol / 1000;
        }
    };
    LiveDataPage.prototype.goToTemperatureAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/ac-analysis');
    };
    LiveDataPage.prototype.goToHumidityAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/humidity-analysis');
    };
    LiveDataPage.prototype.goToVibrationAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/vibration-analysis');
    };
    LiveDataPage.prototype.goToPowerConAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/power-consumption-analysis');
    };
    LiveDataPage.prototype.goToCurrentAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/current-analysis');
    };
    LiveDataPage.prototype.goToVoltageAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/voltage-analysis');
    };
    LiveDataPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    LiveDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live-data',
            template: __webpack_require__(/*! raw-loader!./live-data.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/data-display/live-data/live-data.page.html"),
            styles: [__webpack_require__(/*! ./live-data.page.scss */ "./src/app/pages/data-display/live-data/live-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], LiveDataPage);
    return LiveDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=data-display-live-data-live-data-module-es5.js.map