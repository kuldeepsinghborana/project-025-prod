webpackJsonp(["employer.module"],{

/***/ "./src/app/employer/account-settings/account-settings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/account-settings/account-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <p>\n      <span class=\"medium strong\">Account Settings</span>\n    </p>\n    <div class=\"card pad20\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"saveAccountSettings(curruntUserDetails)\" #verify=\"ngForm\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2 small\">FIRST NAME</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter first name\" name=\"firstName\" [(ngModel)]=\"curruntUserDetails['firstName']\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2 small\">LAST NAME</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter last name\" name=\"lastName\" [(ngModel)]=\"curruntUserDetails['lastName']\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2 small\">EMAIL</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"curruntUserDetails['email']\" required=\"\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2 small\">COMPANY NAME</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter your company name\" name=\"companyName\" [(ngModel)]=\"curruntUserDetails['companyName']\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2 small\">PROFILE PIC</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" type=\"file\" name=\"profilePic\" (change)=\"fileSelected($event)\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-2\" for=\"password\">Password</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" id=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"curruntUserDetails['password']\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-2\" for=\"password-repeat\">Password Confirmation</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" id=\"password-repeat\" type=\"password\" placeholder=\"Re-enter Password\" name=\"passwordConf\" [(ngModel)]=\"curruntUserDetails['passwordConf']\">\n          </div>\n        </div>\n        <button class=\"btn-lg btn-warning pull-right\" type=\"submit\">Save</button>\n      </form>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employer/account-settings/account-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.curruntUserDetails = {};
        userService.userDetail.subscribe(function (user) {
            _this.curruntUserDetails = Object.assign({}, user);
        });
    }
    AccountSettingsComponent.prototype.fileSelected = function ($event) {
        this.file = $event.target.files ? $event.target.files[0] : null;
    };
    AccountSettingsComponent.prototype.saveAccountSettings = function (curruntUserDetails) {
        var _this = this;
        var payload = new FormData();
        for (var property in curruntUserDetails) {
            payload.append(property, curruntUserDetails[property]);
        }
        if (this.file) {
            payload.append('profilePic', this.file, this.file['name']);
        }
        this.userService.saveProfile(payload, 'employer').subscribe(function (res) {
            console.log('robot ', res);
            _this.router.navigate(['employer/overview']);
        });
    };
    AccountSettingsComponent.prototype.ngOnInit = function () {
    };
    AccountSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__("./src/app/employer/account-settings/account-settings.component.html"),
            styles: [__webpack_require__("./src/app/employer/account-settings/account-settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());



/***/ }),

/***/ "./src/app/employer/buy-carrots/buy-carrots.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/buy-carrots/buy-carrots.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\" [hidden]=\"showCard\">\n      <div class=\"align-center\">\n        <img class=\"left20\" height=\"60\" length=\"60\" src=\"assets/img/carrot.png\">\n        <h3 class=\"strong\">Purchase Carrots</h3>\n        <div class=\"medium\">Price points designed for anyone, choose the plan that fits your hiring strategy</div>\n      </div>\n      <br>\n      <br>\n      <br>\n      <div class=\"row\" [hidden]=\"showCard\">\n        <div class=\"col-md-4\">\n          <div class=\"panel align-center pad20\">\n            <strong>PROFESSIONAL</strong>\n            <div class=\"large strong\">$350</div>\n            <br>\n            <p>For the employers with huge positions to fill with strict deadlines</p>\n            <br>\n            <p class=\"strong\">1000 carrots</p>\n            <p>0.35¢ per carrot</p>\n            <br>\n            <button (click)=\"buyNow('PROFESSIONAL')\" class=\"btn btn-green\">Buy now</button>\n          </div>\n        </div>\n        <div class=\"col-md-4\" style=\"margin-top: -30px;\">\n          <div class=\"panel align-center pad20\">\n            <strong class=\"green\">VALUE</strong>\n            <div class=\"large strong\">$90</div>\n            <br>\n            <p>For the employers who have multiple positions to fill</p>\n            <br>\n            <p class=\"strong\">200 carrots</p>\n            <p>0.45¢ per carrot</p>\n            <br>\n            <button (click)=\"buyNow('VALUE')\" class=\"btn btn-green\">Buy now</button>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"panel align-center pad20\">\n            <strong>CASUAL</strong>\n            <div class=\"large strong\">$25</div>\n            <br>\n            <p>Good for one time hires without deadlines</p>\n            <br>\n            <p class=\"strong\">50 carrots</p>\n            <p>0.50¢ per carrot</p>\n            <br>\n            <button (click)=\"buyNow('CASUAL')\" class=\"btn btn-green\">Buy now</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"align-center\">\n        <p class=\"medium\">For custom pricing for bulk orders, please tell us your quantity through our contact form</p>\n        <a class=\"btn btn-orange\" href=\"/contact\">Contact us</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- <div class=\"div\">\n  <div id=\"dropin-container\"></div>\n  <button id=\"submit-button\" type=\"button\">SUBMIT</button>\n</div> -->\n<!-- <form>\n  <div id=\"dropin-container\"></div>\n</form> -->\n\n<!-- <div id=\"dropin-container\"></div>\n<form id=\"checkout-form\">\n  <input type='submit' value='Pay'/>\n</form> -->\n<div id=\"dropin-container\"></div>\n<!-- <div id=\"paypal-container\"></div> -->\n<!-- <div id=\"paypal-container\"></div> -->\n<!-- <button id=\"paypal-button\"></button> -->\n<button id=\"submit-button\">Request payment method</button>"

/***/ }),

/***/ "./src/app/employer/buy-carrots/buy-carrots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyCarrotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular5_toaster_angular5_toaster__ = __webpack_require__("./node_modules/angular5-toaster/angular5-toaster.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buy_carrots_service__ = __webpack_require__("./src/app/employer/buy-carrots/buy-carrots.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// var dropin = require('braintree-web-drop-in');
var BuyCarrotsComponent = /** @class */ (function () {
    function BuyCarrotsComponent(toasterService, router, buyCarrotsService, UserService) {
        this.toasterService = toasterService;
        this.router = router;
        this.buyCarrotsService = buyCarrotsService;
        this.UserService = UserService;
        this.clientToken = '';
        this.showCard = false;
        this.self = this;
    }
    BuyCarrotsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buyCarrotsService.clientToken().subscribe(function (res) {
            console.log('res', res);
            _this.clientToken = res.clientToken;
        }, function (err) {
            console.log('err', err);
        });
    };
    BuyCarrotsComponent.prototype.buyNow = function (planType) {
        var self = this;
        console.log(planType);
        // braintree.dropin.create({
        //   authorization: this.clientToken,
        //   container: '#dropin-container',
        //   paypal: {
        //     container: "paypal-button"
        //   }
        // }, function (err, clientInstance) {
        //   console.log('err', err);
        //   self.showCard = true;   
        //   console.log('clientInstance', clientInstance);
        // });
        // braintree.setup(this.clientToken, 'dropin', {
        //   container: 'dropin-container',
        //   paypal: {
        //     singleUse: true,
        //     amount: 10.00,
        //     currency: 'USD'
        //   }
        // });
        var plan = [
            {
                planType: 'PROFESSIONAL',
                amount: 350.00,
                carrots: 1000
            },
            {
                planType: 'VALUE',
                amount: 90.00,
                carrots: 200
            },
            {
                planType: 'CASUAL',
                amount: 25.00,
                carrots: 50
            }
        ];
        var selectedPlan = plan.filter(function (obj) {
            return obj.planType === planType;
        });
        var newSelectedPlan;
        if (selectedPlan && Array.isArray(selectedPlan) && selectedPlan.length > 0) {
            newSelectedPlan = selectedPlan[0].amount;
        }
        console.log('newSelectedPlan', newSelectedPlan);
        self.showCard = true;
        var button = document.querySelector('#submit-button');
        braintree.dropin.create({
            authorization: this.clientToken,
            container: '#dropin-container',
            // paypal: {
            //   container: "paypal-button"
            // },
            paypalCredit: {
                flow: 'checkout',
                amount: newSelectedPlan,
                currency: 'SGD'
            }
        }, function (createErr, instance) {
            button.addEventListener('click', function () {
                instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                    console.log('requestPaymentMethodErr', requestPaymentMethodErr);
                    console.log('paylaod', payload);
                    // Submit payload.nonce to your server
                    if (payload) {
                        var data = {
                            payment_method_nonce: payload.nonce,
                            planType: planType
                        };
                        console.log('data', data);
                        self.buyCarrotsService.checkout(data).subscribe(function (res) {
                            if (res) {
                                console.log('res', res);
                                self.UserService.getUserSettings('employer');
                            }
                        }, function (err) {
                            console.log('err', err);
                        });
                    }
                    else {
                        console.log('requestPaymentMethodErr', requestPaymentMethodErr);
                    }
                });
            });
        });
        // paypal.Button.render({
        //   braintree: braintree,
        //   client: {
        //     // production: 'CLIENT_TOKEN_FROM_SERVER',
        //     sandbox: this.clientToken
        //   },
        //   env: 'sandbox', // or 'sandbox' 'production'
        //   commit: true,
        //   payment: function (data, actions) {
        //     return actions.braintree.create({
        //       flow: 'checkout',
        //       amount: newSelectedPlan,
        //       currency: 'USD'
        //     });
        //   },
        //   onAuthorize: function (payload) {
        //     console.log('payload', payload);
        //     // Submit `payload.nonce` to your server.
        //   },
        // }, '#paypal-button');
    };
    BuyCarrotsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buy-carrots',
            template: __webpack_require__("./src/app/employer/buy-carrots/buy-carrots.component.html"),
            styles: [__webpack_require__("./src/app/employer/buy-carrots/buy-carrots.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_angular5_toaster_angular5_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__buy_carrots_service__["a" /* BuyCarrotsService */], __WEBPACK_IMPORTED_MODULE_4__user_service_service__["a" /* UserService */]])
    ], BuyCarrotsComponent);
    return BuyCarrotsComponent;
}());



