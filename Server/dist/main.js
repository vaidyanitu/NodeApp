(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n    <div class=\"disp bcolor\">\r\n        <h1 class=\"alignleft\"></h1>\r\n        <h1 class=\"aligncenter\"><i class=\"fa fa-puzzle-piece\" aria-hidden=\"true\"></i> My Node Application</h1>\r\n        <div style=\"float: right;\">\r\n            <a *ngIf=\"authUser._id; else elseBlock\" href=\"/logout\" class=\"btn btn-default\">Logout</a>\r\n            <ng-template #elseBlock><a href=\"/\" class=\"btn btn-default\">Login</a></ng-template>     \r\n            <!-- <a href=\"/unlink/google\" class=\"btn btn-danger\">Unlink <span class=\"fa fa-google-plus\"></span></a> -->       \r\n            <a *ngIf=\"showGoogUnlink()\" href=\"/unlink/google\" class=\"btn btn-danger\">Unlink <span class=\"fa fa-google-plus\"></span></a>                           \r\n            <a *ngIf=\"showGoogConnect()\" href=\"connect/google\" class=\"btn btn-danger\">Connect <span class=\"fa fa-google-plus\"></span></a>    \r\n        </div>                            \r\n    </div>\r\n    \r\n    <router-outlet></router-outlet>\r\n\r\n   \r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_authUser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authUser.service */ "./src/app/services/authUser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(http, sharedUser, router) {
        this.http = http;
        this.sharedUser = sharedUser;
        this.router = router;
        this.title = 'app';
        this.authUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedUser.getUser().subscribe(function (x) {
            _this.authUser = x;
            _this.sharedUser.setUser(_this.authUser);
        });
    };
    AppComponent.prototype.showGoogUnlink = function () {
        debugger;
        if (this.authUser._id && this.authUser.local) {
            if (this.authUser.local.email && this.authUser.google) {
                if (this.authUser.google.token) {
                    return true;
                }
            }
        }
        else
            return false;
    };
    AppComponent.prototype.showGoogConnect = function () {
        debugger;
        if (this.authUser._id && this.authUser.local) {
            if (this.authUser.local.email) {
                if (!this.authUser.google) {
                    return true;
                }
                else if (this.authUser.google) {
                    if (!this.authUser.google.token) {
                        return true;
                    }
                    // return false;
                }
                // return false;
            }
            //else 
            // return false
        }
        else
            return false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_authUser_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_authUser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/authUser.service */ "./src/app/services/authUser.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _authguard_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authguard/auth-guard.service */ "./src/app/authguard/auth-guard.service.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            providers: [_services_authUser_service__WEBPACK_IMPORTED_MODULE_7__["AuthUserService"], _authguard_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"] },
    // { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//canActivate:[AuthGuardService]


/***/ }),

/***/ "./src/app/authguard/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/authguard/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authUser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authUser.service */ "./src/app/services/authUser.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authUser) {
        this.router = router;
        this.authUser = authUser;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        var _this = this;
        debugger;
        return this.authUser.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
            if (x) {
                return true;
            }
            else {
                _this.router.navigate(['home']);
                return false;
            }
        }));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authUser_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n  <a routerLink=\"/product\">Product</a>\n\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/models/product.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
        this.state = 'inactive';
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"disp subheading\">\r\n        <h1 class=\"subheadingcaption\"><span class=\"fa fa-anchor\"></span> Category</h1>        \r\n    </div>\r\n  \r\n    <div class=\"bod\">\r\n     <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cbox\">\r\n                <h3 class=\"text-danger\"><span class=\"\tfa fa-edit\"></span> Categories <i class=\"fa fa-plus\" id=\"myBtn\" style=\"float: right; margin-right: 100px\" (click)=\"openModal(template)\"></i></h3>\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button> -->\r\n                    <ng-template #template>\r\n                      <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title pull-left\">Add Category</h4>\r\n                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                      </div>\r\n                      <div class=\"modal-body\">\r\n                          <form #f=\"ngForm\">\r\n                            <label for=\"name\">Category Name</label>\r\n                            <input type=\"text\" ngModel #name required/>\r\n                            <div *ngIf=\"!name.value && name.touched \" class=\"error\">\r\n                                Name is required\r\n                              </div>\r\n                            <button [disabled]=\"!name.value\" type=\"button\" class=\"btn\" (click)=\"addCat(name.value)\">Add</button>\r\n                        </form>\r\n                      </div>\r\n                    </ng-template>                \r\n                    <ng-template #updtemplate>\r\n                        <div class=\"modal-header\">\r\n                          <h4 class=\"modal-title pull-left\">Edit Category</h4>\r\n                          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                          </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <form >\r\n                                <input type=\"hidden\" #id value={{modalService.config.initialState.id}}/>\r\n                              <label for=\"name\">Category Name </label>\r\n                              <input type=\"text\" #name value={{modalService.config.initialState.name}}/>\r\n                              <button type=\"button\" class=\"btn\" (click)=\"editCat(id.value,name.value)\">Edit</button>\r\n                          </form>\r\n                        </div>\r\n                      </ng-template> \r\n                  <div style=\"max-height: 400px; overflow: auto\"> \r\n                  <table cellspacing=\"20\" cellpadding=\"10\" class=\"table table-hover\" >                                           \r\n                      <tr *ngFor=\"let item of cat\"\r\n                      [@itemState]=item.state\r\n                      (mouseover)=\"item.state='active'\"\r\n                      (mouseleave)=\"item.state='inactive'\"\r\n                      >\r\n                          <td> {{item.name}}</td>                                    \r\n                          <td><span class=\"fa fa-minus-square\" id=item._id (click)=\"deleteCat(item._id)\"></span></td>  \r\n                          <td><i class=\"fa fa-pencil-square-o\" (click)=\"openModal(updtemplate,item)\"></i></td>\r\n                      </tr>\r\n                    </tbody>                                                 \r\n                  </table>\r\n                </div>           \r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n\r\n\r\n<!-- [@itemState]=item.state\r\n                          (click)=\"toggleState(item)\"                           -->"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product.model */ "./src/app/models/product.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductComponent = /** @class */ (function () {
    function ProductComponent(productservice, router, modalService) {
        var _this = this;
        this.productservice = productservice;
        this.router = router;
        this.modalService = modalService;
        this.cat = [];
        this.state = 'inactive';
        debugger;
        this.getData().subscribe(function (x) {
            console.log(x);
            _this.cat = x;
        });
    }
    ProductComponent.prototype.toggleState = function (item) {
        debugger;
        item.state = item.state === 'active' ? 'inactive' : 'active';
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.openModal = function (template, val) {
        debugger;
        var initialState = {
            name: val ? val.name : '',
            id: val ? val._id : ''
        };
        this.modalRef = this.modalService.show(template, { initialState: initialState });
    };
    ProductComponent.prototype.addCat = function (cname) {
        var _this = this;
        debugger;
        var a = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__["Category"]();
        a.name = cname;
        this.productservice.addData(a, '/api/category')
            .subscribe(function (res) {
            console.log(res);
            // this.getData().subscribe(x=>{
            //   console.log(x);          
            //   this.cat=x;
            _this.modalRef.hide();
            // });
            _this.cat.push(res);
        }, function (err) {
            console.log('Error ', err);
        });
    };
    ProductComponent.prototype.deleteCat = function (cid) {
        var _this = this;
        debugger;
        var result = confirm("Are you sure you want to delete this?");
        if (result) {
            this.productservice.delData(cid, '/api/category')
                .subscribe(function (res) {
                _this.getData().subscribe(function (x) {
                    _this.cat = x;
                    return false;
                });
            }, function (err) {
                console.log('Error ', err);
            });
        }
    };
    ProductComponent.prototype.editCat = function (cid, name) {
        var _this = this;
        debugger;
        var cat = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__["Category"]();
        cat.name = name;
        cat._id = cid;
        this.productservice.editData(cid, '/api/category/', cat)
            .subscribe(function (res) {
            _this.getData().subscribe(function (x) {
                _this.cat = x;
                _this.modalRef.hide();
            });
        }, function (err) {
            console.log('Error ', err);
        });
    };
    ProductComponent.prototype.getData = function () {
        return this.productservice.getData("api/category").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x.json(); }));
    };
    ProductComponent.prototype.test = function () {
        var _this = this;
        var a = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__["Category"]();
        a.name = "TestObject";
        this.productservice.addData(a, '/api/category')
            .subscribe(function (res) {
            console.log(res);
            _this.getData().subscribe(function (x) {
                console.log(x);
                _this.cat = x;
            });
        }, function (err) {
            console.log('Error ', err);
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")],
            animations: [
                // trigger('cat', [
                //   // transition('* => *', [
                //   //   query(':enter', style({ opacity: 0 }), {optional: true}),
                //   //   query(':enter', stagger('300ms', [
                //   //     animate('.6s ease-in', keyframes([
                //   //       style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                //   //       style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                //   //       style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
                //   //     ]))]), {optional: true})
                //   // ]),
                //   transition(':enter', [
                //     style({transform: 'translateY(-100%)'}),
                //     animate('200ms ease-in', style({transform: 'translateY(0%)'}))
                //   ]),
                //   transition(':leave', [
                //     animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
                //   ])
                // ]), 
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('itemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/services/authUser.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/authUser.service.ts ***!
  \**********************************************/
/*! exports provided: AuthUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthUserService", function() { return AuthUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthUserService = /** @class */ (function () {
    function AuthUserService(http) {
        var _this = this;
        this.http = http;
        this.getUser().subscribe(function (x) {
            _this.authUser = x;
        });
    }
    AuthUserService.prototype.ngOnInit = function () {
    };
    AuthUserService.prototype.getUser = function () {
        return this.http.get('/authenticate')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthUserService.prototype.setUser = function (user) {
        this.authUser = user;
    };
    AuthUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthUserService);
    return AuthUserService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getData = function (objName) {
        debugger;
        return this.http.get('/' + objName);
        //.pipe(map(res=>res.json()));
    };
    ProductsService.prototype.addData = function (obj, urlroute) {
        debugger;
        return this.http.post(urlroute, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x.json(); }));
    };
    ProductsService.prototype.delData = function (id, urlroute) {
        debugger;
        return this.http.delete(urlroute + '/' + id);
    };
    ProductsService.prototype.editData = function (id, urlroute, data) {
        debugger;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(urlroute + '/' + id, data, options);
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nitu.vaidya\Desktop\MyNodeApp\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map