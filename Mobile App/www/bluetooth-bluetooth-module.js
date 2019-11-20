(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bluetooth-bluetooth-module"],{

/***/ "./src/app/bluetooth/bluetooth.module.ts":
/*!***********************************************!*\
  !*** ./src/app/bluetooth/bluetooth.module.ts ***!
  \***********************************************/
/*! exports provided: BluetoothPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPageModule", function() { return BluetoothPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bluetooth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bluetooth.page */ "./src/app/bluetooth/bluetooth.page.ts");







var routes = [
    {
        path: '',
        component: _bluetooth_page__WEBPACK_IMPORTED_MODULE_6__["BluetoothPage"]
    }
];
var BluetoothPageModule = /** @class */ (function () {
    function BluetoothPageModule() {
    }
    BluetoothPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bluetooth_page__WEBPACK_IMPORTED_MODULE_6__["BluetoothPage"]]
        })
    ], BluetoothPageModule);
    return BluetoothPageModule;
}());



/***/ }),

/***/ "./src/app/bluetooth/bluetooth.page.html":
/*!***********************************************!*\
  !*** ./src/app/bluetooth/bluetooth.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"tertiary\"></ion-menu-button>\n    </ion-buttons>\n    <!-- <div class=\"light\" slot=\"end\"></div> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <br><br><br>\n        <img style=\"border:3px solid midnightblue ;\" src=\"../assets/rv1.png\" align=\"center\" width=\"250\" height=\"100\"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br><br>\n\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <ion-button shape=\"round\" size=\"large\" expland=\"block\" (click)=\"scan()\">Search</ion-button><br><br>\n        <ion-button color=\"tertiary\" shape=\"round\" size=\"large\" expland=\"block\" (click)=\"presentAlertConfirm()\">Status</ion-button>\n        <br><br><br>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n      <ion-row center>\n        <ion-col text-center>\n          <div class=bleDevices>\n            <ion-list>\n              <button ion-item *ngFor=\"let device of devices\" (click)=\"deviceSelected(device.id, device)\" >\n              <h2 > {{device.name || 'Unnamed' }} </h2>\n              <p>{{device.id}}</p>\n              </button>\n            </ion-list>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n<!--\n<ion-footer>\n  <ion-toolbar>\n    <p>{{ statusMessage }}</p>\n  </ion-toolbar>\n</ion-footer>\n-->\n"

/***/ }),

/***/ "./src/app/bluetooth/bluetooth.page.scss":
/*!***********************************************!*\
  !*** ./src/app/bluetooth/bluetooth.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JsdWV0b290aC9ibHVldG9vdGgucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bluetooth/bluetooth.page.ts":
/*!*********************************************!*\
  !*** ./src/app/bluetooth/bluetooth.page.ts ***!
  \*********************************************/
/*! exports provided: BluetoothPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPage", function() { return BluetoothPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ble.service */ "./src/app/services/ble.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var BluetoothPage = /** @class */ (function () {
    function BluetoothPage(navCtrl, router, toastCtrl, ble, ngZone, bleService, alertController, events, storage) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.bleService = bleService;
        this.alertController = alertController;
        this.events = events;
        this.storage = storage;
        this.devices = [];
    }
    BluetoothPage.prototype.ngOnInit = function () {
        console.log('ionViewDidEnter');
    };
    BluetoothPage.prototype.scan = function () {
        var _this = this;
        this.setStatus('Scanning for Bluetooth LE Devices');
        this.devices = []; // clear list
        this.ble.scan(['D0AF'], 5).subscribe(function (device) { return _this.onDeviceDiscovered(device); }, function (error) { return _this.scanError(error); });
        // setTimeout(this.setStatus.bind(this), 10000, 'Scan complete');
    };
    BluetoothPage.prototype.onDeviceDiscovered = function (device) {
        var _this = this;
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(function () {
            _this.devices.push(device);
            var mfgData = new Uint8Array(device.advertising.kCBAdvDataManufacturerData);
            _this.adv = new Uint8Array(device.advertising.kCBAdvDataManufacturerData);
            console.log(' Name is ' + device.name + ' Manufacturer Data is', mfgData);
        });
    };
    // If location permission is denied, you'll end up here
    BluetoothPage.prototype.scanError = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setStatus('Error ' + error);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Error scanning for Bluetooth low energy devices',
                                position: 'middle',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BluetoothPage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    BluetoothPage.prototype.deviceSelected = function (id, device) {
        console.log(JSON.stringify(device) + ' selected');
        this.bleService.setDevice(device);
        this.ble.stopScan();
        this.router.navigateByUrl('/device-details/' + id);
    };
    BluetoothPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'SmartRVAC Status',
                            message: this.statusMessage,
                            buttons: [
                                {
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BluetoothPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bluetooth',
            template: __webpack_require__(/*! ./bluetooth.page.html */ "./src/app/bluetooth/bluetooth.page.html"),
            styles: [__webpack_require__(/*! ./bluetooth.page.scss */ "./src/app/bluetooth/bluetooth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_ble_service__WEBPACK_IMPORTED_MODULE_5__["BleService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], BluetoothPage);
    return BluetoothPage;
}());



/***/ })

}]);
//# sourceMappingURL=bluetooth-bluetooth-module.js.map