/***/ }),

/***/ "./src/app/employer/buy-carrots/buy-carrots.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyCarrotsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyCarrotsService = /** @class */ (function () {
    function BuyCarrotsService(http, commonServiceService) {
        this.http = http;
        this.commonServiceService = commonServiceService;
    }
    BuyCarrotsService.prototype.clientToken = function () {
        return this.commonServiceService.get('/employer/payment')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BuyCarrotsService.prototype.checkout = function (data) {
        return this.commonServiceService.post('/employer/payment/checkout', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BuyCarrotsService.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(body);
    };
    BuyCarrotsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_3__common_common_service_service__["a" /* CommonServiceService */]])
    ], BuyCarrotsService);
    return BuyCarrotsService;
}());



/***/ }),

/***/ "./src/app/employer/employee-management/employee-management.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/employee-management/employee-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"panel pad10\">\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div class=\"large strong\">Employee Management</div>\n          </div>\n          <div class=\"col-md-7\">\n            <form class=\"form-inline\" action=\"/employer/workers\" method=\"get\">\n              <input class=\"form-control\" type=\"text\" name=\"jobId\" placeholder=\"Search by job ID\">\n              <button class=\"form-control\" type=\"submit\">\n                <i class=\"fa fa-search\"></i>\n              </button>\n            </form>\n          </div>\n        </div>\n        <p>Please enter Job Id to search</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employer/employee-management/employee-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeManagementComponent = /** @class */ (function () {
    function EmployeeManagementComponent() {
    }
    EmployeeManagementComponent.prototype.ngOnInit = function () {
    };
    EmployeeManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-management',
            template: __webpack_require__("./src/app/employer/employee-management/employee-management.component.html"),
            styles: [__webpack_require__("./src/app/employer/employee-management/employee-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeManagementComponent);
    return EmployeeManagementComponent;
}());



/***/ }),

/***/ "./src/app/employer/employee-profile/employee-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/employee-profile/employee-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"panel pad20\">\n        <p>\n          <strong class=\"large\">Employee Profile</strong>\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"align-center\">\n              <img class=\"img-fit img-circle\" src=\"https://scontent.xx.fbcdn.net/v/t31.0-1/16826009_10210205090476919_3964334241175919633_o.jpg?oh=e1a767f01a354528293ea31e8d9ae5fb&amp;oe=59A18FFC\"\n                height=\"100\" width=\"100\">\n              <br>\n              <br>\n              <div class=\"strong capitalize\">Gary Lim</div>\n              <p class=\"green strong\"> $undefined</p>\n              <p class=\"strong\">male</p>\n              <strong class=\"gray\">EXPERIENCE</strong>\n              <p class=\"strong\">2 years</p>\n              <br>\n              <strong class=\"gray\">LANGUAGE</strong>\n              <p class=\"strong\">English,Mandarin</p>\n              <br>\n              <strong class=\"gray\">SAVINGS</strong>\n              <p>You save $10 when you hire Gary Lim with his expected salary.</p>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pad20\">\n              <h5 class=\"strong\">About Me</h5>\n              <p>Entrepreneur</p>\n              <br>\n              <h5 class=\"strong\">Job Experience</h5>\n              <strong>Project Manager @ Vendermac</strong>\n              <p class=\"gray\">Plan and Manage Events, Lead the salesforce to achieve yearly targets</p>\n              <strong>Project Manager @ Vendermac</strong>\n              <p class=\"gray\">Lead team of 5 people to achieve Event sales target of 700k within a week</p>\n              <br>\n              <h5 class=\"strong\">Personality Metrics</h5>\n              <h5 class=\"strong red\">Driver</h5>\n              <p>The Driver is a high achiever – a mover and shaker who is definitely not averse to risk. The individual is\n                extroverted, strong-willed, direct, practical, organised, forceful, and decisive. Look for someone who tells\n                it the way it is and is very persuasive. Watch out or you’ll be worn down and bowled over. A driver is task-\n                rather than relationship-oriented and wants immediate results.</p>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"border-left align-center\">\n              <i class=\"fa fa-3x fa-lock\"></i>\n              <p class=\"medium strong\">Contact Information</p>\n              <div class=\"pad20\">\n                <h6 class=\"gray\">HANDPHONE NUMBER</h6>\n                <p>Locked</p>\n                <h6 class=\"gray\">EMAIL ADDRESS</h6>\n                <p>Locked</p>\n                <br>\n                <p class=\"strong\">How to unlock?</p>\n                <p class=\"gray\">Gary Lim's contact will only be unlocked when he accepts your invitation</p>\n                <p class=\"gray\">Only 1 carrot will be deducted for each invite</p>\n                <p class=\"gray\">Remaining carrots will be deducted when Gary accepts your invite</p>\n                <p class=\"strong\">Invite Gary with</p>\n              </div>\n              <div class=\"pad20\">\n                <p class=\"badge-green\">Applied</p>\n                <a class=\"btn btn-yellow btn-block\" href=\"/api/matches/update/5a76ca6da17df86089e47c0c?matchStatus=shortlisted\">Shortlist</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1\">\n            <h5>\n              <i class=\"fa fa-3x fa-lightbulb-o\"></i>\n            </h5>\n          </div>\n          <div class=\"col-md-11\">\n            <h5 class=\"strong gray\">PRO-TIP</h5>\n            <div>Employees are also uncertain about Jobs as employers.</div>\n            <div>Upload a profile picture and company logo to increase your credibility</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employer/employee-profile/employee-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeProfileComponent = /** @class */ (function () {
    function EmployeeProfileComponent() {
    }
    EmployeeProfileComponent.prototype.ngOnInit = function () {
    };
    EmployeeProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-profile',
            template: __webpack_require__("./src/app/employer/employee-profile/employee-profile.component.html"),
            styles: [__webpack_require__("./src/app/employer/employee-profile/employee-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeProfileComponent);
    return EmployeeProfileComponent;
}());



/***/ }),

