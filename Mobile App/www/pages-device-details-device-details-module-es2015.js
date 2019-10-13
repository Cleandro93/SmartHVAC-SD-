(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-device-details-device-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/device-details/device-details.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/device-details/device-details.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button slot=\"start\" defaultHref=\"bluetooth\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>deviceDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=padding>\n  <ion-card>\n    <ion-card-header>\n      {{ device.name || \"Unnamed\"}}\n    </ion-card-header>\n    <ion-card-content>\n      ID: {{ device.id }}\n    </ion-card-content>\n  </ion-card>\n\n  <!--<ion-card>\n    <ion-card-header>\n      Services\n    </ion-card-header>\n    <ion-list>\n      <ion-item *ngFor=\"let service of device.services\">\n        <p>{{service}}</p>\n        </ion-item>\n    </ion-list>\n  </ion-card>-->\n\n  <ion-card>\n    <ion-card-header>\n      Notification data\n    </ion-card-header>\n    <ion-list>\n      <ion-item *ngFor=\"let data of sensorData\">\n        <p>{{data}}</p>\n        </ion-item>\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <p>{{ statusMessage }}</p>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/device-details/device-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/device-details/device-details.module.ts ***!
  \***************************************************************/
/*! exports provided: DeviceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetailsPageModule", function() { return DeviceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-details.page */ "./src/app/pages/device-details/device-details.page.ts");







const routes = [
    {
        path: '',
        component: _device_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceDetailsPage"]
    }
];
let DeviceDetailsPageModule = class DeviceDetailsPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/device-details/device-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/device-details/device-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmljZS1kZXRhaWxzL2RldmljZS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/device-details/device-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/device-details/device-details.page.ts ***!
  \*************************************************************/
/*! exports provided: DeviceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetailsPage", function() { return DeviceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");





let DeviceDetailsPage = class DeviceDetailsPage {
    constructor(route, router, ngZone, toastCtrl, ble, alertController) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.alertController = alertController;
        this.device = {};
    }
    ngOnInit() {
        //if (this.route.snapshot.data['special']){
        let passDevice = this.route.snapshot.data['special'];
        this.setStatus('Connecting to ' + passDevice.name || false);
        this.ble.connect(passDevice.id).subscribe(device => this.onConnected(passDevice), device => this.onDeviceDisconnected(passDevice));
        //}
    }
    onConnected(device) {
        //this.ngZone.run(() => {
        this.device = device;
        this.setStatus('Connected to ' + (device.name || device.id));
        this.ble.startNotification(this.device.id, "D0AF", "6B7B").subscribe(data => this.onSensorsData(data), error => this.presentAlert('Unexpected Error', error));
        //})
    }
    onSensorsData(buffer) {
        var data = new Uint8Array(buffer);
        console.log("***  DATA NOTIFICATION  *** ", data);
        this.ngZone.run(() => {
            this.sensorData = data;
        });
    }
    onDeviceDisconnected(device) {
        let toast = this.toastCtrl.create({
            message: 'The device unexpectedly disconnected.',
            duration: 3000,
            position: 'middle'
        });
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                subHeader: 'Subtitle',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    setStatus(message) {
        console.log(message);
        this.ngZone.run(() => {
            this.statusMessage = message;
        });
    }
    ionViewWillLeave() {
        this.ble.disconnect(this.device.id).then(() => console.log('Disconnected' + JSON.stringify(this.device)), () => console.log('ERROR disconnecting ' + JSON.stringify(this.device)));
    }
};
DeviceDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
DeviceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device-details',
        template: __webpack_require__(/*! raw-loader!./device-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/device-details/device-details.page.html"),
        styles: [__webpack_require__(/*! ./device-details.page.scss */ "./src/app/pages/device-details/device-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], DeviceDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-device-details-device-details-module-es2015.js.map