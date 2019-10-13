(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-device-information-device-information-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/device-information/device-information.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/device-information/device-information.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>DEVICE PROPERTIES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row center>\n      <ion-col text-center>\n        <form>\n          <br>\n          <h4>AC Class Model</h4>\n          <ion-item>\n            <ion-input type=\"text\" text-center oninput=\"handleFirstNameValue(event)\" placeholder=\"Ex. Class B\"></ion-input>\n          </ion-item>\n          <h4>Thermostat Model</h4>\n          <ion-item>\n            <ion-input type=\"text\" text-center placeholder=\"Ex. Class B\"></ion-input>\n          </ion-item>\n          <h4>BTU Capacity</h4>\n          <ion-item>\n            <ion-input type=\"text\" text-center id=\"input\" placeholder=\"Ex. 13500\"></ion-input>\n            <ion-label color=\"dark\">{{ nameUpdate }}</ion-label>\n          </ion-item>\n          <h4>Class Model</h4>\n          <ion-item>\n            <ion-input type=\"text\" text-center placeholder=\"Ex. Class B\"></ion-input>\n          </ion-item>\n          <h4>Square Footage</h4>\n          <ion-item>\n            <ion-input type=\"number\" text-center placeholder=\"Ex. 400\"></ion-input>\n          </ion-item>\n          <br>\n          <ion-button shape=\"round\" size=\"default\" expland=\"block\" type=\"submit\" (click)=\"saveButton()\">\n              <ion-icon slot=\"start\" name=\"save\"></ion-icon>Save\n          </ion-button>\n        </form>\n        <p align=\"center\">Or</p>\n        <ion-button shape=\"round\" size=\"default\" expland=\"block\" color=\"tertiary\" (click)=\"dismissButton()\">\n            <ion-icon slot=\"start\" name=\"close\"></ion-icon>Dismiss\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/device-information/device-information.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/device-information/device-information.module.ts ***!
  \***********************************************************************/
/*! exports provided: DeviceInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInformationPageModule", function() { return DeviceInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-information.page */ "./src/app/pages/device-information/device-information.page.ts");







var routes = [
    {
        path: '',
        component: _device_information_page__WEBPACK_IMPORTED_MODULE_6__["DeviceInformationPage"]
    }
];
var DeviceInformationPageModule = /** @class */ (function () {
    function DeviceInformationPageModule() {
    }
    DeviceInformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_device_information_page__WEBPACK_IMPORTED_MODULE_6__["DeviceInformationPage"]]
        })
    ], DeviceInformationPageModule);
    return DeviceInformationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/device-information/device-information.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/device-information/device-information.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmljZS1pbmZvcm1hdGlvbi9kZXZpY2UtaW5mb3JtYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/device-information/device-information.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/device-information/device-information.page.ts ***!
  \*********************************************************************/
/*! exports provided: DeviceInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInformationPage", function() { return DeviceInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var DeviceInformationPage = /** @class */ (function () {
    function DeviceInformationPage(navCtrl, alertController) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.firstName = '';
        this.name = '';
        this.nameUpdate = '';
    }
    DeviceInformationPage.prototype.ngOnInit = function () {
    };
    DeviceInformationPage.prototype.saveButton = function () {
        this.nameUpdate = this.name;
        console.log(this.firstName);
        //console.log(this.name);
    };
    DeviceInformationPage.prototype.dismissButton = function () {
        this.navCtrl.navigateRoot('/main');
    };
    DeviceInformationPage.prototype.handleFirstNameValue = function (event) {
        this.firstName = event.target.value;
    };
    DeviceInformationPage.prototype.handleLastNameValue = function (event) {
    };
    DeviceInformationPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    DeviceInformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-information',
            template: __webpack_require__(/*! raw-loader!./device-information.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/device-information/device-information.page.html"),
            styles: [__webpack_require__(/*! ./device-information.page.scss */ "./src/app/pages/device-information/device-information.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], DeviceInformationPage);
    return DeviceInformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-device-information-device-information-module-es5.js.map