/***/ "./src/app/employer/employer-details/employer-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/employer-details/employer-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <p>\n        <span class=\"large strong\">Employer Profile</span>\n      </p>\n      <div class=\"col-md-12\">\n        <div class=\"row card pad20\">\n          <div class=\"col-md-3\">\n            <div class=\"align-center\">\n              <img class=\"img-thumbnail\" height=\"75\" width=\"75\" [src]=\"'assets/img/logo.png'\">\n            </div>\n          </div>\n          <div class=\"col-md-9\">\n            <h3 class=\"strong capitalize\">N/A</h3>\n            <p class=\"medium strong\">Email</p>\n            <p>test@me.com</p>\n            <p class=\"medium strong\">Company Name</p>\n            <p>N/A</p>\n            <p class=\"medium strong\">Date Joined</p>\n            <p>01/05/2018</p>\n            <p class=\"medium strong\">Jobs Created</p>\n            <p>0</p>\n            <p class=\"medium strong\">Invitations Sent</p>\n            <p>0</p>\n            <p class=\"medium strong\">Employees Shortlisted</p>\n            <p>0</p>\n            <p class=\"medium strong\">Carrots</p>\n            <p>Total : 100</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employer/employer-details/employer-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployerDetailsComponent = /** @class */ (function () {
    function EmployerDetailsComponent() {
    }
    EmployerDetailsComponent.prototype.ngOnInit = function () {
    };
    EmployerDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employer-details',
            template: __webpack_require__("./src/app/employer/employer-details/employer-details.component.html"),
            styles: [__webpack_require__("./src/app/employer/employer-details/employer-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployerDetailsComponent);
    return EmployerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/employer/employer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerModule", function() { return EmployerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_overview_job_overview_component__ = __webpack_require__("./src/app/employer/job-overview/job-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_management_job_management_component__ = __webpack_require__("./src/app/employer/job-management/job-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee_management_employee_management_component__ = __webpack_require__("./src/app/employer/employee-management/employee-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buy_carrots_buy_carrots_component__ = __webpack_require__("./src/app/employer/buy-carrots/buy-carrots.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__farm_carrots_farm_carrots_component__ = __webpack_require__("./src/app/employer/farm-carrots/farm-carrots.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__buy_carrots_buy_carrots_service__ = __webpack_require__("./src/app/employer/buy-carrots/buy-carrots.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__job_job_component__ = __webpack_require__("./src/app/employer/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_settings_account_settings_component__ = __webpack_require__("./src/app/employer/account-settings/account-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__invite_employees_invite_employees_component__ = __webpack_require__("./src/app/employer/invite-employees/invite-employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__employee_profile_employee_profile_component__ = __webpack_require__("./src/app/employer/employee-profile/employee-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__review_employees_review_employees_component__ = __webpack_require__("./src/app/employer/review-employees/review-employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__ = __webpack_require__("./src/app/employer/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__job_add_edit_job_add_edit_component__ = __webpack_require__("./src/app/employer/job-add-edit/job-add-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__employer_details_employer_details_component__ = __webpack_require__("./src/app/employer/employer-details/employer-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var EmployerModule = /** @class */ (function () {
    function EmployerModule() {
    }
    EmployerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild([
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_3__job_overview_job_overview_component__["a" /* JobOverviewComponent */], pathMatch: 'full' },
                    { path: 'job-management', component: __WEBPACK_IMPORTED_MODULE_4__job_management_job_management_component__["a" /* JobManagementComponent */], pathMatch: 'full' },
                    { path: 'job-details/:id', component: __WEBPACK_IMPORTED_MODULE_16__job_add_edit_job_add_edit_component__["a" /* JobAddEditComponent */], pathMatch: 'full' },
                    { path: 'buy-carrots', component: __WEBPACK_IMPORTED_MODULE_6__buy_carrots_buy_carrots_component__["a" /* BuyCarrotsComponent */], pathMatch: 'full' },
                    { path: 'farm-carrots', component: __WEBPACK_IMPORTED_MODULE_7__farm_carrots_farm_carrots_component__["a" /* FarmCarrotsComponent */], pathMatch: 'full' },
                    { path: 'employee-management', component: __WEBPACK_IMPORTED_MODULE_5__employee_management_employee_management_component__["a" /* EmployeeManagementComponent */], pathMatch: 'full' },
                    { path: 'account-settings', component: __WEBPACK_IMPORTED_MODULE_11__account_settings_account_settings_component__["a" /* AccountSettingsComponent */], pathMatch: 'full' },
                    { path: 'invite-employees', component: __WEBPACK_IMPORTED_MODULE_12__invite_employees_invite_employees_component__["a" /* InviteEmployeesComponent */], pathMatch: 'full' },
                    { path: 'employee-profile/:id', component: __WEBPACK_IMPORTED_MODULE_13__employee_profile_employee_profile_component__["a" /* EmployeeProfileComponent */], pathMatch: 'full' },
                    { path: 'review-employees', component: __WEBPACK_IMPORTED_MODULE_14__review_employees_review_employees_component__["a" /* ReviewEmployeesComponent */], pathMatch: 'full' },
                    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__["a" /* NotificationsComponent */], pathMatch: 'full' },
                    { path: 'employer-details/:id', component: __WEBPACK_IMPORTED_MODULE_17__employer_details_employer_details_component__["a" /* EmployerDetailsComponent */], pathMatch: 'full' },
                    { path: 'invite-employees/:jobId', component: __WEBPACK_IMPORTED_MODULE_12__invite_employees_invite_employees_component__["a" /* InviteEmployeesComponent */], pathMatch: 'full' }
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__job_overview_job_overview_component__["a" /* JobOverviewComponent */], __WEBPACK_IMPORTED_MODULE_4__job_management_job_management_component__["a" /* JobManagementComponent */], __WEBPACK_IMPORTED_MODULE_5__employee_management_employee_management_component__["a" /* EmployeeManagementComponent */], __WEBPACK_IMPORTED_MODULE_6__buy_carrots_buy_carrots_component__["a" /* BuyCarrotsComponent */], __WEBPACK_IMPORTED_MODULE_7__farm_carrots_farm_carrots_component__["a" /* FarmCarrotsComponent */], __WEBPACK_IMPORTED_MODULE_9__job_job_component__["a" /* JobComponent */], __WEBPACK_IMPORTED_MODULE_11__account_settings_account_settings_component__["a" /* AccountSettingsComponent */], __WEBPACK_IMPORTED_MODULE_12__invite_employees_invite_employees_component__["a" /* InviteEmployeesComponent */], __WEBPACK_IMPORTED_MODULE_13__employee_profile_employee_profile_component__["a" /* EmployeeProfileComponent */], __WEBPACK_IMPORTED_MODULE_14__review_employees_review_employees_component__["a" /* ReviewEmployeesComponent */], __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__["a" /* NotificationsComponent */], __WEBPACK_IMPORTED_MODULE_16__job_add_edit_job_add_edit_component__["a" /* JobAddEditComponent */], __WEBPACK_IMPORTED_MODULE_17__employer_details_employer_details_component__["a" /* EmployerDetailsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__buy_carrots_buy_carrots_service__["a" /* BuyCarrotsService */]]
        })
    ], EmployerModule);
    return EmployerModule;
}());



/***/ }),

/***/ "./src/app/employer/farm-carrots/farm-carrots.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/farm-carrots/farm-carrots.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"align-center\">\n        <img class=\"left20\" height=\"60\" length=\"60\" src=\"assets/img/carrot.png\">\n        <h2>Farm Carrots</h2>\n        <p>You can farm carrots by helping Job bunnies complete simple tasks to make</p>\n        <p>hiring great again</p>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"panel pad20 align-center\">\n            <i class=\"fa fa-3x fa-gift\"></i>\n            <div class=\"large strong\">Send a gift</div>\n            <br>\n            <br>\n            <p class=\"strong\">Do you have partner companies that you are in business with?</p>\n            <br>\n            <p>Let us send them 10 carrots complimentary on us and you will get 10 carrots in return.</p>\n            <br>\n            <p>Everybody wins</p>\n            <br>\n            <button class=\"btn btn-orange\" (click)=\"sendGift()\" >Send Gift</button>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"panel pad20 align-center\">\n            <i class=\"fa fa-3x fa-star\"></i>\n            <div class=\"large strong\">Review employees</div>\n            <p class=\"muted\">( only for shortlisted employees )</p>\n            <br>\n            <p class=\"strong\">Have an employee that you would like to commend or blacklist?</p>\n            <br>\n            <p>For each commend, neutral or blacklist, you get 0.5 carrots in return.</p>\n            <br>\n            <p>Help us make hiring more transparent for all recruiters alike!</p>\n            <br>\n            <button class=\"btn btn-orange\">Review Employees</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employer/farm-carrots/farm-carrots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmCarrotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FarmCarrotsComponent = /** @class */ (function () {
    function FarmCarrotsComponent() {
    }
    FarmCarrotsComponent.prototype.ngOnInit = function () {
    };
    FarmCarrotsComponent.prototype.sendGift = function () {
    };
    FarmCarrotsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-farm-carrots',
            template: __webpack_require__("./src/app/employer/farm-carrots/farm-carrots.component.html"),
            styles: [__webpack_require__("./src/app/employer/farm-carrots/farm-carrots.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FarmCarrotsComponent);
    return FarmCarrotsComponent;
}());



/***/ }),

