(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-thermostat-thermostat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/thermostat/thermostat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/thermostat/thermostat.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"tertiary\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"thermostat\">\n      <ion-segment-button value=\"connection\">\n        <ion-label>BLE Connection</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"liveData\">\n        <ion-label>Live Data</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"thermostat\">\n        <ion-label>Thermostat</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"test\">\n        <ion-label>Test</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-header>\n  \n<ion-content>\n  <br>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"fahrenheit\">\n          <ion-segment-button value=\"fahrenheit\">\n            <ion-label>Fahrenheit</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"celcius\">\n            <ion-label>Celcius</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n        <h4>Current Temperature</h4><br>\n        <div class=\"sensorsDisplay\"><p>{{ getAmbTempStatus() }}</div><br>\n        <br>\n        <h4>Set Temperature To</h4><br>\n        <div class=\"thermostatButtonsUp\">\n          <ion-button shape=\"round\" size=\"large\" expland=\"block\" class=\"shadow-red\" (click)=\"setTempUp()\">\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\n          </ion-button>\n        </div>\n        <div class=\"sensorsDisplayThermo\"><p>{{ getSetTemp() }}</div>\n        <div class=\"thermostatButtonsDown\">\n          <ion-button shape=\"round\" size=\"large\" expland=\"block\" (click)=\"setTempDown()\">\n            <ion-icon name=\"arrow-dropdown\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <h4>Fan</h4><br>\n        <div class=\"fanHighLabel\">\n            <p><b>High</b></p>\n        </div>\n        <ion-toggle class=\"fanToggle\" color=\"primary\"></ion-toggle>\n        <div class=\"fanLowLabel\">\n            <p><b>Low</b></p>\n        </div>\n        <br><br><br>\n        <ion-button color=\"tertiary\" shape=\"round\" size=\"large\" expland=\"block\" (click)=\"powerOff()\">\n          <ion-icon name=\"power\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/thermostat/thermostat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/thermostat/thermostat.module.ts ***!
  \*******************************************************/
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
/* harmony import */ var _thermostat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thermostat.page */ "./src/app/pages/thermostat/thermostat.page.ts");







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

/***/ "./src/app/pages/thermostat/thermostat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/thermostat/thermostat.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RoZXJtb3N0YXQvdGhlcm1vc3RhdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/thermostat/thermostat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/thermostat/thermostat.page.ts ***!
  \*****************************************************/
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







var ThermostatPage = /** @class */ (function () {
    function ThermostatPage(navCtrl, route, router, ngZone, toastCtrl, ble, alertController) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.alertController = alertController;
        this.setToTemp = 72;
    }
    ThermostatPage.prototype.ngOnInit = function () {
    };
    ThermostatPage.prototype.segmentChanged = function (ev) {
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
                this.navCtrl.navigateRoot('/thermostat');
                break;
            }
        }
    };
    ThermostatPage.prototype.getAmbTempStatus = function () {
        //this.ambTemp = this.sensorData[0];
        this.ambTemp = 72;
        if (this.category === 'celcius') {
            return (this.ambTemp - 32) * (5 / 9);
        }
        else {
            return this.ambTemp;
        }
    };
    ThermostatPage.prototype.getSetTemp = function () {
        if (this.category === 'celcius') {
            return (this.setToTemp - 32) * (5 / 9);
        }
        else {
            return this.setToTemp;
        }
    };
    ThermostatPage.prototype.setTempUp = function () {
        // console.log("Tried to Increase Temp");
        this.setToTemp += 1;
    };
    ThermostatPage.prototype.setTempDown = function () {
        // console.log("Tried to Increase Temp");
        this.setToTemp -= 1;
    };
    ThermostatPage.prototype.powerOff = function () {
    };
    ThermostatPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__["BLE"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    ThermostatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thermostat',
            template: __webpack_require__(/*! raw-loader!./thermostat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/thermostat/thermostat.page.html"),
            styles: [__webpack_require__(/*! ./thermostat.page.scss */ "./src/app/pages/thermostat/thermostat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__["BLE"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ThermostatPage);
    return ThermostatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-thermostat-thermostat-module-es5.js.map