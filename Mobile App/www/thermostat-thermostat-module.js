(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thermostat-thermostat-module"],{

/***/ "./src/app/thermostat/thermostat.module.ts":
/*!*************************************************!*\
  !*** ./src/app/thermostat/thermostat.module.ts ***!
  \*************************************************/
/*! exports provided: ThermostatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermostatPageModule", function() { return ThermostatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thermostat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thermostat.page */ "./src/app/thermostat/thermostat.page.ts");







var routes = [
    {
        path: '',
        component: _thermostat_page__WEBPACK_IMPORTED_MODULE_6__["ThermostatPage"]
    }
];
var ThermostatPageModule = /** @class */ (function () {
    function ThermostatPageModule() {
    }
    ThermostatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_thermostat_page__WEBPACK_IMPORTED_MODULE_6__["ThermostatPage"]]
        })
    ], ThermostatPageModule);
    return ThermostatPageModule;
}());



/***/ }),

/***/ "./src/app/thermostat/thermostat.page.html":
/*!*************************************************!*\
  !*** ./src/app/thermostat/thermostat.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"tertiary\"></ion-menu-button>\n    </ion-buttons>\n    <!-- <div class=\"light\" slot=\"end\"></div> -->\n  </ion-toolbar>\n  <!--\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"thermostat\">\n    <ion-segment-button value=\"connection\">\n      <ion-label>Connection</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"liveData\">\n      <ion-label>Live Data</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"thermostat\">\n      <ion-label>Thermostat</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"test\">\n      <ion-label>Test</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  -->\n</ion-header>\n  \n<ion-content>\n  <br>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <!--\n        <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"fahrenheit\">\n          <ion-segment-button value=\"fahrenheit\">\n            <ion-label>Fahrenheit</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"celcius\">\n            <ion-label>Celcius</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n        -->\n\n        <h4>Current Temperature</h4><br>\n        <div class=\"sensorsDisplay\"><p>{{ getAmbTempStatus() }}</div><br>\n        <br>\n        <h4>Set Temperature To</h4><br>\n        <div class=\"thermostatButtonsUp\">\n          <ion-button shape=\"round\" size=\"large\" expland=\"block\" (click)=\"setTempDown()\">\n            <ion-icon name=\"arrow-dropdown\"></ion-icon>\n          </ion-button>\n        </div>\n        <div class=\"sensorsDisplayThermo\"><p>{{ getSetTemp() }}</div>\n        <div class=\"thermostatButtonsDown\">\n          <ion-button shape=\"round\" size=\"large\" expland=\"block\" class=\"shadow-red\" (click)=\"setTempUp()\">\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <h4>Fan</h4><br>\n        <!--\n        <div class=\"fanHighLabel\">\n            <p><b>High</b></p>\n        </div>\n        <ion-toggle class=\"fanToggle\" color=\"primary\"></ion-toggle>\n        <div class=\"fanLowLabel\">\n            <p><b>Low</b></p>\n        </div>\n        <br><br><br>\n        <ion-button color=\"tertiary\" shape=\"round\" size=\"large\" expland=\"block\" (click)=\"powerOff()\">\n          <ion-icon name=\"power\"></ion-icon>\n        </ion-button>\n        -->\n        <div class=\"fanLowLabel\">\n          <ion-list>\n            <ion-radio-group (ionChange)=\"fanSelectionChanged($event)\" allow-empty-selection = “true” color=\"primary\">\n              <ion-item>\n                <ion-label><b>Cool On</b></ion-label>\n                <ion-radio slot=\"start\" value=\"coolOn\" checked></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label><b>Cool Off</b></ion-label>\n                <ion-radio slot=\"start\" value=\"coolOff\" checked></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n            <br>\n\n            <ion-radio-group (ionChange)=\"fanSelectionChanged($event)\" allow-empty-selection = “true” color=\"primary\">\n              <ion-item>\n                <ion-label><b>Fan High</b></ion-label>\n                <ion-radio slot=\"start\" value=\"fanHigh\"></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label><b>Fan Low</b></ion-label>\n                <ion-radio slot=\"start\" value=\"fanLow\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n            <br>\n\n            <ion-radio-group (ionChange)=\"fanSelectionChanged($event)\" allow-empty-selection = “true” color=\"primary\">\n              <ion-item>\n                <ion-label><b>Power On</b></ion-label>\n                <ion-radio slot=\"start\" value=\"powerOn\"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label><b>Power Off</b></ion-label>\n                <ion-radio slot=\"start\" value=\"powerOff\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/thermostat/thermostat.page.scss":
/*!*************************************************!*\
  !*** ./src/app/thermostat/thermostat.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZXJtb3N0YXQvdGhlcm1vc3RhdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/thermostat/thermostat.page.ts":
/*!***********************************************!*\
  !*** ./src/app/thermostat/thermostat.page.ts ***!
  \***********************************************/