/***/ "./src/app/employer/invite-employees/invite-employees.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/invite-employees/invite-employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"panel pad10\">\n        <span class=\"large strong\">\n          <span>Invite Employees for Job : test</span>\n          <span> @ West test</span>\n          <br>\n        </span>\n        <p>Job ID: 5a76ca0afe657000143c15d3</p>\n        <hr>{{employeesList}}\n        <div *ngFor=\"let emp of employeesList\">\n          <a href=\"/employer/workers/5a5db124a17df86089392b05?jobId=5a76ca0afe657000143c15d3\"></a>\n          <div class=\"row pad20\">\n            <a href=\"/employer/workers/5a5db124a17df86089392b05?jobId=5a76ca0afe657000143c15d3\">\n              <div class=\"col-md-2\">\n                <div class=\"align-center\">\n                  <img class=\"img-fit img-circle\" [src]=\"emp['profilePic'] || '/assets/img/logo.png'\" height=\"100\" width=\"100\">\n                </div>\n              </div>\n            </a>\n            <div class=\"col-md-10\">\n              <a href=\"/employer/workers/5a5db124a17df86089392b05?jobId=5a76ca0afe657000143c15d3\"></a>\n              <div class=\"row\">\n                <a href=\"/employer/workers/5a5db124a17df86089392b05?jobId=5a76ca0afe657000143c15d3\">\n                  <div class=\"col-md-3\">\n                    <div class=\"strong capitalize black\">{{emp['first name'] + ' '+ emp['last name']}}</div>\n                    <p class=\"green strong\">${{emp['salary']}}</p>\n                    <p class=\"strong black\">{{emp['gender']}}</p>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <strong class=\"gray\">EXPERIENCE</strong>\n                    <p class=\"strong black\">2 years</p>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <strong class=\"gray\">LANGUAGE</strong>\n                    <p class=\"strong black\">{{emp['languages'].join(',')}}</p>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <strong class=\"gray\">PERSONALITY</strong>\n                    <p class=\"strong black\"></p>\n                    <p class=\"strong black\"></p>\n                  </div>\n                </a>\n                <div class=\"col-md-2\">\n                  <a href=\"/employer/workers/5a5db124a17df86089392b05?jobId=5a76ca0afe657000143c15d3\"></a>\n                  <div class=\"align-center\">\n                    <a href=\"/employer/workers/5a5db124a17df86089392b05?jobId=5a76ca0afe657000143c15d3\"></a>\n                    <a class=\"btn btn-blue btn-block\" href=\"/api/matches/update/5a76ca6da17df86089e47c0c?matchStatus=shortlisted\">Shortlist</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employer/invite-employees/invite-employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteEmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InviteEmployeesComponent = /** @class */ (function () {
    function InviteEmployeesComponent(route, commonServiceService) {
        var _this = this;
        this.route = route;
        this.commonServiceService = commonServiceService;
        this.employeesList = [];
        this.route.params.subscribe(function (params) { return _this.jobId = params.jobId; });
        var self = this;
        if (this.jobId) {
            this.commonServiceService.get('/employer/employees/invite/' + this.jobId)
                .map(function (res) { return res.json(); })
                .catch(this.handleError)
                .subscribe(function (res) {
                console.log(res);
                this.employeesList = res['workers'];
            });
        }
    }
    InviteEmployeesComponent.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(body);
    };
    InviteEmployeesComponent.prototype.ngOnInit = function () {
    };
    InviteEmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invite-employees',
            template: __webpack_require__("./src/app/employer/invite-employees/invite-employees.component.html"),
            styles: [__webpack_require__("./src/app/employer/invite-employees/invite-employees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__common_common_service_service__["a" /* CommonServiceService */]])
    ], InviteEmployeesComponent);
    return InviteEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employer/job-add-edit/job-add-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/job-add-edit/job-add-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n <div class=\"content\">\n    <div class=\"clearfix\"></div>\n    <p>Last updated: {{jobData[\"updatedAt\"] | date}}</p>\n    <div class=\"card pad20\">\n        <form class=\"form-horizontal\" method=\"post\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">COVER IMAGE</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" (change)=\"readFile($event)\" type=\"file\" name=\"coverImage\">\n                </div>\n                <br>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">Company Photo</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" (change)=\"readFileCompany($event)\" type=\"file\" name=\"coverImage\">\n                </div>\n                <br>\n            </div>\n            \n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">JOB TITLE</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"jobTitle\" name=\"jobTitle\" placeholder=\"Enter job title\"  value=\"Sales Executive\" required>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">NUMBER OF HIRES</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"requiredNumber\" placeholder=\"How many people do you need to hire ?\" name=\"requiredNumber\" value=\"1\" required=\"\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">JOB TYPE</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"jobType\" [(ngModel)]='jobType' id=\"job-type\" required=\"\">\n                        <option value=\"Full-time\" selected=\"\">Full-time</option>\n                        <option value=\"Part-time\">Part-time</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">INDUSTRY</label><span></span>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"jobIndustry\" [(ngModel)]='jobIndustry' id=\"job-industry\" required=\"\">\n                        <option value=\"Accounting / Finance\">Accounting / Finance</option>\n                        <option value=\"Admin / HR\">Admin / HR</option>\n                        <option value=\"Sales / Marketing\" selected=\"\">Sales / Marketing</option>\n                        <option value=\"Arts Design Media\">Arts Design Media</option>\n                        <option value=\"Computer / Technology\">Computer / Technology</option>\n                        <option value=\"Training and education\">Training and education</option>\n                        <option value=\"Engineering\">Engineering</option>\n                        <option value=\"Service / Logistics\">Service / Logistics</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">SALARY TYPE</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"salaryType\" [(ngModel)]='salaryType' required=\"\">\n                        <option value=\"Per Hour\">Per Hour</option>\n                        <option value=\"Per Month\" selected=\"\">Per Month</option>\n                        <option value=\"Per Project\">Per Project</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">SALARY</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"How much are you willing to pay?\" name=\"salary\" [(ngModel)]='salary' value=\"2000\" required=\"\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">WORKING PERIOD</label>\n                <div class=\"col-sm-5\"><small class=\"strong\">START DATE</small>\n                    <div class=\"input-group datepicker\">\n                        <input type=\"date\" name=\"startDate\" id=\"start-date\" [(ngModel)]='startDate' value=\"2018-01-24\" required=\"\">\n                    </div>\n                </div>\n                <div class=\"col-sm-5\" id=\"end-date-wrapper\" style=\"display: none;\"><small class=\"strong\">END DATE</small>\n                    <div class=\"input-group datepicker\">\n                        <input type=\"date\" name=\"endDate\" id=\"end-date\" [(ngModel)]='endDate'>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">WORKING DAYS</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"workPeriod\" [(ngModel)]='workPeriod' required=\"\">\n                        <option value=\"Weekdays\">Weekdays</option>\n                        <option value=\"Weekends\">Weekends</option>\n                        <option value=\"Both weekdays and weekends\" selected=\"\">Both weekdays and weekends</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\" id=\"total-hours-wrap\" style=\"display: none;\">\n                <label class=\"control-label col-sm-2 small\">TOTAL HOURS</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"How many manhours total?\" id=\"total-hours\" [(ngModel)]='totalHours' name=\"totalHours\">\n                </div>\n            </div>\n            <div class=\"form-group\" id=\"working-hours-wrap\">\n                <label class=\"control-label col-sm-2 small strong\">START TIMING</label>\n                <div class=\"col-sm-4\">\n                  <div class=\"input-group clockpicker\" (click)=\"openstartTime()\">\n                    <input type=\"text\" value=\"{{startTime}}\">\n                    <span class=\"input-group-addon\">\n                      <span class=\"glyphicon glyphicon-time\"></span>\n                    </span>\n                  </div>\n                </div>\n                <label class=\"control-label col-sm-2 small strong\">END TIMING</label>\n                <div class=\"col-sm-4\">\n                  <div class=\"input-group clockpicker\" (click)=\"openendTime()\">\n                    <input type=\"text\" value=\"{{endTime}}\">\n                    <span class=\"input-group-addon\">\n                          <span class=\"glyphicon glyphicon-time\"></span>\n                    </span>\n                  </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">EXPIRATION DATE OF JOB</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"jobExpiration\" id=\"job-expiration\" [(ngModel)]='jobExpiration' required=\"\">\n                        <option value=\"At the start of working period\" selected=\"\">At the start of working period</option>\n                        <option value=\"At the end of working period\">At the end of working period</option>\n                        <option value=\"After 2 months\">After 2 months</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">LOCATION OF WORK</label> \n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Work location\" name=\"location\" [(ngModel)]='location' value=\"JCUBE Mall\" required=\"\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">LOCATION REGION</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"workRegion\" [(ngModel)]='workRegion' required=\"\">\n                        <option value=\"North\">North</option>\n                        <option value=\"West\" selected=\"\">West</option>\n                        <option value=\"East\">East</option>\n                        <option value=\"Central\">Central</option>\n                        <option value=\"Central Business District\">Central Business District</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">BACKGROUND OF JOB</label>\n                <div class=\"col-sm-10\">\n                    <textarea class=\"form-control\" rows=\"5\" placeholder=\"Give a description of what your company does or a message to attract employees\" name=\"description\" [(ngModel)]='description' required=\"\">Help company to bring in achieve sales targets month on month</textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">RESPONSIBILITIES</label>\n                <div class=\"col-sm-10\">\n                    <textarea class=\"form-control\" rows=\"5\" placeholder=\"What are your employees expected to do ?\" [(ngModel)]='jobRole' name=\"jobRole\"></textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">REQUIREMENTS</label>\n                <div class=\"col-sm-10\">\n                    <textarea class=\"form-control\" rows=\"5\" placeholder=\"What basic requirements should your employee have ?\" [(ngModel)]='requirement' name=\"requirement\">Requirements</textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">ARE YOU EMPLOYING FOR YOURSELF?</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"selfEmployer\" [(ngModel)]='selfEmployer' required=\"\">\n                        <option value=\"true\">Yes</option>\n                        <option value=\"false\" selected=\"\">No</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">COMPANY NAME</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\" name=\"companyName\" [(ngModel)]='companyName' value=\"Jobbunny\" required=\"\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">COMPANY WEBSITE</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"url\" name=\"companyWebsite\" [(ngModel)]='companyWebsite' value=\"Https://www.jobbunny.com\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">RECRUITER NAME</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\" name=\"employerName\" [(ngModel)]='employerName' value=\"Gary\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">RECRUITER HANDPHONE</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\"  name=\"employerPhone\" [(ngModel)]='employerPhone' value=\"82330317\">\n                </div>\n            </div>\n            <button class=\"btn-lg btn-warning pull-right\" (click)=\"updateJobPost()\">Save updates</button>\n        </form>\n        <br>\n        <br>\n    </div>\n  </div>  "

/***/ }),

