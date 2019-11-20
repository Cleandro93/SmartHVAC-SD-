(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-details-device-details-module"],{

/***/ "./src/app/device-details/device-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/device-details/device-details.module.ts ***!
  \*********************************************************/
/*! exports provided: DeviceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetailsPageModule", function() { return DeviceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-details.page */ "./src/app/device-details/device-details.page.ts");







var routes = [
    {
        path: '',
        component: _device_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceDetailsPage"]
    }
];
var DeviceDetailsPageModule = /** @class */ (function () {
    function DeviceDetailsPageModule() {
    }
    DeviceDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_device_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceDetailsPage"]]
        })
    ], DeviceDetailsPageModule);
    return DeviceDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/device-details/device-details.page.html":
/*!*********************************************************!*\
  !*** ./src/app/device-details/device-details.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"tertiary\"></ion-menu-button>\n    </ion-buttons>\n    <!-- <div class=\"light\" slot=\"end\"></div> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <h4>Temperature & Humidity</h4>\n        <div class=\"readerLeft\" >\n          <p><b>Cabin<br>Temperature</b>\n          </p>\n        </div>\n        <div class=\"readerRight\" >\n          <p><b>Cabin<br>Humidity</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getCabinTempStatus() }}</div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"sensorsDisplay\"><p>{{ getCabinHumStatus() }}</div>\n        <!-- More Data-->\n        <br>\n        <div class=\"readerLeft\" >\n          <p><b>Compressor<br>Temperature</b>\n          </p>\n        </div>\n        <div class=\"readerRightTemp\" >\n          <p><b>Expasion<br>Temperature</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getCompressorTempStatus() }}</div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"sensorsDisplay\"><p>{{ getExpansionTempStatus() }}</div>\n        <!-- More Data-->\n        <div class=\"readerMiddle\" >\n          <p><b>Evaporator<br>Temperature</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getEvaporatorTempStatus() }}</div>\n\n        <h4>Power</h4>\n        <div class=\"readerTripleLeft\" >\n          <p><b>Compressor<br>Voltage</b>\n          </p>\n        </div>\n        <div class=\"readerTripleRight\" >\n          <p><b>Fan High<br>Voltage</b>\n          </p>\n        </div>\n        <div class=\"readerTripleMiddle\" >\n          <p><b>Fan Low<br>Voltage</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getCompressorVoltageStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getFanLowVoltageStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getFanHighVoltageStatus() }}</div>\n        <!-- More Data-->\n        <div class=\"readerTripleLeft\" >\n          <p><b>Compressor<br>Current</b>\n          </p>\n        </div>\n        <div class=\"readerTripleRight\" >\n          <p><b>Fan High<br>Current</b>\n          </p>\n        </div>\n        <div class=\"readerTripleMiddle\" >\n          <p><b>Fan Low<br>Current</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getCompressorCurrStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getFanLowCurrStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getFanHighCurrStatus() }}</div>\n        <!-- More Data-->\n        <div class=\"readerTripleLeftFreq\" >\n          <p><b>Compressor<br>Frequency</b>\n          </p>\n        </div>\n        <div class=\"readerTripleRightFreq\" >\n          <p><b>Fan High<br>Frequency</b>\n          </p>\n        </div>\n        <div class=\"readerTripleMiddleFreq\" >\n          <p><b>Fan Low<br>Frequency</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getCompressorFreqStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getFanLowFreqStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getFanHighFreqStatus() }}</div>\n        \n        <h4>Vibration</h4>\n        <div class=\"readerTripleLeftVib\" >\n          <p><b>X-axis</b>\n          </p>\n        </div>\n        <div class=\"readerTripleRightVib\" >\n          <p><b>Y-axis</b>\n          </p>\n        </div>\n        <div class=\"readerTripleMiddleVib\" >\n          <p><b>Z-axis</b>\n          </p>\n        </div>\n        <div class=\"sensorsDisplay\"><p>{{ getXAxisStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getYAxisStatus() }}</div>\n        <div class=\"sensorsDisplay\"><p>{{ getZAxisStatus() }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--\n  <ion-card>\n    <ion-card-header>\n      {{ device.name || \"Unnamed\"}}\n    </ion-card-header>\n    <ion-card-content>\n      ID: {{ device.id }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Notification data\n    </ion-card-header>\n    <ion-list>\n      <ion-item *ngFor=\"let data of sensorData\">\n        <p>{{data}}</p>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-footer>\n  <ion-toolbar>\n    <p>{{ statusMessage }}</p>\n  </ion-toolbar>\n</ion-footer>\n-->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/device-details/device-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/device-details/device-details.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1kZXRhaWxzL2RldmljZS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/device-details/device-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/device-details/device-details.page.ts ***!
  \*******************************************************/