/*! exports provided: ThermostatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermostatPage", function() { return ThermostatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var ThermostatPage = /** @class */ (function () {
    function ThermostatPage(navCtrl, route, router, ngZone, toastCtrl, ble, alertController, storage) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.alertController = alertController;
        this.storage = storage;
        this.on = 1;
        this.off = 0;
        this.data = [0, 0, 0, 0, 0, 1, 0];
        this.prevData = [0, 0, 0, 0, 0, 0, 0];
    }
    ThermostatPage.prototype.ngOnInit = function () {
        var _this = this;
        // Or to get a key/value pair
        this.storage.get('bleDevice').then(function (val) {
            console.log('Your age is', val);
            var receivedObject = JSON.parse(val);
            _this.device = receivedObject;
            console.log('Received this Object: ' + _this.device);
            console.log('Type of OBJ is ' + typeof (_this.device));
            console.log('Device name passed is: ' + _this.device.name);
            _this.onRead(_this.device);
            console.log('Ambtemp is: ' + _this.ambTemp);
            _this.setToTemp = _this.ambTemp;
        });
        this.storage.get('ambTemp').then(function (val) {
            _this.ambTemp = val;
            _this.setToTemp = val;
            _this.data[4] = val;
            console.log('Value is: ' + val);
        });
        this.data[6] = 0;
        console.log('Initial Data is: ' + this.data);
        this.wait(200);
    };
    ThermostatPage.prototype.ionViewWillLeave = function () {
    };
    ThermostatPage.prototype.onRead = function (device) {
        var _this = this;
        // Update the UI with the current state of the switch characteristic
        this.ble.read(device.id, 'D0AF', '7B53').then(function (buffer) {
            var data = new Uint8Array(buffer);
            var lastToCopy = data.length - 1;
            _this.ngZone.run(function () {
                _this.ambTemp = data[4];
                console.log('switch characteristic ' + data[4]);
                console.log('Got ' + data);
                console.log('Set AmbTemp to: ' + _this.ambTemp);
            });
        });
    };
    ThermostatPage.prototype.onWrite = function () {
        var _this = this;
        console.log('onRead');
        var buffer = new Uint8Array(this.data).buffer;
        console.log('Data is: ' + this.data[0]);
        console.log('Type is: ' + typeof (buffer));
        console.log('The whole array is: ' + this.data);
        this.ble.write(this.device.id, 'D0AF', '7B53', buffer).then(function () { return _this.setStatus('Light is ' + (_this.data[0] ? 'on' : 'off')); }, function (e) { return _this.presentAlert('Unexpected Error', 'Error updating power switch'); });
    };
    ThermostatPage.prototype.getAmbTempStatus = function () {
        return this.ambTemp;
    };
    ThermostatPage.prototype.getSetTemp = function () {
        if (this.category === 'celcius') {
            return (this.setToTemp - 32) * (5 / 9);
        }
        else {
            return this.setToTemp - 64;
        }
    };
    ThermostatPage.prototype.presentAlert = function (header, message) {
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
    ThermostatPage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    ThermostatPage.prototype.setTempUp = function () {
        this.setToTemp += 1;
        this.data[3] = this.setToTemp;
        this.onWrite();
        this.onRead(this.device);
    };
    ThermostatPage.prototype.setTempDown = function () {
        this.setToTemp -= 1;
        this.data[3] = this.setToTemp;
        this.onWrite();
        this.onRead(this.device);
    };
    ThermostatPage.prototype.powerOff = function () {
    };
    ThermostatPage.prototype.wait = function (ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    };
    ThermostatPage.prototype.fanSelectionChanged = function (event) {
        this.fanSelection = event.detail.value;
        var last = this.data.length - 1;
        console.log('Event is: ' + event + '\n');
        console.log('Value is: ' + this.fanSelection);
        switch (this.fanSelection) {
            case 'coolOn':
                this.data[0] = this.on;
                console.log('Cool On data is: ' + this.data[0]);
                break;
            case 'coolOff':
                this.data[0] = this.off;
                break;
            case 'fanHigh':
                this.data[1] = this.off;
                this.data[2] = this.on;
                break;
            case 'fanLow':
                this.data[2] = this.off;
                this.data[1] = this.on;
                break;
            case 'powerOn':
                this.data[5] = this.on;
                break;
            case 'powerOff':
                // this.prevData = this.data.slice(0, last);
                this.data[5] = this.off;
                break;
            default:
                console.log('Error with the radio buttons\n');
        }
        this.onWrite();
        this.onRead(this.device);
    };
    ThermostatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thermostat',
            template: __webpack_require__(/*! ./thermostat.page.html */ "./src/app/thermostat/thermostat.page.html"),
            styles: [__webpack_require__(/*! ./thermostat.page.scss */ "./src/app/thermostat/thermostat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__["BLE"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], ThermostatPage);
    return ThermostatPage;
}());



/***/ })

}]);
//# sourceMappingURL=thermostat-thermostat-module.js.map