/***/ "./src/app/employer/job-add-edit/job-add-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobAddEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular5_toaster_angular5_toaster__ = __webpack_require__("./node_modules/angular5-toaster/angular5-toaster.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_amazing_time_picker__ = __webpack_require__("./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 // this line you need
var JobAddEditComponent = /** @class */ (function () {
    function JobAddEditComponent(userService, route, atp, toasterService) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.atp = atp;
        this.toasterService = toasterService;
        this.jobTitle = '';
        this.requiredNumber = '';
        this.jobType = '';
        this.jobIndustry = '';
        this.salaryType = '';
        this.salary = '';
        this.startDate = '';
        this.endDate = '';
        this.workPeriod = '';
        this.totalHours = '';
        this.jobExpiration = '';
        this.location = '';
        this.workRegion = '';
        this.description = '';
        this.jobRole = '';
        this.requirement = '';
        this.selfEmployer = '';
        this.companyName = '';
        this.companyWebsite = '';
        this.employerName = '';
        this.employerPhone = '';
        this.startTime = '';
        this.endTime = '';
        this.coverImage = '';
        this.companyImage = '';
        this.jobData = {};
        this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
        });
        this.userService.getEmployerDetails(this.userId).subscribe(function (res) {
            _this.jobData = res.job;
            _this.setValues(_this.jobData);
        }, function (err) {
            console.log("err", err);
        });
    }
    JobAddEditComponent.prototype.ngOnInit = function () {
    };
    JobAddEditComponent.prototype.setValues = function (jobData) {
        this.jobTitle = this.jobData["jobTitle"];
        this.requiredNumber = this.jobData["requiredNumber"];
        this.jobType = this.jobData["jobType"];
        this.jobIndustry = this.jobData["jobIndustry"];
        this.salaryType = this.jobData["salaryType"];
        this.salary = this.jobData["salary"];
        this.startDate = this.jobData["startDate"];
        this.endDate = this.jobData["endDate"];
        this.workPeriod = this.jobData["workPeriod"];
        this.totalHours = this.jobData["totalHours"];
        this.jobExpiration = this.jobData["jobExpiration"];
        this.location = this.jobData["location"];
        this.workRegion = this.jobData["workRegion"];
        this.description = this.jobData["description"];
        this.jobRole = this.jobData["jobRole"];
        this.requirement = this.jobData["requirement"];
        this.selfEmployer = this.jobData["selfEmployer"];
        this.companyName = this.jobData["companyName"];
        this.companyWebsite = this.jobData["companyWebsite"];
        this.employerName = this.jobData["employerName"];
        this.employerPhone = this.jobData["employerPhone"];
        this.startTime = this.jobData["startTime"];
        this.endTime = this.jobData["endTime"];
    };
    JobAddEditComponent.prototype.updateJobPost = function () {
        var _this = this;
        console.log("cover image", this.coverImage);
        var form = new FormData();
        form.append("jobTitle", this.jobTitle);
        form.append("jobType", this.jobType);
        form.append("jobIndustry", this.jobIndustry);
        form.append("salaryType", this.salaryType);
        form.append("salary", this.salary);
        form.append("startDate", this.startDate);
        form.append("startTime", this.startTime);
        form.append("endTime", this.endTime);
        form.append("endDate", this.endDate);
        form.append("totalHours", this.totalHours);
        form.append("jobExpiration", this.jobExpiration);
        form.append("requiredNumber", this.requiredNumber);
        form.append("workPeriod", this.workPeriod);
        form.append("workRegion", this.workRegion);
        form.append("location", this.location);
        form.append("description", this.description);
        form.append("jobRole", this.jobRole);
        form.append("requirement", this.requirement);
        form.append("selfEmployer", this.selfEmployer);
        form.append("companyName", this.companyName);
        form.append("companyWebsite", this.companyWebsite);
        form.append("employerName", this.employerName);
        form.append("employerPhone", this.employerPhone);
        form.append("coverImage", this.coverImage);
        this.userService.updateJobPost(this.jobData["_id"], form).subscribe(function (res) {
            return _this.toasterService.pop('success', 'Success', 'Updated Successfully done');
        }, function (err) {
            return _this.toasterService.pop('error', 'Error', err.message);
        });
    };
    JobAddEditComponent.prototype.openstartTime = function () {
        var _this = this;
        console.log("asdasd");
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.startTime = time;
        });
    };
    JobAddEditComponent.prototype.openendTime = function () {
        var _this = this;
        var amazingTimePickers = this.atp.open();
        amazingTimePickers.afterClose().subscribe(function (time) {
            _this.endTime = time;
        });
    };
    JobAddEditComponent.prototype.readFile = function (event) {
        this.coverImage = event.target.value;
    };
    JobAddEditComponent.prototype.readFileCompany = function (event) {
        this.companyImage = event.target.value;
        console.log("companyImage", this.companyImage);
    };
    JobAddEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job-add-edit',
            template: __webpack_require__("./src/app/employer/job-add-edit/job-add-edit.component.html"),
            styles: [__webpack_require__("./src/app/employer/job-add-edit/job-add-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4_amazing_time_picker__["b" /* AmazingTimePickerService */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular5_toaster_angular5_toaster__["b" /* ToasterService */]])
    ], JobAddEditComponent);
    return JobAddEditComponent;
}());



/***/ }),

/***/ "./src/app/employer/job-management/job-management.component.css":
/***/ (function(module, exports) {

module.exports = ".row .col-md-3:first-child{\n    clear: both;\n}\n\n.row {\n    margin-right: -15px;\n    margin-left: -15px;\n}\n\n.active{\n    padding: 7% 7%;\n    background: #ffc500;\n    color: #fff;\n    word-break:break-word;\n}\n\n.active .gray {\n    color:#fff;\n}\n\n.content{\n    padding: 30px 15px;\n    min-height: calc(100% - 123px);\n}"

/***/ }),

