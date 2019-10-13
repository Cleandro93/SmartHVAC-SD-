(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-analysis-history-analysis-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/analysis-history/analysis-history.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/analysis-history/analysis-history.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>DATA HISTORY</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n      <ion-row center>\n        <ion-col text-center>\n          <br>\n          <h4>Search Data Range</h4>\n        <ion-item>\n          <ion-label>From:</ion-label>\n          <ion-datetime displayFormat=\"MMM / DD / YYYY\" placeholder=\"Select Date\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>To:</ion-label>\n          <ion-datetime displayFormat=\"MMM / DD / YYYY\" placeholder=\"Select Date\"></ion-datetime>\n        </ion-item>\n        <br><br><br><br><br><br><br><br>\n        <ion-button shape=\"round\" size=\"large\" expland=\"block\" (click)=\"searchData()\">Search Data</ion-button><br><br>\n        <ion-button shape=\"round\" size=\"large\" expland=\"block\" (click)=\"flagData()\">Flag Data</ion-button><br><br>\n        <ion-button shape=\"round\" color=\"tertiary\" size=\"large\" expland=\"block\" (click)=\"deleteData()\">Delete Data</ion-button><br><br>\n        <br>\n        <ion-button shape=\"round\" size=\"default\" expland=\"block\">\n          <ion-back-button color=\"tertiary\" defaultHref=\"/main\"></ion-back-button>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/analysis-history/analysis-history.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/analysis-history/analysis-history.module.ts ***!
  \*******************************************************************/
/*! exports provided: AnalysisHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisHistoryPageModule", function() { return AnalysisHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _analysis_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analysis-history.page */ "./src/app/pages/analysis-history/analysis-history.page.ts");







var routes = [
    {
        path: '',
        component: _analysis_history_page__WEBPACK_IMPORTED_MODULE_6__["AnalysisHistoryPage"]
    }
];
var AnalysisHistoryPageModule = /** @class */ (function () {
    function AnalysisHistoryPageModule() {
    }
    AnalysisHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_analysis_history_page__WEBPACK_IMPORTED_MODULE_6__["AnalysisHistoryPage"]]
        })
    ], AnalysisHistoryPageModule);
    return AnalysisHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/analysis-history/analysis-history.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/analysis-history/analysis-history.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5c2lzLWhpc3RvcnkvYW5hbHlzaXMtaGlzdG9yeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/analysis-history/analysis-history.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/analysis-history/analysis-history.page.ts ***!
  \*****************************************************************/
/*! exports provided: AnalysisHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisHistoryPage", function() { return AnalysisHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnalysisHistoryPage = /** @class */ (function () {
    function AnalysisHistoryPage() {
        this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
        this.customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: function () { return console.log('Clicked Save!'); }
                }, {
                    text: 'Log',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }]
        };
    }
    AnalysisHistoryPage.prototype.searchData = function () {
    };
    AnalysisHistoryPage.prototype.flagData = function () {
    };
    AnalysisHistoryPage.prototype.deleteData = function () {
    };
    AnalysisHistoryPage.prototype.ngOnInit = function () {
    };
    AnalysisHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analysis-history',
            template: __webpack_require__(/*! raw-loader!./analysis-history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/analysis-history/analysis-history.page.html"),
            styles: [__webpack_require__(/*! ./analysis-history.page.scss */ "./src/app/pages/analysis-history/analysis-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnalysisHistoryPage);
    return AnalysisHistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-analysis-history-analysis-history-module-es5.js.map