(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bluetooth-bluetooth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bluetooth/bluetooth.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bluetooth/bluetooth.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button slot=\"start\" defaultHref=\"main\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Bluetooth</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button slot=\"end\" (click)=\"scan()\">Scan</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--  These -->\n  <ion-list>\n    <button ion-item *ngFor=\"let device of devices; id as i\" (click)=\"deviceSelected(id, device)\" >\n    <h2>{{device.name || 'Unnamed' }}</h2>\n    <p>{{device.id}}</p>\n    <p>RSSI: {{device.rssi}}</p>\n    <p> ADV: {{device.advertising.kCBAdvDataManufacturerData}}</p>\n    <p *ngFor=\"let data of adv\"> {{data}}</p>\n    </button>\n   </ion-list>\n  \n  <!--  These \n  <div class=\"ion-padding\">\n    <ion-button (click)=\"presentAlertConfirm()\">Confirm</ion-button>\n  </div>\n  -->\n  \n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <p>{{ statusMessage }}</p>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.module.ts ***!
  \*****************************************************/
/*! exports provided: BluetoothPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPageModule", function() { return BluetoothPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bluetooth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bluetooth.page */ "./src/app/pages/bluetooth/bluetooth.page.ts");







const routes = [
    {
        path: '',
        component: _bluetooth_page__WEBPACK_IMPORTED_MODULE_6__["BluetoothPage"]
    }
];
let BluetoothPageModule = class BluetoothPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsdWV0b290aC9ibHVldG9vdGgucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.page.ts ***!
  \***************************************************/
/*! exports provided: BluetoothPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPage", function() { return BluetoothPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ble.service */ "./src/app/pages/services/ble.service.ts");







let BluetoothPage = class BluetoothPage {
    constructor(router, toastCtrl, ble, ngZone, bleService, alertController) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.bleService = bleService;
        this.alertController = alertController;
        this.devices = [];
    }
    ngOnInit() {
        console.log('ionViewDidEnter');
        this.scan();
    }
    /*ionViewDidEnter() {
      console.log('ionViewDidEnter');
      this.scan();
    }*/
    scan() {
        this.setStatus('Scanning for  SmartHVAC Devices');
        this.devices = []; // clear list
        this.ble.scan(['D0AF'], 10).subscribe(device => this.onDeviceDiscovered(device), error => this.scanError(error));
        setTimeout(this.setStatus.bind(this), 10000, 'Scan complete');
    }
    onDeviceDiscovered(device) {
        // console.log('Discovered ' + JSON.stringify(device, null, 2));
        // this.presentAlertConfirm('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(() => {
            console.log(' Name is ' + device.name);
            // if (device.name.includes("RVACSD ")) {
            this.devices.push(device);
            const mfgData = new Uint8Array(device.advertising.kCBAdvDataManufacturerData);
            this.adv = new Uint8Array(device.advertising.kCBAdvDataManufacturerData);
            console.log(' Name is ' + device.name + ' Manufacturer Data is', mfgData);
            // } else {
            console.log('Cannot Put\n');
            // }
        });
    }
    // If location permission is denied, you'll end up here
    scanError(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.setStatus('Error ' + error);
            const toast = yield this.toastCtrl.create({
                message: 'Cannot Find SmartHAC Device',
                position: 'middle',
                duration: 20000
            });
            toast.present();
        });
    }
    setStatus(message) {
        console.log(message);
        this.ngZone.run(() => {
            this.statusMessage = message;
        });
    }
    deviceSelected(id, device) {
        console.log(JSON.stringify(device) + ' selected');
        this.bleService.setDevice(device);
        this.router.navigateByUrl('/device-details' + id);
    }
    showToast(msj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msj,
                duration: 1000
            });
            yield toast.present();
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '',
                message: '',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            //for (let i = 0; i < this.devices.length; i ++) {
            /*for (const device of this.devices) {
              alert.message.concat('\n' + (device.name || 'Unnamed') );
            }
            */
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
};
BluetoothPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _services_ble_service__WEBPACK_IMPORTED_MODULE_5__["BleService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
BluetoothPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bluetooth',
        template: __webpack_require__(/*! raw-loader!./bluetooth.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bluetooth/bluetooth.page.html"),
        styles: [__webpack_require__(/*! ./bluetooth.page.scss */ "./src/app/pages/bluetooth/bluetooth.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _services_ble_service__WEBPACK_IMPORTED_MODULE_5__["BleService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], BluetoothPage);



/***/ })

}]);
//# sourceMappingURL=pages-bluetooth-bluetooth-module-es2015.js.map