/*! exports provided: DeviceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetailsPage", function() { return DeviceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var DeviceDetailsPage = /** @class */ (function () {
    function DeviceDetailsPage(navCtrl, route, router, ble, toastCtrl, ngZone, alertController, storage
    // private sqlite: SQLite
    ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.alertController = alertController;
        this.storage = storage;
        this.device = {};
        this.services = {};
        var passDevice = this.route.snapshot.data.special;
        this.setStatus('Connecting to ' + passDevice.name || false);
        this.ble.connect(passDevice.id).subscribe(function (device) { return _this.onConnected(passDevice); }, function (device) { return _this.presentAlert('Disconnected', 'The device unexpectedly disconnected.'); });
    }
    DeviceDetailsPage.prototype.ngOnInit = function () {
    };
    DeviceDetailsPage.prototype.onConnected = function (device) {
        var _this = this;
        this.device = device;
        this.setStatus('Connected to ' + (device.name || device.id));
        var dataString = JSON.stringify(device);
        console.log('\n\n\n\n\nDataString is: ' + dataString + '\n\n\n\n\n');
        this.storage.set('bleDevice', dataString);
        this.ble.startNotification(this.device.id, 'D0AF', '6B7B').subscribe(function (data) { _this.onSensorsData(data); }, function (error) { _this.presentAlert('Unexpected Error', error); });
    };
    DeviceDetailsPage.prototype.onSensorsData = function (buffer) {
        var _this = this;
        var data = new Uint8Array(buffer);
        this.ngZone.run(function () {
            _this.sensorData = data;
            _this.ambientTemp = _this.sensorData[0];
            _this.ambientHum = _this.sensorData[1];
            _this.compressorTemp = _this.sensorData[2];
            _this.expansionTemp = _this.sensorData[3];
            _this.evaporatorTemp = _this.sensorData[4];
            _this.compressorVolt = _this.sensorData[5];
            _this.fanLowVolt = _this.sensorData[6];
            _this.fanHighVolt = _this.sensorData[7];
            _this.compressorCurr = _this.sensorData[8];
            _this.fanLowCurr = _this.sensorData[9];
            _this.fanHighCurr = _this.sensorData[10];
            _this.compressorFreq = _this.sensorData[11];
            _this.fanLowFreq = _this.sensorData[12];
            _this.fanHighFreq = _this.sensorData[13];
            _this.xAxis = _this.sensorData[14];
            _this.yAxis = _this.sensorData[15];
            _this.zAxis = _this.sensorData[16];
            _this.storage.set('ambTemp', _this.ambientTemp);
            console.log('Reading: ' + _this.sensorData);
        });
    };
    DeviceDetailsPage.prototype.onDeviceDisconnected = function (device) {
        var toast = this.toastCtrl.create({
            message: 'The device unexpectedly disconnected.',
            duration: 3000,
            position: 'middle'
        });
    };
    DeviceDetailsPage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            subHeader: 'Subtitle',
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeviceDetailsPage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    DeviceDetailsPage.prototype.ionViewWillLeave = function () {
        console.log("********** Letf the Page ************");
        this.ble.stopNotification(this.device.id, 'D0AF', '6B7B');
    };
    // Presenting the sensing data to the user;
    DeviceDetailsPage.prototype.getCabinTempStatus = function () {
        return this.ambientTemp - 64;
        /*
        if (this.category === 'celcius') {
          return this.recentTemp;
        } else {
          return (this.recentTemp * 1.8) + 32;
        }
        */
    };
    DeviceDetailsPage.prototype.getCabinHumStatus = function () {
        return this.ambientHum;
    };
    DeviceDetailsPage.prototype.getCompressorTempStatus = function () {
        return this.compressorTemp - 64;
    };
    DeviceDetailsPage.prototype.getExpansionTempStatus = function () {
        return this.expansionTemp - 64;
    };
    DeviceDetailsPage.prototype.getEvaporatorTempStatus = function () {
        return this.evaporatorTemp - 64;
    };
    DeviceDetailsPage.prototype.getCompressorVoltageStatus = function () {
        return this.compressorVolt;
    };
    DeviceDetailsPage.prototype.getFanLowVoltageStatus = function () {
        return this.fanLowVolt;
    };
    DeviceDetailsPage.prototype.getFanHighVoltageStatus = function () {
        return this.fanHighVolt;
    };
    DeviceDetailsPage.prototype.getCompressorCurrStatus = function () {
        return this.compressorCurr;
    };
    DeviceDetailsPage.prototype.getFanLowCurrStatus = function () {
        return this.fanLowCurr;
    };
    DeviceDetailsPage.prototype.getFanHighCurrStatus = function () {
        return this.fanHighCurr;
    };
    DeviceDetailsPage.prototype.getCompressorFreqStatus = function () {
        return this.compressorFreq;
    };
    DeviceDetailsPage.prototype.getFanLowFreqStatus = function () {
        return this.fanLowFreq;
    };
    DeviceDetailsPage.prototype.getFanHighFreqStatus = function () {
        return this.fanHighFreq;
    };
    DeviceDetailsPage.prototype.getXAxisStatus = function () {
        return this.xAxis;
    };
    DeviceDetailsPage.prototype.getYAxisStatus = function () {
        return this.yAxis;
    };
    DeviceDetailsPage.prototype.getZAxisStatus = function () {
        return this.zAxis;
    };
    DeviceDetailsPage.prototype.goToTemperatureAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/ac-analysis');
    };
    DeviceDetailsPage.prototype.goToHumidityAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/humidity-analysis');
    };
    DeviceDetailsPage.prototype.goToVibrationAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/vibration-analysis');
    };
    DeviceDetailsPage.prototype.goToPowerConAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/power-consumption-analysis');
    };
    DeviceDetailsPage.prototype.goToCurrentAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/current-analysis');
    };
    DeviceDetailsPage.prototype.goToVoltageAnalysis = function () {
        console.log('Pressed voltage');
        this.navCtrl.navigateRoot('/voltage-analysis');
    };
    DeviceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-details',
            template: __webpack_require__(/*! ./device-details.page.html */ "./src/app/device-details/device-details.page.html"),
            styles: [__webpack_require__(/*! ./device-details.page.scss */ "./src/app/device-details/device-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
            // private sqlite: SQLite
        ])
    ], DeviceDetailsPage);
    return DeviceDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=device-details-device-details-module.js.map