/***/ "./src/app/employer/job-management/job-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [hidden]=\"!jobListing\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"panel pad10\">\n        <p class=\"large strong\">Job Management</p>\n        <div class=\"filter\">\n          <span></span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <p class=\"strong\">{{jobs ? jobs.length : 0}} matches </p>\n          </div>\n          <div class=\"col-md-9\">\n            <div class=\"pull-right\">\n              <a class=\"dropdown-toggle\" data-toggle=\"collapse\" aria-expanded=\"\">\n                <i class=\"fa fa-filter\"></i>\n                <span>FILTER</span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"open in\" id=\"filters\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <strong>STATUS</strong>\n              <ul class=\"list-unstyled\">\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobStatus'] && filter['jobStatus'] === 'open'}\" (click)=\"toggleFilter('jobStatus','open')\">\n                  <a class=\"gray\">open</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobStatus'] && filter['jobStatus'] === 'urgent'}\" (click)=\"toggleFilter('jobStatus','urgent')\">\n                  <a class=\"gray\">urgent</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobStatus'] && filter['jobStatus'] === 'completed'}\" (click)=\"toggleFilter('jobStatus','completed')\">\n                  <a class=\"gray\">completed</a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-md-2 clearfix filterType\">\n              <strong>JOB TYPE</strong>\n              <ul class=\"list-unstyled\">\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobType'] && filter['jobType'] === 'Part-time'}\" (click)=\"toggleFilter('jobType','Part-time')\">\n                  <a class=\"gray\">Part-time</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobType'] && filter['jobType'] === 'Full-time'}\" (click)=\"toggleFilter('jobType','Full-time')\">\n                  <a class=\"gray\">Full-time</a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-md-2\" [hidden]=\"!filter['jobType']\">\n              <strong>INDUSTRY</strong>\n              <ul class=\"list-unstyled\" [hidden]=\"filter['jobType'] !== 'Part-time'\">\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Events'}\" (click)=\"toggleFilter('jobIndustry','Events')\">\n                  <a class=\"gray\">Events</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Sales'}\" (click)=\"toggleFilter('jobIndustry','Sales')\">\n                  <a class=\"gray\">Sales</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Data Entry'}\" (click)=\"toggleFilter('jobIndustry','Data Entry')\">\n                  <a class=\"gray\">Data Entry</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Food & Beverage'}\" (click)=\"toggleFilter('jobIndustry','Food & Beverage')\">\n                  <a class=\"gray\">Food & Beverage</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Logistics'}\" (click)=\"toggleFilter('jobIndustry','Logistics')\">\n                  <a class=\"gray\">Logistics</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Retail'}\" (click)=\"toggleFilter('jobIndustry','Retail')\">\n                  <a class=\"gray\">Retail</a>\n                </li>\n              </ul>\n              <ul class=\"list-unstyled\" [hidden]=\"filter['jobType'] !== 'Full-time'\">\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Accounting / Finance'}\" (click)=\"toggleFilter('jobIndustry','Accounting / Finance')\">\n                  <a class=\"gray\">Accounting / Finance</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Admin / HR'}\" (click)=\"toggleFilter('jobIndustry','Admin / HR')\">\n                  <a class=\"gray\">Admin / HR</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Sales / Marketing'}\" (click)=\"toggleFilter('jobIndustry','Sales / Marketing')\">\n                  <a class=\"gray\">Sales / Marketing</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Arts Design Media'}\" (click)=\"toggleFilter('jobIndustry','Arts Design Media')\">\n                  <a class=\"gray\">Arts Design Media</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Computer/Technology'}\" (click)=\"toggleFilter('jobIndustry','Computer/Technology')\">\n                  <a class=\"gray\">Computer/Technology</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Training & education'}\" (click)=\"toggleFilter('jobIndustry','Training & education')\">\n                  <a class=\"gray\">Training & education</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Engineering'}\" (click)=\"toggleFilter('jobIndustry','Engineering')\">\n                  <a class=\"gray\">Engineering</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': filter['jobIndustry'] && filter['jobIndustry'] === 'Service / Logistics'}\" (click)=\"toggleFilter('jobIndustry','Service / Logistics')\">\n                  <a class=\"gray\">Service / Logistics</a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-md-2\">\n              <strong>Date</strong>\n              <ul class=\"list-unstyled\">\n                <li class=\"top10\" [ngClass]=\"{'active': sort['createdAt'] && sort['createdAt'] === 'latest'}\" (click)=\"toggleSort('createdAt', 'latest')\">\n                  <a class=\"gray\">latest</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': sort['createdAt'] && sort['createdAt'] === 'earliest'}\" (click)=\"toggleSort('createdAt', 'earliest')\">\n                  <a class=\"gray\">earliest</a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-md-2\">\n              <strong>Carrots</strong>\n              <ul class=\"list-unstyled\">\n                <li class=\"top10\" [ngClass]=\"{'active': sort[''] && sort['Date'] === 'latest'}\" (click)=\"toggleSort('Date','latest')\">\n                  <a class=\"gray\">most spent</a>\n                </li>\n                <li class=\"top10\" [ngClass]=\"{'active': sort['Date'] && sort['Date'] === 'earliest'}\" (click)=\"toggleSort('Date','earliest')\">\n                  <a class=\"gray\">least spent</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <a></a>\n        <div class=\"pad10\">\n          <a></a>\n          <div *ngFor=\"let job of jobs;\">\n            <hr>\n            <div class=\"row\">\n                 <!-- (click)=\"rowSelect(job)\" -->\n                 \n              <a [routerLink]=\"['./']\" [queryParams]=\"{ id:job._id }\">\n                <div class=\"col-md-2\">\n                  <div class=\"strong black capitalize\">{{job['companyName']}}</div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"strong capitalize black\">{{job['jobTitle']}}</div>\n                  <span class=\"green\"> ${{job['salary']}} {{job['salaryType']}}</span>\n                  <p class=\"black\">Date created: {{job['createdAt'] | date}}</p>\n                </div>\n                <div class=\"col-md-1\">\n                  <h6 class=\"gray\">JOB ID</h6>\n                  <span class=\"black\" style=\"word-wrap: break-word;\">{{job['_id']}}</span>\n                </div>\n                <div class=\"col-md-2\">\n                  <h6 class=\"gray\">WORK START</h6>\n                  <p class=\"black\">{{job['startDate'] | date}}</p>\n                </div>\n                <div class=\"col-md-2\">\n                  <h6 class=\"gray\">FULFILMENT</h6>\n                  <span class=\"black\">Required {{job['requiredNumber']}}</span>\n                  <br>\n                  <span class=\"black\">Shortlisted {{job['shortlisted'] ? job['shortlisted'].length : 0}}</span>\n                </div>\n              </a>\n              <div class=\"col-md-2\">\n                <a>\n                  <strong class=\"pull-right badge-green\" [hidden]=\"job['jobStatus'] === 'urgent' || job['jobStatus'] === 'completed'\">Open</strong>\n                  <strong class=\"pull-right badge-gray\" [hidden]=\"job['jobStatus'] !== 'completed'\">Completed</strong>\n                  <strong class=\"pull-right badge-red\" [hidden]=\"job['jobStatus'] !== 'urgent'\">Urgent</strong>\n                  <br>\n                  <br>\n                </a>\n                <a class=\"pull-right top10\">Mark as {{job['jobStatus'] === 'open' ? 'completed' : 'open' }}</a>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <h6 class=\"gray\">Invited ({{job && job['invited'] ? job['invited'].length : 0 }})</h6>\n                <span *ngFor=\"let invited of job['invited']; let i = index\" [attr.data-index]=\"i\">\n                  <img *ngIf=\"i < 3\" [src]=\"invited['worker']['profilePic']||'assets/img/logo.png'\" height=\"30\" width=\"30\" title=\"{{applied['worker']['first name']}}\" class=\"img-circle\">\n                </span>\n              </div>\n              <div class=\"col-md-3\">\n                <h6 class=\"gray\">Applied ({{ job && job['applied'] ? job['applied'].length : 0}})</h6>\n                <span *ngFor=\"let applied of job['applied']; let i = index\" [attr.data-index]=\"i\">\n                  <img *ngIf=\"i < 3\" [src]=\"applied['worker']['profilePic']||'assets/img/logo.png'\" height=\"30\" width=\"30\" title=\"{{applied['worker']['first name']}}\" class=\"img-circle\">\n                </span>\n              </div>\n              <div class=\"col-md-3\">\n                <h6 class=\"gray\">Shortlisted ({{job && job['shortlisted'] ? job['shortlisted'].length : 0}})</h6>\n                <span *ngFor=\"let shortlisted of job['shortlisted']; let i = index\" [attr.data-index]=\"i\">\n                  <img *ngIf=\"i < 3\" [src]=\"shortlisted['worker']['profilePic']||'assets/img/logo.png'\" height=\"30\" width=\"30\" title=\"{{applied['worker']['first name']}}\" class=\"img-circle\">\n                </span>\n              </div>\n              <div class=\"col-md-3\">\n                <a class=\"btn btn-orange btn-block btn-warning\" [routerLink]=\"['../invite-employees', job['_id']]\">Invite more employees</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"content\" [hidden]=\"!viewJob\">\n  <div class=\"clearfix\"></div>\n  <div class=\"content-wrap\">\n    <div class=\"panel\">\n      <div class=\"pad20\">\n        <p class=\"large strong capitalize\">Sales Executive\n          <span class=\"left20\">\n            <a [routerLink]=\"['../job-details',jobData._id]\">\n              <i class=\"fa fa-edit small gray\"></i>\n            </a>\n            <a class=\"left20\" (click)=\"deleteJobPost(jobData._id)\" onclick=\"return confirm('delete now?');\">\n              <i class=\"fa fa-trash small gray\"></i>\n            </a>\n          </span>\n          <span class=\"left20\">\n           <a class=\"small gray\" (click)=\"changeJobStatus(jobData._id,jobData.jobStatus)\">Mark as {{jobData['jobStatus'] === 'completed' ? 'open':'completed' }}</a>\n          </span>\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                <i class=\"fa fa-map-marker\"></i>\n                <span>{{jobData['workRegion']}},{{jobData['location']}}</span>\n                <br>\n                <i class=\"fa fa-clock-o\"></i>\n                <span>{{jobData['jobType']}},{{jobData['startTime']}} - {{jobData['endTime']}},{{jobData[\"workPeriod\"]}}</span>\n                <br>\n                <i class=\"fa fa-calendar\"></i>\n               <span>Starts on {{jobData['startDate'] | date}}, Ends onInvalid date</span>\n                <br>\n                <img class=\"img-fit\" src=\"assets/img/carrot.png\" height=\"30\" widht=\"30\">\n                <span>10 carrots spent successfully</span>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"pull-right medium green\"> ${{jobData[\"salary\"]}}/{{jobData[\"salaryType\"]}}</div>\n              </div>\n            </div>\n            <h4>Job Description</h4>\n            <p>{{ jobData[\"description\"] }}</p>\n            <h4>Duties and Responsibilities</h4>\n            <p>N/A</p>\n            <h4>Requirements</h4>\n            <p>Requirements</p>\n            <div class=\"row\">\n              <div class=\"col-md-1\">\n                <h5>\n                  <i class=\"fa fa-3x fa-lightbulb-o\"></i>\n                </h5>\n              </div>\n              <div class=\"col-md-8\">\n                <h5 class=\"strong gray\">PRO-TIP</h5>\n                <div>Not getting applications? you may not be highlighting the best points about working with your company. Be\n                  more descriptive about pros of working in your company :)</div>\n              </div>\n              <div class=\"col-md-3\">\n                <h1></h1>\n                <a class=\"btn btn-orange btn-block\" href=\"/employer/workers/invite/5a685478d60e310014dab89b\">Invite Employees</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 border-left\">\n            <div class=\"align-center bottom10\">\n              <div class=\"medium strong\">JOBBUNNY</div>\n              <br>\n              <div class=\"pad20\">\n                <img class=\"img-circle pull-left\" src=\"assets/img/logo.png\" height=\"40\" width=\"40\">\n                <small class=\"strong top10 left10 pull-left\">Posted by Gary</small>\n              </div>\n            </div>\n            <br>\n            <div class=\"top20\">\n              <div class=\"medium strong\">Job Post activity</div>\n              <h6 class=\"gray\">Invited ( 0 )</h6>\n              <h6 class=\"gray\">Applied ( 0 )</h6>\n              <h6 class=\"gray\">Shortlisted ( 0 )</h6>\n            </div>\n            <br>\n            <div class=\"align-center\">\n              <a class=\"btn btn-blue btn-block\" href=\"\">Share to Group</a>\n              <small class=\"strong\">Share to groups for more results</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/employer/job-management/job-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amazing_time_picker__ = __webpack_require__("./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular5_toaster_angular5_toaster__ = __webpack_require__("./node_modules/angular5-toaster/angular5-toaster.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // this line you need

var JobManagementComponent = /** @class */ (function () {
    function JobManagementComponent(userService, route, atp, toasterService, router) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.atp = atp;
        this.toasterService = toasterService;
        this.router = router;
        this.jobsList = [];
        this.jobs = [];
        this.filter = {};
        this.filterCount = 0;
        this.jobData = {};
        this.editJobPost = false;
        this.viewJob = false;
        this.jobListing = true;
        this.jobTitle = '';
        this.requiredNumber = '';
        this.jobType = '';
        this.jobIndustry = '';
        this.salaryType = '';
        this.salary = '';
        this.startDate = '';
        this.endDate = '';
        this.workPeriod = '';
        this.totalHours = '';
        this.jobExpiration = '';
        this.location = '';
        this.workRegion = '';
        this.description = '';
        this.jobRole = '';
        this.requirement = '';
        this.selfEmployer = '';
        this.companyName = '';
        this.companyWebsite = '';
        this.employerName = '';
        this.employerPhone = '';
        this.startTime = '';
        this.endTime = '';
        this.coverImage = '';
        this.route.queryParams.subscribe(function (queryParams) {
            console.log("queryParams", queryParams);
            if (queryParams['id']) {
                _this.userService.getEmployerDetails(queryParams['id']).subscribe(function (res) {
                    console.log("response", res);
                    _this.jobData = res.job;
                }, function (err) {
                    console.log("err", err);
                });
                _this.jobListing = false;
                _this.viewJob = true;
            }
            else {
                _this.jobListing = true;
                _this.viewJob = false;
            }
        });
    }
    JobManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getJobDetails('employer').subscribe(function (res) {
            _this.jobsList = res.jobs;
            console.log("res", _this.jobsList);
            _this.route.queryParams.subscribe(function (queryParams) {
                _this.filter = JSON.parse(JSON.stringify(queryParams));
                _this.applyFilter();
            });
        }, function (err) {
            console.log("err", err);
        });
    };
    JobManagementComponent.prototype.toggleFilter = function (key, value) {
        if (key === 'jobType' && this.filter['jobIndustry']) {
            delete this.filter['jobIndustry'];
            this.filterCount--;
        }
        if (this.filter[key] === value) {
            delete this.filter[key];
            this.filterCount--;
        }
        else {
            if (!this.filter[key]) {
                this.filterCount++;
            }
            this.filter[key] = value;
        }
        this.applyFilter();
    };
    JobManagementComponent.prototype.applyFilter = function () {
        var self = this;
        if (Object.keys(this.filter).length === 0) {
            self.jobs = Object.assign([], this.jobsList);
            return;
        }
        this.jobs = this.jobsList.filter(function (job) {
            for (var key in self.filter) {
                if (self.filter[key] !== job[key]) {
                    return false;
                }
            }
            return true;
        });
    };
    JobManagementComponent.prototype.clearFilter = function () {
        this.filter = {};
        this.filterCount = 0;
        this.jobs = Object.assign([], this.jobsList);
    };
    // rowSelect(rowData) {
    //   console.log("rowData", rowData)
    //   this.jobListing = false;
    //   this.viewJob = true;
    //   this.jobData = rowData;
    // }
    // showEdit() {
    //   console.log("hello", this.jobData)
    //   this.jobListing = false;
    //   this.viewJob = false;
    //   this.editJobPost = true;
    //   this.jobTitle = this.jobData["jobTitle"];
    //   this.requiredNumber = this.jobData["requiredNumber"];
    //   this.jobType = this.jobData["jobType"];
    //   this.jobIndustry = this.jobData["jobIndustry"];
    //   this.salaryType = this.jobData["salaryType"];
    //   this.salary = this.jobData["salary"];
    //   this.startDate = this.jobData["startDate"];
    //   this.endDate = this.jobData["endDate"];
    //   this.workPeriod = this.jobData["workPeriod"];
    //   this.totalHours = this.jobData["totalHours"];
    //   this.jobExpiration = this.jobData["jobExpiration"];
    //   this.location = this.jobData["location"];
    //   this.workRegion = this.jobData["workRegion"];
    //   this.description = this.jobData["description"];
    //   this.jobRole = this.jobData["jobRole"];
    //   this.requirement = this.jobData["requirement"];
    //   this.selfEmployer = this.jobData["selfEmployer"];
    //   this.companyName = this.jobData["companyName"];
    //   this.companyWebsite = this.jobData["companyWebsite"];
    //   this.employerName = this.jobData["employerName"];
    //   this.employerPhone = this.jobData["employerPhone"];
    //   this.startTime = this.jobData["startTime"];
    //   this.endTime = this.jobData["endTime"];
    // }
    JobManagementComponent.prototype.sort = function (option) {
        var order = 0;
        if (option === 'Salary: Low to High') {
            order = 1;
        }
        else if (option === 'Salary: High to Low') {
            order = -1;
        }
        if (order === 0) {
            return this.applyFilter();
        }
        this.jobs.sort(function (a, b) {
            return order * (a['salary'] - b['salary']);
        });
    };
    JobManagementComponent.prototype.openstartTime = function () {
        var _this = this;
        console.log("asdasd");
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.startTime = time;
        });
    };
    JobManagementComponent.prototype.openendTime = function () {
        var _this = this;
        var amazingTimePickers = this.atp.open();
        amazingTimePickers.afterClose().subscribe(function (time) {
            _this.endTime = time;
        });
    };
    JobManagementComponent.prototype.readFile = function (event) {
        this.coverImage = event.target.value;
    };
    JobManagementComponent.prototype.deleteJobPost = function (id) {
        var _this = this;
        this.userService.deleteJobPost(id).subscribe(function (res) {
            _this.router.navigate(["employer/job-management"]);
            return _this.toasterService.pop('success', 'Success', res.message);
        }, function (err) {
            console.log("err", err);
            return _this.toasterService.pop('success', 'Success', err);
        });
    };
    JobManagementComponent.prototype.changeJobStatus = function (id, status) {
        var _this = this;
        var statusChanged;
        if (status == "open") {
            statusChanged = "completed";
        }
        else {
            statusChanged = "open";
        }
        this.userService.updateJobStatus(id, statusChanged).subscribe(function (res) {
            _this.router.navigate(["employer/job-management"]);
            return _this.toasterService.pop('success', 'Success', res.message);
        }, function (err) {
            console.log("err", err);
            return _this.toasterService.pop('success', 'Success', err);
        });
    };
    JobManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job-management',
            template: __webpack_require__("./src/app/employer/job-management/job-management.component.html"),
            styles: [__webpack_require__("./src/app/employer/job-management/job-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3_amazing_time_picker__["b" /* AmazingTimePickerService */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular5_toaster_angular5_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], JobManagementComponent);
    return JobManagementComponent;
}());



