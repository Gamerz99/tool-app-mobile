webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickToolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pick_detail_pick_detail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PickToolPage = /** @class */ (function () {
    function PickToolPage(loadingCtrl, navCtrl, navParams, service) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.data = {
            tool: null,
            brand: null
        };
    }
    PickToolPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Loading...'
        });
        loading.present();
        this.service.tool_list().subscribe(function (res) {
            _this.tools = res.tools;
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    PickToolPage.prototype.brand = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Loading...'
        });
        loading.present();
        this.service.brand_list(event).subscribe(function (res) {
            _this.brands = res.brands;
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
            alert("Not found");
        });
    };
    PickToolPage.prototype.search = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Loading...'
        });
        loading.present();
        this.service.stock_list(this.data.tool, this.data.brand).subscribe(function (res) {
            _this.result = res.stocks;
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
            alert("Not Found");
        });
    };
    PickToolPage.prototype.clear = function () {
        this.result = null;
    };
    PickToolPage.prototype.pick = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pick_detail_pick_detail__["a" /* PickDetailPage */], { id: id });
    };
    PickToolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pick-tool',template:/*ion-inline-start:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/pick-tool/pick-tool.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Pick Tool</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="!result" padding>\n    <ion-list>\n      <ion-item>\n        <ion-label>Tool</ion-label>\n        <ion-select [(ngModel)]="data.tool" interface="action-sheet" (ionChange)="brand($event)">\n          <ion-option *ngFor="let res of tools" value="{{res.name}}">{{res.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Brand</ion-label>\n        <ion-select [(ngModel)]="data.brand" interface="action-sheet">\n          <ion-option *ngFor="let res of brands" value="{{res.id}}">{{res.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <button ion-button block color="danger" (click)="search()">Search</button>\n  </div>\n  <div *ngIf="result">\n    <ion-card *ngFor="let item of result" class="card-background">\n      <ion-item>\n        <ion-avatar item-start>\n          <img *ngIf="item.stat == 1" src="assets/imgs/logo.png" class="online-image">\n          <img *ngIf="item.stat == 3" src="assets/imgs/logo.png" class="offline-image">\n        </ion-avatar>\n        <div class="card-title">Tool Name : {{item.tool}}</div>\n        <p class="card-subtitle">Tool Code : {{item.barcode}}</p>\n      </ion-item>\n      <ion-fab right middle>\n        <button ion-fab mini color="danger" (click)=\'pick(item.id)\'>\n          <ion-icon small name="ios-arrow-forward"></ion-icon>\n        </button>\n      </ion-fab>\n    </ion-card>\n    <div padding>\n      <button ion-button block color="danger" (click)="clear()">Clear</button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/pick-tool/pick-tool.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]) === "function" && _d || Object])
    ], PickToolPage);
    return PickToolPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=pick-tool.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PickDetailPage = /** @class */ (function () {
    function PickDetailPage(loadingCtrl, callNumber, navCtrl, navParams, service) {
        this.loadingCtrl = loadingCtrl;
        this.callNumber = callNumber;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.data = {
            employee: null,
            barcode: null
        };
        this.button = false;
        if (localStorage.getItem('userdata')) {
            this.userdata = JSON.parse(localStorage.getItem('userdata'));
        }
        this.id = navParams.get('id');
    }
    PickDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Loading...'
        });
        loading.present();
        this.service.stock_item(this.id).subscribe(function (res) {
            _this.stock = res.stock;
            _this.data.barcode = res.stock.barcode;
            _this.data.employee = _this.userdata.id;
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    PickDetailPage.prototype.submit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Loading...'
        });
        loading.present();
        this.service.assign(this.data).subscribe(function (res) {
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            alert("Pick Succesfull");
        }, function (error) {
            loading.dismiss();
            alert("Error");
        });
    };
    PickDetailPage.prototype.call = function () {
        this.callNumber.callNumber(this.stock.phone, true);
    };
    PickDetailPage.prototype.option = function () {
        if (this.button == false) {
            this.button = true;
        }
        else {
            this.button = false;
        }
    };
    PickDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pick-detail',template:/*ion-inline-start:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/pick-detail/pick-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Pick Your Tool</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="stock">\n    <div class="profile-media">\n      <ion-fab right top *ngIf="stock.stat == 3">\n        <button ion-fab color="primary" mini (click)="call()">\n          <ion-icon name="call"></ion-icon>\n        </button>\n      </ion-fab>\n      <div class="profile-details">\n        <img *ngIf="stock.stat == 1" src="assets/imgs/logo.png" class="img-circle online-image">\n        <img *ngIf="stock.stat == 3" src="assets/imgs/logo.png" class="img-circle offline-image">\n        <h5 class="name">Tool Name : {{stock.tool}}</h5>\n        <p class="p">Tool Brand : {{stock.brand}}</p>\n        <p class="p">Tool Code : {{stock.barcode}}</p>\n        <p class="p">Tool Description : {{stock.description}}</p><br>\n        <div *ngIf="stock.stat == 3">\n          <p class="reserved"> This Tool reserved by : {{stock.reserved}}</p>\n          <p class="reserved"> Phone Number : {{stock.phone}}</p>\n        </div>\n      </div>\n    </div>\n    <div padding *ngIf="stock.stat == 1">\n      <button ion-button block color="danger" (click)="submit()">Submit</button>\n    </div>\n    <div padding class="option" *ngIf="stock.stat == 3">\n      <span (click)="option()">\n        <p class="p">Options</p>\n        <ion-icon name="arrow-dropdown"></ion-icon>\n      </span>\n\n      <div *ngIf="button == true">\n        <p class="reserved">!Get your tool from {{stock.reserved}} and submit</p><br>\n        <span>\n          <button ion-button block color="danger" (click)="submit()">Submit</button>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="!stock">\n    <p class="not">Not found</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/pick-detail/pick-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]) === "function" && _e || Object])
    ], PickDetailPage);
    return PickDetailPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=pick-detail.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnToolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__return_detail_return_detail__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReturnToolPage = /** @class */ (function () {
    function ReturnToolPage(navCtrl, navParams, loadingCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        if (localStorage.getItem('userdata')) {
            this.userdata = JSON.parse(localStorage.getItem('userdata'));
        }
    }
    ReturnToolPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Loading...'
        });
        loading.present();
        this.service.assign_list(this.userdata.id).subscribe(function (res) {
            _this.result = res.assigns;
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    ReturnToolPage.prototype.return = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__return_detail_return_detail__["a" /* ReturnDetailPage */], { id: id });
    };
    ReturnToolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-return-tool',template:/*ion-inline-start:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/return-tool/return-tool.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Your Tool List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="result">\n    <ion-card *ngFor="let item of result" class="card-background">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/logo.png" class="online-image">\n        </ion-avatar>\n        <div class="card-title">Tool Name : {{item.tool}}</div>\n        <p class="card-subtitle">Tool Brand : {{item.brand}}</p>\n        <p class="card-subtitle">Tool Code : {{item.barcode}}</p>\n      </ion-item>\n      <ion-fab right middle>\n        <button ion-fab mini color="danger" (click)=\'return(item.stockid)\'>\n          <ion-icon small name="remove"></ion-icon>\n        </button>\n      </ion-fab>\n    </ion-card>\n  </div>\n  <div *ngIf="!result">\n    <p class="not">Not found</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/return-tool/return-tool.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]) === "function" && _d || Object])
    ], ReturnToolPage);
    return ReturnToolPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=return-tool.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Logging Out'
        });
        loading.present();
        localStorage.clear();
        setTimeout(function () {
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }, 3000);
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/logout/logout.html"*/'<ion-header>\n</ion-header>\n\n<ion-content padding class="background">\n\n</ion-content>'/*ion-inline-end:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		277,
		12
	],
	"../pages/logout/logout.module": [
		278,
		11
	],
	"../pages/pick-detail/pick-detail.module": [
		279,
		10
	],
	"../pages/pick-tool/pick-tool.module": [
		280,
		9
	],
	"../pages/return-detail/return-detail.module": [
		282,
		7
	],
	"../pages/return-tool/return-tool.module": [
		281,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_logout_logout__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_service_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pick_tool_pick_tool__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pick_detail_pick_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_return_tool_return_tool__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_return_detail_return_detail__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pick_tool_pick_tool__["a" /* PickToolPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pick_detail_pick_detail__["a" /* PickDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_return_tool_return_tool__["a" /* ReturnToolPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_return_detail_return_detail__["a" /* ReturnDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pick-detail/pick-detail.module#PickDetailPageModule', name: 'PickDetailPage', segment: 'pick-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pick-tool/pick-tool.module#PickToolPageModule', name: 'PickToolPage', segment: 'pick-tool', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/return-tool/return-tool.module#ReturnToolPageModule', name: 'ReturnToolPage', segment: 'return-tool', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/return-detail/return-detail.module#ReturnDetailPageModule', name: 'ReturnDetailPage', segment: 'return-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pick_tool_pick_tool__["a" /* PickToolPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pick_detail_pick_detail__["a" /* PickDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_return_tool_return_tool__["a" /* ReturnToolPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_return_detail_return_detail__["a" /* ReturnDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_logout_logout__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pick_tool_pick_tool__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_return_tool_return_tool__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        if (localStorage.getItem('userdata')) {
            this.userdata = JSON.parse(localStorage.getItem('userdata'));
        }
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Pick Tool', component: __WEBPACK_IMPORTED_MODULE_7__pages_pick_tool_pick_tool__["a" /* PickToolPage */] },
            { title: 'Return Tool', component: __WEBPACK_IMPORTED_MODULE_8__pages_return_tool_return_tool__["a" /* ReturnToolPage */] },
            { title: 'Log Out', component: __WEBPACK_IMPORTED_MODULE_6__pages_logout_logout__["a" /* LogoutPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (localStorage.getItem('userdata')) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
            _this.statusBar.styleBlackOpaque();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page == __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] || page == __WEBPACK_IMPORTED_MODULE_6__pages_logout_logout__["a" /* LogoutPage */]) {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.push(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>{{userdata.name}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReturnDetailPage = /** @class */ (function () {
    function ReturnDetailPage(navCtrl, navParams, loadingCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.data = {
            employee: null,
            barcode: null
        };
        if (localStorage.getItem('userdata')) {
            this.userdata = JSON.parse(localStorage.getItem('userdata'));
        }
        this.id = navParams.get('id');
    }
    ReturnDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Loading...'
        });
        loading.present();
        this.service.stock_item(this.id).subscribe(function (res) {
            _this.stock = res.stock;
            _this.data.barcode = res.stock.barcode;
            _this.data.employee = _this.userdata.id;
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    ReturnDetailPage.prototype.submit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Loading...'
        });
        loading.present();
        this.service.unassign(this.data).subscribe(function (res) {
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            alert("Return Succesfull");
        }, function (error) {
            loading.dismiss();
            alert("Error");
        });
    };
    ReturnDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-return-detail',template:/*ion-inline-start:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/return-detail/return-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Return Your Tool</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="stock">\n    <div class="profile-media">\n      <div class="profile-details">\n        <img src="assets/imgs/logo.png" class="img-circle online-image">\n        <h5 class="name">Tool Name : {{stock.tool}}</h5>\n        <p class="p">Tool Brand : {{stock.brand}}</p>\n        <p class="p">Tool Code : {{stock.barcode}}</p>\n        <p class="p">Tool Description : {{stock.description}}</p>\n      </div>\n    </div>\n    <div padding>\n      <button ion-button block color="danger" (click)="submit()">Submit</button>\n    </div>\n  </div>\n  <div *ngIf="!stock">\n    <p class="not">Not found</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/return-detail/return-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]) === "function" && _d || Object])
    ], ReturnDetailPage);
    return ReturnDetailPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=return-detail.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http) {
        this.http = http;
        this.url = 'http://localhost/umesha/index.php/api';
    }
    ServiceProvider.prototype.tool_list = function () {
        return this.http.get(this.url + '/tool_api/tool_list').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.brand_list = function (tool) {
        return this.http.get(this.url + '/tool_api/brand_list/' + tool).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.stock_list = function (tool, brand) {
        return this.http.get(this.url + '/stock_api/stock_list/' + tool + '/' + brand).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.stock_item = function (id) {
        return this.http.get(this.url + '/stock_api/stock_item/' + id).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.login = function (data) {
        return this.http.post(this.url + '/employee_api/login', data).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.assign = function (data) {
        return this.http.post(this.url + '/assign_api/assign_tool', data).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.unassign = function (data) {
        return this.http.post(this.url + '/assign_api/unassign_tool', data).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.assign_list = function (id) {
        return this.http.get(this.url + '/assign_api/tool_list/' + id).map(function (res) { return res.json(); });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pick_tool_pick_tool__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__return_tool_return_tool__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.pick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pick_tool_pick_tool__["a" /* PickToolPage */]);
    };
    HomePage.prototype.return = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__return_tool_return_tool__["a" /* ReturnToolPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block color="danger" (click)="pick()">Pick Tool</button>\n  <button ion-button block color="danger" (click)="return()">Return Tool</button>\n</ion-content>'/*ion-inline-end:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, navCtrl, navParams, service) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.credentials = {
            email: null,
            password: null
        };
        this.userdata = {
            name: null,
            email: null,
            id: null,
            phone: null
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Logging in...'
        });
        loading.present();
        this.service.tool_list().subscribe();
        this.service.login(this.credentials).subscribe(function (res) {
            _this.userdata.name = res.user.name;
            _this.userdata.id = res.user.id;
            _this.userdata.email = res.user.email;
            _this.userdata.phone = res.user.phone;
            localStorage.setItem('userdata', JSON.stringify(_this.userdata));
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
            loading.dismiss();
            console.log(error);
            alert("Invalid Credintials");
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="false">\n  <div class="pad">\n    <ion-item>\n      <ion-input type="text" placeholder="Email" [(ngModel)]="credentials.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="credentials.password"></ion-input>\n    </ion-item><br>\n    <button ion-button block color="danger" (click)="login()">Log In</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/a1433b4f-4957-4622-af0e-733cd85070b5/Development/ionic/tool-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map