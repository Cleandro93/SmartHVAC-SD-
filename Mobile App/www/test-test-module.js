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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"tertiary\"></ion-menu-button>\n    </ion-buttons>\n    <!-- <div class=\"light\" slot=\"end\"></div> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <br><br><br><br><br>\n    <div class=\"signalStatus\">\n        <div id=\"rValue\"><p>R</p></div><br><br><br>\n        <div id=\"yValue\"><p>Y</p></div><br><br><br>\n        <div id=\"ghValue\"><p>GH</p></div><br><br><br>\n        <div id=\"glValue\"><p>GL</p></div><br><br><br>\n        <div id=\"wValue\"><p>W</p></div><br><br><br>\n        <div id=\"bValue\"><p>B</p></div>\n    </div>\n    <div class=\"signalControl\">\n        <ion-toggle class=\"signalsToggles\" color=\"primary\" [(ngModel)]=\"rToogle\" (ionChange)=\"signalLineChanged()\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n        <ion-toggle class=\"signalsToggles\" color=\"primary\"></ion-toggle><br><br><br>\n    </div>\n\n</ion-content>\n"

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
        this.data = [0, 1, 1, 1, 0, 0];
        this.on = 0;
        this.off = 1;
        this.rToogle = true;
        // Test data
        this.testData = [1, 0, 1, 1, 0, 0, 0, 1];
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    TestPage.prototype.ngOnInit = function () {
        /*
        this.storage.get('bleDevice').then((val) => {
          console.log('Your age is', val);
          let receivedObject = JSON.parse(val);
          this.device = receivedObject;
          console.log('Received this Object: ' + this.device);
          console.log('Type of OBJ is ' + typeof(this.device));
          console.log('Device name passed is: ' + this.device.name);
          this.onRead(this.device);
        });
        */
        this.testing(this.data);
        this.rToogle = (this.data[0] === this.on) ? true : false;
    };
    TestPage.prototype.onRead = function (device) {
        var _this = this;
        // Update the UI with the current state of the switch characteristic
        this.ble.read(device.id, 'D0AF', '7B53').then(function (buffer) {
            var data = new Uint8Array(buffer);
            var len = data.length;
            _this.ngZone.run(function () {
                for (var index = 0; index < len; index++) {
                    console.log("Did index: " + index);
                    _this.getThermStatus(index, data[index]);
                }
            });
        });
    };
    TestPage.prototype.testing = function (data) {
        console.log('Data is sent now: ' + this.data);
        var len = data.length;
        console.log('value is: ');
        for (var index = 0; index < len; index++) {
            // this.wait(500);
            // console.log('Index is: ' + index);
            this.getThermStatus(index, data[index]);
        }
    };
    TestPage.prototype.getThermStatus = function (index, value) {
        switch (index) {
            case 0:
                this.changeColor('rValue', value);
                break;
            case 1:
                this.changeColor('yValue', value);
                break;
            case 2:
                this.changeColor('ghValue', value);
                break;
            case 3:
                this.changeColor('glValue', value);
                break;
            case 4:
                this.changeColor('wValue', value);
                break;
            case 5:
                this.changeColor('bValue', value);
                break;
            default:
                console.log('value is: ' + value);
                console.log('Error parsing the control lines status\n');
        }
    };
    TestPage.prototype.changeColor = function (id, value) {
        console.log('Changed rToggle 1');
        var div = document.getElementById(id);
        console.log('Changed rToggle 1 and id: ' + id);
        if (value === this.on) {
            div.setAttribute('id', 'onDiv');
            console.log('Changed rToggle on');
        }
        else if (value === this.off) {
            div.setAttribute('id', 'offDiv');
            console.log('Changed rToggle off');
        }
    };
    TestPage.prototype.signalLineChanged = function () {
        console.log('Changed rToggle');
        console.log('The value of rToggle is: ' + this.rToogle);
        if (this.rToogle) {
            console.log('It is True');
            this.data[0] = this.on;
            this.changeColor('rValue', this.data[0]);
        }
        else {
            console.log('It is False');
            this.data[0] = this.off;
            this.changeColor('rValue', this.data[0]);
        }
        console.log('Data is now: ' + this.data);
        // this.wait(1500);
        // this.testing(this.data);
        // this.getThermStatus(0, this.data[0]);
    };
    TestPage.prototype.onWrite = function () {
        console.log('onRead');
        var buffer = new Uint8Array(this.data).buffer;
        console.log('Data is: ' + this.data[0]);
        console.log('Type is: ' + typeof (buffer));
        console.log('The whole array is: ' + this.data);
        this.ble.write(this.device.id, 'D0AF', '7B53', buffer).then(
        // () => this.setStatus('Light is ' + (this.data[0] ? 'on' : 'off')),
        // e => this.presentAlert('Unexpected Error', 'Error updating power switch')
        );
    };
    TestPage.prototype.wait = function (ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
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