/***/ }),

/***/ "./src/app/employer/job-overview/job-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"large strong\">Job Overview</div>\n      <p>The status of your job posts</p>\n      <div class=\"row tile_count\">\n        <div class=\"col-md-3 col-xs-6\" [routerLink]=\"['../job-management']\" [queryParams]=\"{jobStatus :'open'}\">\n          <a >\n            <div class=\"panel dash-card-light-green\">\n              <h3 class=\"strong\">{{jobCount[\"openJobsCount\"]}}</h3>\n              <span>Open Jobs</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 col-xs-6\" [routerLink]=\"['../job-management']\" [queryParams]=\"{jobStatus :'urgent'}\">\n          <a >\n            <div class=\"panel dash-card-red\">\n              <h3 class=\"strong\">{{jobCount[\"urgentJobsCount\"]}}</h3>\n              <span>Urgent Jobs</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 col-xs-6\" [routerLink]=\"['../job-management']\" [queryParams]=\"{jobStatus :'completed'}\">\n          <a >\n            <div class=\"panel dash-card-gray\">\n              <h3 class=\"strong\">{{jobCount[\"completedJobsCount\"]}}</h3>\n              <span>Completed Jobs</span>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 col-xs-6\">\n          <a >\n            <div class=\"panel dash-card-orange\">\n              <h3 class=\"strong\">{{carrots['available']}}</h3>\n              <span>Carrots Available</span>\n              <br>\n              <small class=\"strong\">{{carrots['pending']}} carrots in transit</small>\n            </div>\n          </a>\n        </div>\n      </div>\n      <br>\n      <div class=\"large strong\">Employee Overview</div>\n      <p>The status of your employee activities</p>\n      <div class=\"row\">\n        <div class=\"col-md-3 col-xs-6\" [routerLink]=\"['../employee-management']\" [queryParams]=\"{matchStatus : 'invited'}\">\n          <a >\n            <div class=\"dash-card-white panel\">\n              <h3 class=\"strong\">{{jobCount[\"invitedWorkersCount\"]}}</h3>\n              <div class=\"medium\">Invitations</div>\n              <small class=\"strong\">sent</small>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 col-xs-6\" [routerLink]=\"['../employee-management']\" [queryParams]=\"{matchStatus : 'applied'}\">\n          <a >\n            <div class=\"dash-card-white panel\">\n              <h3 class=\"strong\">{{jobCount[\"acceptedWorkersCount\"]}}</h3>\n              <div class=\"medium\">Applications</div>\n              <small class=\"strong\">to be accepted</small>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 col-xs-6\" [routerLink]=\"['../employee-management']\" [queryParams]=\"{matchStatus : 'shortlisted'}\">\n          <a >\n            <div class=\"dash-card-white panel\">\n              <h3 class=\"strong\">{{jobCount[\"shortlistedWorkersCount\"]}}</h3>\n              <div class=\"medium\">Shortlisted</div>\n              <small class=\"strong\">claim 5 carrots back when you update your actions</small>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 col-xs-6\">\n          <a >\n            <div class=\"dash-card-white panel\">\n              <h3 class=\"strong\">{{jobCount[\"acceptedWorkersCount\"]}}</h3>\n              <div class=\"medium\">Employed</div>\n              <small class=\"strong\">successfully</small>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employer/job-overview/job-overview.component.scss":
/***/ (function(module, exports) {

module.exports = ".panel {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/employer/job-overview/job-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_service__ = __webpack_require__("./src/app/user-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobOverviewComponent = /** @class */ (function () {
    function JobOverviewComponent(userService) {
        this.userService = userService;
        this.jobCount = {};
        this.carrots = {};
    }
    JobOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getDashboardDetail("employer").subscribe(function (res) {
            _this.jobCount = res.jobCount;
            console.log("res", _this.jobCount);
        }, function (err) {
            console.log("err", err);
        });
        this.userService.userDetail.subscribe(function (user) {
            _this.carrots = user['carrots'];
        });
    };
    JobOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job-overview',
            template: __webpack_require__("./src/app/employer/job-overview/job-overview.component.html"),
            styles: [__webpack_require__("./src/app/employer/job-overview/job-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserService */]])
    ], JobOverviewComponent);
    return JobOverviewComponent;
}());



/***/ }),

