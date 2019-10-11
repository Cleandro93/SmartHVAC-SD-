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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ac_analysis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ac-analysis.page */ "./src/app/main/ac-analysis/ac-analysis.page.ts");







var routes = [
    {
        path: '',
        component: _ac_analysis_page__WEBPACK_IMPORTED_MODULE_6__["AcAnalysisPage"]
    }
];
var AcAnalysisPageModule = /** @class */ (function () {
    function AcAnalysisPageModule() {
    }
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
    return AcAnalysisPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ble.service */ "./src/app/main/services/ble.service.ts");








var AcAnalysisPage = /** @class */ (function () {
    function AcAnalysisPage(navCtrl, router, 
    //
    toastCtrl, ble, ngZone, bleService, alertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.bleService = bleService;
        this.alertController = alertController;
        this.selectedPath = '';
        //
        this.devices = [];
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    AcAnalysisPage.prototype.ngOnInit = function () {
    };
    AcAnalysisPage.prototype.segmentChanged = function (ev) {
        this.category = ev.detail.value;
        console.log(ev);
    };
    AcAnalysisPage.prototype.getTempRecentStatus = function () {
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
    AcAnalysisPage.prototype.getTempDailyStatus = function () {
        this.dailyTemp = 24;
        if (this.category === 'celcius') {
            return this.dailyTemp;
        }
        else {
            return (this.dailyTemp * 1.8) + 32;
        }
    };
    AcAnalysisPage.prototype.getTempWeeklyStatus = function () {
        this.weeklyTemp = 27;
        if (this.category === 'celcius') {
            return this.weeklyTemp;
        }
        else {
            return (this.weeklyTemp * 1.8) + 32;
        }
    };
    AcAnalysisPage.prototype.getHumRecentStatus = function () {
        this.recentHum = 70;
        if (this.category === 'other') {
            return this.recentHum;
        }
        else {
            return (this.recentHum) + 12;
        }
    };
    AcAnalysisPage.prototype.getHumDailyStatus = function () {
        this.dailyHum = 85;
        if (this.category === 'other') {
            return this.dailyHum + 13;
        }
        else {
            return this.dailyHum;
        }
    };
    AcAnalysisPage.prototype.getHumWeeklyStatus = function () {
        this.weeklyHum = 79;
        return this.weeklyHum;
    };
    AcAnalysisPage.prototype.getPowRecentStatus = function () {
        this.recentPow = 70;
        if (this.category === 'kwh') {
            return this.recentPow;
        }
        else {
            return (this.recentPow) + 12;
        }
    };
    AcAnalysisPage.prototype.getPowDailyStatus = function () {
        this.dailyPow = 85;
        if (this.category === 'kwh') {
            return this.dailyPow + 13;
        }
        else {
            return this.dailyPow;
        }
    };
    AcAnalysisPage.prototype.getPowWeeklyStatus = function () {
        this.weeklyPow = 73;
        return this.weeklyPow;
    };
    AcAnalysisPage.prototype.getCurRecentStatus = function () {
        this.recentCur = 3;
        if (this.category === 'A') {
            return this.recentCur;
        }
        else {
            return (this.recentCur) / 1000;
        }
    };
    AcAnalysisPage.prototype.getCurDailyStatus = function () {
        this.dailyCur = 2.5;
        if (this.category === 'A') {
            return this.dailyCur;
        }
        else {
            return this.dailyCur / 1000;
        }
    };
    AcAnalysisPage.prototype.getCurWeeklyStatus = function () {
        this.weeklyCur = 2;
        if (this.category === 'A') {
            return this.weeklyCur;
        }
        else {
            return this.weeklyCur / 1000;
        }
    };
    AcAnalysisPage.prototype.getVolRecentStatus = function () {
        this.recentVol = 15;
        if (this.category === 'V') {
            return this.recentVol;
        }
        else {
            return (this.recentVol) / 1000;
        }
    };
    AcAnalysisPage.prototype.getVolDailyStatus = function () {
        this.dailyVol = 11;
        if (this.category === 'V') {
            return this.dailyVol;
        }
        else {
            return this.dailyVol / 1000;
        }
    };
    AcAnalysisPage.prototype.getVolWeeklyStatus = function () {
        this.weeklyVol = 9.6;
        if (this.category === 'V') {
            return this.weeklyVol;
        }
        else {
            return this.weeklyVol / 1000;
        }
    };
    AcAnalysisPage.prototype.goToTemperatureAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/ac-analysis');
    };
    AcAnalysisPage.prototype.goToHumidityAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/humidity-analysis');
    };
    AcAnalysisPage.prototype.goToVibrationAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/vibration-analysis');
    };
    AcAnalysisPage.prototype.goToPowerConAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/power-consumption-analysis');
    };
    AcAnalysisPage.prototype.goToCurrentAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/current-analysis');
    };
    AcAnalysisPage.prototype.goToVoltageAnalysis = function () {
        console.log("Pressed voltage");
        this.navCtrl.navigateRoot('/voltage-analysis');
    };
    // To Erase Later
    AcAnalysisPage.prototype.scan = function () {
        var _this = this;
        this.setStatus('Scanning for  SmartHVAC Devices');
        this.devices = []; // clear list
        this.ble.scan(['D0AF'], 1000000000000).subscribe(function (device) { return _this.onDeviceDiscovered(device); }, function (error) { return _this.scanError(error); });
        setTimeout(this.setStatus.bind(this), 10000, 'Scan complete');
    };
    AcAnalysisPage.prototype.onDeviceDiscovered = function (device) {
        var _this = this;
        // console.log('Discovered ' + JSON.stringify(device, null, 2));
        // this.presentAlertConfirm('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(function () {
            console.log(' Name is ' + device.name);
            // if (device.name.includes("RVACSD ")) {
            _this.devices.push(device);
            var mfgData = new Uint8Array(device.advertising.kCBAdvDataManufacturerData);
            _this.adv = new Uint8Array(device.advertising.kCBAdvDataManufacturerData);
            console.log(' Name is ' + device.name + ' Manufacturer Data is', mfgData);
            // } else {
            console.log('Cannot Put\n');
            // }
        });
    };
    // If location permission is denied, you'll end up here
    AcAnalysisPage.prototype.scanError = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setStatus('Error ' + error);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Cannot Find SmartHAC Device',
                                position: 'middle',
                                duration: 20000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AcAnalysisPage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    AcAnalysisPage.prototype.deviceSelected = function (id, device) {
        console.log(JSON.stringify(device) + ' selected');
        this.bleService.setDevice(device);
        this.router.navigateByUrl('/device-details/' + id);
    };
    AcAnalysisPage.prototype.showToast = function (msj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msj,
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AcAnalysisPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services_ble_service__WEBPACK_IMPORTED_MODULE_5__["BleService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    AcAnalysisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ac-analysis',
            template: __webpack_require__(/*! raw-loader!./ac-analysis.page.html */ "./node_modules/raw-loader/index.js!./src/app/main/ac-analysis/ac-analysis.page.html"),
            styles: [__webpack_require__(/*! ./ac-analysis.page.scss */ "./src/app/main/ac-analysis/ac-analysis.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_ble_service__WEBPACK_IMPORTED_MODULE_5__["BleService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], AcAnalysisPage);
    return AcAnalysisPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-ac-analysis-ac-analysis-module-es5.js.map