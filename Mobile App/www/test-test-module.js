(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/test/test.page.ts");







var routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]
    }
];
var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
        })
    ], TestPageModule);
    return TestPageModule;
}());



/***/ }),

/***/ "./src/app/test/test.page.html":
/*!*************************************!*\
  !*** ./src/app/test/test.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"tertiary\"></ion-menu-button>\n    </ion-buttons>\n    <!-- <div class=\"light\" slot=\"end\"></div> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <br><br><br><br><br><br><br><br><br><br><br><br>\n    <div class=\"signalStatus\">\n        <div class=\"rValue\"><p class='rP'>R</p></div><br><br><br>\n        <div class=\"yValue\"><p class='yP'>Y</p></div><br><br><br>\n        <div class=\"ghValue\"><p class='ghP'>GH</div><br><br><br>\n        <div class=\"glValue\"><p class='glP'>GL</p></div><br><br><br>\n    </div>\n    <div class=\"signalControl\">\n        <ion-toggle class=\"signalsToggles\" color=\"primary\" [(ngModel)]=\"rToogle\" (ionChange)=\"rSignalLineChanged()\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\" [(ngModel)]=\"yToogle\" (ionChange)=\"ySignalLineChanged()\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\" [(ngModel)]=\"ghToogle\" (ionChange)=\"ghSignalLineChanged()\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\" [(ngModel)]=\"glToogle\" (ionChange)=\"glSignalLineChanged()\"></ion-toggle><br><br><br>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/test/test.page.scss":
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/test/test.page.ts":
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, router, ble, storage, alertController, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.router = router;
        this.ble = ble;
        this.storage = storage;
        this.alertController = alertController;
        this.ngZone = ngZone;
        this.selectedPath = '';
        this.initData = [0, 0, 0, 0, 0, 0, 0];
        this.data = [0, 0, 0, 0, 0, 0, 0];
        this.on = 1;
        this.off = 0;
        this.rToogle = true;
        this.yToogle = true;
        this.ghToogle = true;
        this.glToogle = true;
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    TestPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('bleDevice').then(function (val) {
            console.log('Your age is', val);
            var receivedObject = JSON.parse(val);
            _this.device = receivedObject;
            console.log('Received this Object: ' + _this.device);
            console.log('Type of OBJ is ' + typeof (_this.device));
            console.log('Device name passed is: ' + _this.device.name);
            _this.onInitRead(_this.device);
        });
        this.signalLineChanged(this.data);
    };
    TestPage.prototype.getCurrACStatus = function (data) {
        this.yToogle = (data[0] === this.on) ? true : false;
        this.glToogle = (data[1] === this.on) ? true : false;
        this.ghToogle = (data[2] === this.on) ? true : false;
        this.rToogle = (data[5] === this.on) ? true : false;
    };
    TestPage.prototype.onInitRead = function (device) {
        var _this = this;
        // Update the UI with the current state of the switch characteristic
        this.ble.read(device.id, 'D0AF', '7B53').then(function (buffer) {
            var data = new Uint8Array(buffer);
            var len = data.length;
            _this.ngZone.run(function () {
                for (var index = 0; index < len; index++) {
                    _this.data[index] = data[index];
                    _this.initData[index] = data[index];
                }
                _this.signalLineChanged(data);
            });
        });
    };
    TestPage.prototype.onRead = function (device) {
        var _this = this;
        // Update the UI with the current state of the switch characteristic
        this.ble.read(device.id, 'D0AF', '7B53').then(function (buffer) {
            var data = new Uint8Array(buffer);
            var len = data.length;
            _this.ngZone.run(function () {
                /* for (let index = 0; index < len; index++) {
                  console.log('Did index: ' + index);
                  this.getThermStatus(index, data[index]);
                } */
                console.log('Just Read: ' + data);
                _this.signalLineChanged(data);
                _this.getCurrACStatus(data);
            });
        });
    };
    TestPage.prototype.onWrite = function (data) {
        var _this = this;
        console.log('onRead');
        var buffer = new Uint8Array(data).buffer;
        console.log('Data is: ' + data[0]);
        console.log('Type is: ' + typeof (buffer));
        console.log('The whole array is: ' + this.data);
        this.ble.write(this.device.id, 'D0AF', '7B53', buffer).then(function () { return _this.setStatus('Light is ' + (data[0] ? 'on' : 'off')); }, function (e) { return _this.presentAlert('Unexpected Error', 'Error updating power switch'); });
    };
    TestPage.prototype.presentAlert = function (header, message) {
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
    TestPage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    TestPage.prototype.signalLineChanged = function (data) {
        this.getCurrACStatus(data);
        console.log('Data is sent now: ' + this.data);
        var len = data.length;
        console.log('value is: ');
        for (var index = 0; index < len; index++) {
            this.getThermStatus(index, data[index]);
        }
    };
    TestPage.prototype.getThermStatus = function (index, value) {
        switch (index) {
            case 5:
                this.changeColor('rValue', 'rP', value);
                break;
            case 0:
                this.changeColor('yValue', 'yP', value);
                break;
            case 1:
                this.changeColor('ghValue', 'ghP', value);
                break;
            case 2:
                this.changeColor('glValue', 'glP', value);
                break;
            default:
                console.log('Error parsing the control lines status\n');
        }
    };
    TestPage.prototype.changeColor = function (className, pClassName, value) {
        var div = document.getElementsByClassName(className)[0];
        var p = div.getElementsByClassName(pClassName)[0];
        if (value === this.on) {
            // tslint:disable-next-line: max-line-length
            var onAttributes = 'position: relative; width: 40px; height: 33px; border: 5px solid #06367e; font-size: 20px; text-align:center; display: inline-block; background-color: #c0e3f7;';
            // tslint:disable-next-line: max-line-length
            var onPAttributes = 'margin: 0; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%); color: #06367e;';
            div.setAttribute('style', onAttributes);
            p.setAttribute('style', onPAttributes);
            console.log('Changed on');
        }
        else if (value === this.off) {
            // tslint:disable-next-line: max-line-length
            var offAttributes = 'position: relative; width: 40px; height: 33px; border: 5px solid #7e0606; font-size: 20px; text-align:center; display: inline-block; background-color: #c76767;';
            // tslint:disable-next-line: max-line-length
            var onPAttributes = 'margin: 0; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%); color: #550303;';
            p.setAttribute('style', onPAttributes);
            div.setAttribute('style', offAttributes);
        }
    };
    TestPage.prototype.rSignalLineChanged = function () {
        console.log('Changed rToggle');
        console.log('The value of rToggle is: ' + this.rToogle);
        if (this.rToogle) {
            console.log('It is True');
            this.data[5] = this.on;
        }
        else {
            console.log('It is False');
            this.data[5] = this.off;
            // this.signalLineChanged([0, 0, 0, 0, 0, 0, 0]);
        }
        console.log('Data is now: ' + this.data);
        // this.wait(2000);
        this.onWrite(this.data);
        this.onRead(this.device);
    };
    TestPage.prototype.ySignalLineChanged = function () {
        console.log('Changed yToggle');
        console.log('The value of yToggle is: ' + this.yToogle);
        if (this.yToogle) {
            console.log('It is True');
            this.data[0] = this.on;
        }
        else {
            console.log('It is False');
            this.data[0] = this.off;
        }
        console.log('Data is now: ' + this.data);
        this.onWrite(this.data);
        this.onRead(this.device);
    };
    TestPage.prototype.ghSignalLineChanged = function () {
        console.log('Changed ghToggle');
        console.log('The value of ghToggle is: ' + this.ghToogle);
        if (this.ghToogle) {
            console.log('It is True');
            this.data[1] = this.off;
            this.data[2] = this.on;
        }
        else {
            this.data[2] = this.off;
            this.data[1] = this.on;
        }
        console.log('Data is now: ' + this.data);
        this.onWrite(this.data);
        this.onRead(this.device);
    };
    TestPage.prototype.glSignalLineChanged = function () {
        console.log('Changed glToggle');
        console.log('The value of glToggle is: ' + this.glToogle);
        if (this.glToogle) {
            console.log('It is True');
            this.data[2] = this.off;
            this.data[1] = this.on;
        }
        else {
            console.log('It is False');
            this.data[1] = this.off;
            this.data[2] = this.on;
        }
        console.log('Data is now: ' + this.data);
        this.onWrite(this.data);
        this.onRead(this.device);
    };
    TestPage.prototype.wait = function (ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    };
    TestPage.prototype.ionViewWillLeave = function () {
        this.onWrite(this.initData);
    };
    TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.page.html */ "./src/app/test/test.page.html"),
            styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/test/test.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_4__["BLE"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], TestPage);
    return TestPage;
}());



/***/ })

}]);
//# sourceMappingURL=test-test-module.js.map