/***/ "./src/app/employer/job/job.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"content-wrap\">\n    <div class=\"panel\">\n      <div class=\"pad20\">\n        <p class=\"large strong capitalize\">Sales Executive\n          <span class=\"left20\">\n            <a href=\"/employer/jobs/5a685478d60e310014dab89b/edit\">\n              <i class=\"fa fa-edit small gray\"></i>\n            </a>\n            <a class=\"left20\" href=\"/api/jobs/delete/5a685478d60e310014dab89b\" onclick=\"return confirm('delete now?');\">\n              <i class=\"fa fa-trash small gray\"></i>\n            </a>\n          </span>\n          <span class=\"left20\">\n            <a class=\"small gray\" href=\"/api/jobs/mark/5a685478d60e310014dab89b?status=completed\">Mark as completed</a>\n          </span>\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                <i class=\"fa fa-map-marker\"></i>\n                <span>West, JCUBE Mall</span>\n                <br>\n                <i class=\"fa fa-clock-o\"></i>\n                <span>Full-time, 09:30 - 18:30, Both weekdays and weekends</span>\n                <br>\n                <i class=\"fa fa-calendar\"></i>\n                <span>Starts on 01/24/2018, Ends onInvalid date</span>\n                <br>\n                <img class=\"img-fit\" src=\"/img/carrot.png\" height=\"30\" widht=\"30\">\n                <span>10 carrots spent successfully</span>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"pull-right medium green\"> $2000/Per Month</div>\n              </div>\n            </div>\n            <h4>Job Description</h4>\n            <p>Help company to bring in achieve sales targets month on month</p>\n            <h4>Duties and Responsibilities</h4>\n            <p>N/A</p>\n            <h4>Requirements</h4>\n            <p>Requirements</p>\n            <div class=\"row\">\n              <div class=\"col-md-1\">\n                <h5>\n                  <i class=\"fa fa-3x fa-lightbulb-o\"></i>\n                </h5>\n              </div>\n              <div class=\"col-md-8\">\n                <h5 class=\"strong gray\">PRO-TIP</h5>\n                <div>Not getting applications? you may not be highlighting the best points about working with your company. Be\n                  more descriptive about pros of working in your company :)</div>\n              </div>\n              <div class=\"col-md-3\">\n                <h1></h1>\n                <a class=\"btn btn-orange btn-block\" href=\"/employer/workers/invite/5a685478d60e310014dab89b\">Invite Employees</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 border-left\">\n            <div class=\"align-center bottom10\">\n              <div class=\"medium strong\">JOBBUNNY</div>\n              <br>\n              <div class=\"pad20\">\n                <img class=\"img-circle pull-left\" src=\"/img/logo.png\" height=\"40\" width=\"40\">\n                <small class=\"strong top10 left10 pull-left\">Posted by Gary</small>\n              </div>\n            </div>\n            <br>\n            <div class=\"top20\">\n              <div class=\"medium strong\">Job Post activity</div>\n              <h6 class=\"gray\">Invited ( 0 )</h6>\n              <h6 class=\"gray\">Applied ( 0 )</h6>\n              <h6 class=\"gray\">Shortlisted ( 0 )</h6>\n            </div>\n            <br>\n            <div class=\"align-center\">\n              <a class=\"btn btn-blue btn-block\" href=\"\">Share to Group</a>\n              <small class=\"strong\">Share to groups for more results</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employer/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobComponent = /** @class */ (function () {
    function JobComponent() {
    }
    JobComponent.prototype.ngOnInit = function () {
    };
    JobComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job',
            template: __webpack_require__("./src/app/employer/job/job.component.html"),
            styles: [__webpack_require__("./src/app/employer/job/job.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/employer/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <p class=\"large strong\">Notifications</p>\n      <div class=\"panel pad10\">\n        <a href=\"/employer/workers/5a5db124a17df86089392b05?notificationId=5a8fed2956c57f00144ce70a\">\n          <i class=\"fa fa-bell green\"></i>\n          <span> Gary Lim was invited to your job.</span>\n        </a>\n        <div class=\"pull-right\">\n          <span>13 days ago</span>\n        </div>\n      </div>\n      <div class=\"panel pad10\">\n        <a href=\"/employer/workers/5a5db124a17df86089392b05?notificationId=5a8fed2456c57f00144ce709\">\n          <i class=\"fa fa-bell green\"></i>\n          <span> Gary Lim was invited to your job.</span>\n        </a>\n        <div class=\"pull-right\">\n          <span>13 days ago</span>\n        </div>\n      </div>\n      <div class=\"panel pad10\">\n        <a href=\"/employer/workers/5a5db124a17df86089392b05?notificationId=5a8fed1756c57f00144ce708\">\n          <i class=\"fa fa-bell green\"></i>\n          <span> Gary Lim was invited to your job.</span>\n        </a>\n        <div class=\"pull-right\">\n          <span>13 days ago</span>\n        </div>\n      </div>\n      <div class=\"panel pad10\">\n        <a href=\"/employer/workers/5a5db124a17df86089392b05?notificationId=5a8e96c328d07e0014c774ba\">\n          <i class=\"fa fa-bell green\"></i>\n          <span> Gary Lim was invited to your job.</span>\n        </a>\n        <div class=\"pull-right\">\n          <span>14 days ago</span>\n        </div>\n      </div>\n      <div class=\"panel pad10\">\n        <a href=\"/employer/workers/5a5db124a17df86089392b05?notificationId=5a76cbf7fe657000143c15d7\">\n          <i class=\"fa fa-bell green\"></i>\n          <span> Gary Lim applied to your job.</span>\n        </a>\n        <div class=\"pull-right\">\n          <span>a month ago</span>\n        </div>\n      </div>\n      <div class=\"panel pad10\">\n        <a href=\"/employer/workers/5a5db124a17df86089392b05?notificationId=5a76cab8fe657000143c15d6\">\n          <i class=\"fa fa-bell green\"></i>\n          <span> Gary Lim was invited to your job.</span>\n        </a>\n        <div class=\"pull-right\">\n          <span>a month ago</span>\n        </div>\n      </div>\n      <div class=\"panel pad10\">\n        <a href=\"/employer/workers/5a5db124a17df86089392b05?notificationId=5a76ca87fe657000143c15d5\">\n          <i class=\"fa fa-bell green\"></i>\n          <span> Gary Lim was invited to your job.</span>\n        </a>\n        <div class=\"pull-right\">\n          <span>a month ago</span>\n        </div>\n      </div>\n      <div class=\"panel pad10\">\n        <a href=\"/employer/workers/5a5db124a17df86089392b05?notificationId=5a76ca6dfe657000143c15d4\">\n          <i class=\"fa fa-bell green\"></i>\n          <span> Gary Lim applied to your job.</span>\n        </a>\n        <div class=\"pull-right\">\n          <span>a month ago</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employer/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/employer/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/employer/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/employer/review-employees/review-employees.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/review-employees/review-employees.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  review-employees works!\n</p>\n"

/***/ }),

/***/ "./src/app/employer/review-employees/review-employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewEmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewEmployeesComponent = /** @class */ (function () {
    function ReviewEmployeesComponent() {
    }
    ReviewEmployeesComponent.prototype.ngOnInit = function () {
    };
    ReviewEmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review-employees',
            template: __webpack_require__("./src/app/employer/review-employees/review-employees.component.html"),
            styles: [__webpack_require__("./src/app/employer/review-employees/review-employees.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewEmployeesComponent);
    return ReviewEmployeesComponent;
}());



/***/ })

});
//# sourceMappingURL=employer.module.chunk.js.map