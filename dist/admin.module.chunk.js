webpackJsonp(["admin.module"],{

/***/ "./src/app/admin/account-settings/account-settings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/account-settings/account-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"clearfix\"></div>\n    <div class=\"container-fluid\">\n      <p>\n        <span class=\"medium strong\">Account Settings</span>\n      </p>\n      <div class=\"card pad20\">\n        <form class=\"form-horizontal\" (ngSubmit)=\"saveAccountSettings(curruntUserDetails)\" #verify=\"ngForm\">\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2 small\">FIRST NAME</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter first name\" name=\"firstName\" [(ngModel)]=\"curruntUserDetails['firstName']\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2 small\">LAST NAME</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter last name\" name=\"lastName\" [(ngModel)]=\"curruntUserDetails['lastName']\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2 small\">EMAIL</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"curruntUserDetails['email']\" required=\"\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2 small\">COMPANY NAME</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter your company name\" name=\"companyName\" [(ngModel)]=\"curruntUserDetails['companyName']\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2 small\">PROFILE PIC</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" type=\"file\" name=\"profilePic\" (change)=\"fileSelected($event)\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2\" for=\"password\">Password</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" id=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"curruntUserDetails['password']\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2\" for=\"password-repeat\">Password Confirmation</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" id=\"password-repeat\" type=\"password\" placeholder=\"Re-enter Password\" name=\"passwordConf\" [(ngModel)]=\"curruntUserDetails['passwordConf']\">\n            </div>\n          </div>\n          <button class=\"btn-lg btn-warning pull-right\" type=\"submit\">Save</button>\n        </form>\n        <br>\n        <br>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/account-settings/account-settings.component.ts":
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
        this.userService.saveProfile(payload, 'admin').subscribe(function (res) {
            console.log('robot ', res);
            _this.router.navigate(['admin/mission']);
        });
    };
    AccountSettingsComponent.prototype.ngOnInit = function () {
    };
    AccountSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__("./src/app/admin/account-settings/account-settings.component.html"),
            styles: [__webpack_require__("./src/app/admin/account-settings/account-settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-job-edit/admin-job-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-job-edit/admin-job-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n <div class=\"content\">\n    <div class=\"clearfix\"></div>\n    <!-- <p>Last updated: {{jobData[\"updatedAt\"] | date}}</p> -->\n    <div class=\"card pad20\">\n        <form class=\"form-horizontal\" method=\"post\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">COVER IMAGE</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" (change)=\"readFile($event)\" type=\"file\" name=\"coverImage\">\n                </div>\n                <br>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">Company Photo</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" (change)=\"readFileCompany($event)\" type=\"file\" name=\"coverImage\">\n                </div>\n                <br>\n            </div>\n            \n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">JOB TITLE</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"jobTitle\" name=\"jobTitle\" placeholder=\"Enter job title\"  value=\"Sales Executive\" required>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">NUMBER OF HIRES</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"requiredNumber\" placeholder=\"How many people do you need to hire ?\" name=\"requiredNumber\" value=\"1\" required=\"\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">JOB TYPE</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"jobType\" [(ngModel)]='jobType' id=\"job-type\" required=\"\">\n                        <option value=\"Full-time\" selected=\"\">Full-time</option>\n                        <option value=\"Part-time\">Part-time</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">INDUSTRY</label><span></span>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"jobIndustry\" [(ngModel)]='jobIndustry' id=\"job-industry\" required=\"\">\n                        <option value=\"Accounting / Finance\">Accounting / Finance</option>\n                        <option value=\"Admin / HR\">Admin / HR</option>\n                        <option value=\"Sales / Marketing\" selected=\"\">Sales / Marketing</option>\n                        <option value=\"Arts Design Media\">Arts Design Media</option>\n                        <option value=\"Computer / Technology\">Computer / Technology</option>\n                        <option value=\"Training and education\">Training and education</option>\n                        <option value=\"Engineering\">Engineering</option>\n                        <option value=\"Service / Logistics\">Service / Logistics</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">SALARY TYPE</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"salaryType\" [(ngModel)]='salaryType' required=\"\">\n                        <option value=\"Per Hour\">Per Hour</option>\n                        <option value=\"Per Month\" selected=\"\">Per Month</option>\n                        <option value=\"Per Project\">Per Project</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">SALARY</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"How much are you willing to pay?\" name=\"salary\" [(ngModel)]='salary' value=\"2000\" required=\"\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">WORKING PERIOD</label>\n                <div class=\"col-sm-5\"><small class=\"strong\">START DATE</small>\n                    <div class=\"input-group datepicker\">\n                        <input type=\"date\" name=\"startDate\" id=\"start-date\" [(ngModel)]='startDate' value=\"2018-01-24\" required=\"\">\n                    </div>\n                </div>\n                <div class=\"col-sm-5\" id=\"end-date-wrapper\" style=\"display: none;\"><small class=\"strong\">END DATE</small>\n                    <div class=\"input-group datepicker\">\n                        <input type=\"date\" name=\"endDate\" id=\"end-date\" [(ngModel)]='endDate'>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">WORKING DAYS</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"workPeriod\" [(ngModel)]='workPeriod' required=\"\">\n                        <option value=\"Weekdays\">Weekdays</option>\n                        <option value=\"Weekends\">Weekends</option>\n                        <option value=\"Both weekdays and weekends\" selected=\"\">Both weekdays and weekends</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\" id=\"total-hours-wrap\" style=\"display: none;\">\n                <label class=\"control-label col-sm-2 small\">TOTAL HOURS</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"number\" placeholder=\"How many manhours total?\" id=\"total-hours\" [(ngModel)]='totalHours' name=\"totalHours\">\n                </div>\n            </div>\n            <div class=\"form-group\" id=\"working-hours-wrap\">\n                <label class=\"control-label col-sm-2 small strong\">START TIMING</label>\n                <div class=\"col-sm-4\">\n                  <div class=\"input-group clockpicker\" (click)=\"openstartTime()\">\n                    <input type=\"text\" value=\"{{startTime}}\">\n                    <span class=\"input-group-addon\">\n                      <span class=\"glyphicon glyphicon-time\"></span>\n                    </span>\n                  </div>\n                </div>\n                <label class=\"control-label col-sm-2 small strong\">END TIMING</label>\n                <div class=\"col-sm-4\">\n                  <div class=\"input-group clockpicker\" (click)=\"openendTime()\">\n                    <input type=\"text\" value=\"{{endTime}}\">\n                    <span class=\"input-group-addon\">\n                          <span class=\"glyphicon glyphicon-time\"></span>\n                    </span>\n                  </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">EXPIRATION DATE OF JOB</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"jobExpiration\" id=\"job-expiration\" [(ngModel)]='jobExpiration' required=\"\">\n                        <option value=\"At the start of working period\" selected=\"\">At the start of working period</option>\n                        <option value=\"At the end of working period\">At the end of working period</option>\n                        <option value=\"After 2 months\">After 2 months</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">LOCATION OF WORK</label> \n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Work location\" name=\"location\" [(ngModel)]='location' value=\"JCUBE Mall\" required=\"\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">LOCATION REGION</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"workRegion\" [(ngModel)]='workRegion' required=\"\">\n                        <option value=\"North\">North</option>\n                        <option value=\"West\" selected=\"\">West</option>\n                        <option value=\"East\">East</option>\n                        <option value=\"Central\">Central</option>\n                        <option value=\"Central Business District\">Central Business District</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">BACKGROUND OF JOB</label>\n                <div class=\"col-sm-10\">\n                    <textarea class=\"form-control\" rows=\"5\" placeholder=\"Give a description of what your company does or a message to attract employees\" name=\"description\" [(ngModel)]='description' required=\"\">Help company to bring in achieve sales targets month on month</textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">RESPONSIBILITIES</label>\n                <div class=\"col-sm-10\">\n                    <textarea class=\"form-control\" rows=\"5\" placeholder=\"What are your employees expected to do ?\" [(ngModel)]='jobRole' name=\"jobRole\"></textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">REQUIREMENTS</label>\n                <div class=\"col-sm-10\">\n                    <textarea class=\"form-control\" rows=\"5\" placeholder=\"What basic requirements should your employee have ?\" [(ngModel)]='requirement' name=\"requirement\">Requirements</textarea>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small\">ARE YOU EMPLOYING FOR YOURSELF?</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control\" name=\"selfEmployer\" [(ngModel)]='selfEmployer' required=\"\">\n                        <option value=\"true\">Yes</option>\n                        <option value=\"false\" selected=\"\">No</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">COMPANY NAME</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\" name=\"companyName\" [(ngModel)]='companyName' value=\"Jobbunny\" required=\"\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">COMPANY WEBSITE</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"url\" name=\"companyWebsite\" [(ngModel)]='companyWebsite' value=\"Https://www.jobbunny.com\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">RECRUITER NAME</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\" name=\"employerName\" [(ngModel)]='employerName' value=\"Gary\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-sm-2 small strong\">RECRUITER HANDPHONE</label>\n                <div class=\"col-sm-10\">\n                    <input class=\"form-control\" type=\"text\"  name=\"employerPhone\" [(ngModel)]='employerPhone' value=\"82330317\">\n                </div>\n            </div>\n            <button class=\"btn-lg btn-warning pull-right\" (click)=\"updateJobPost()\">Save updates</button>\n        </form>\n        <br>\n        <br>\n    </div>\n  </div>  "

/***/ }),

/***/ "./src/app/admin/admin-job-edit/admin-job-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminJobEditComponent; });
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

var AdminJobEditComponent = /** @class */ (function () {
    function AdminJobEditComponent() {
    }
    AdminJobEditComponent.prototype.ngOnInit = function () {
    };
    AdminJobEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-job-edit',
            template: __webpack_require__("./src/app/admin/admin-job-edit/admin-job-edit.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin-job-edit/admin-job-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminJobEditComponent);
    return AdminJobEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overview_overview_component__ = __webpack_require__("./src/app/admin/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employer_management_employer_management_component__ = __webpack_require__("./src/app/admin/employer-management/employer-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee_management_employee_management_component__ = __webpack_require__("./src/app/admin/employee-management/employee-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job_management_job_management_component__ = __webpack_require__("./src/app/admin/job-management/job-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carrot_analytics_carrot_analytics_component__ = __webpack_require__("./src/app/admin/carrot-analytics/carrot-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chatbot_analytics_chatbot_analytics_component__ = __webpack_require__("./src/app/admin/chatbot-analytics/chatbot-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__job_detail_job_detail_component__ = __webpack_require__("./src/app/admin/job-detail/job-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employer_details_employer_details_component__ = __webpack_require__("./src/app/admin/employer-details/employer-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__employee_details_employee_details_component__ = __webpack_require__("./src/app/admin/employee-details/employee-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_settings_account_settings_component__ = __webpack_require__("./src/app/admin/account-settings/account-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_job_edit_admin_job_edit_component__ = __webpack_require__("./src/app/admin/admin-job-edit/admin-job-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild([
                    { path: '', redirectTo: 'mission', pathMatch: 'full' },
                    { path: 'mission', component: __WEBPACK_IMPORTED_MODULE_3__overview_overview_component__["a" /* OverviewComponent */], pathMatch: 'full' },
                    { path: 'employer-management', component: __WEBPACK_IMPORTED_MODULE_4__employer_management_employer_management_component__["a" /* EmployerManagementComponent */], pathMatch: 'full' },
                    { path: 'employee-management', component: __WEBPACK_IMPORTED_MODULE_5__employee_management_employee_management_component__["a" /* EmployeeManagementComponent */], pathMatch: 'full' },
                    { path: 'job-management', component: __WEBPACK_IMPORTED_MODULE_6__job_management_job_management_component__["a" /* JobManagementComponent */], pathMatch: 'full' },
                    { path: 'carrot-analytics', component: __WEBPACK_IMPORTED_MODULE_7__carrot_analytics_carrot_analytics_component__["a" /* CarrotAnalyticsComponent */], pathMatch: 'full' },
                    { path: 'chatbot-analytics', component: __WEBPACK_IMPORTED_MODULE_8__chatbot_analytics_chatbot_analytics_component__["a" /* ChatbotAnalyticsComponent */], pathMatch: 'full' },
                    { path: 'job-detail/:id', component: __WEBPACK_IMPORTED_MODULE_9__job_detail_job_detail_component__["a" /* JobDetailComponent */], pathMatch: 'full' },
                    { path: 'job-edit/:id', component: __WEBPACK_IMPORTED_MODULE_14__admin_job_edit_admin_job_edit_component__["a" /* AdminJobEditComponent */], pathMatch: 'full' },
                    { path: 'employer-details/:id', component: __WEBPACK_IMPORTED_MODULE_10__employer_details_employer_details_component__["a" /* EmployerDetailsComponent */], pathMatch: 'full' },
                    { path: 'employee-details/:id', component: __WEBPACK_IMPORTED_MODULE_11__employee_details_employee_details_component__["a" /* EmployeeDetailsComponent */], pathMatch: 'full' },
                    { path: 'account-settings', component: __WEBPACK_IMPORTED_MODULE_12__account_settings_account_settings_component__["a" /* AccountSettingsComponent */], pathMatch: 'full' }
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_4__employer_management_employer_management_component__["a" /* EmployerManagementComponent */], __WEBPACK_IMPORTED_MODULE_5__employee_management_employee_management_component__["a" /* EmployeeManagementComponent */], __WEBPACK_IMPORTED_MODULE_6__job_management_job_management_component__["a" /* JobManagementComponent */], __WEBPACK_IMPORTED_MODULE_7__carrot_analytics_carrot_analytics_component__["a" /* CarrotAnalyticsComponent */], __WEBPACK_IMPORTED_MODULE_8__chatbot_analytics_chatbot_analytics_component__["a" /* ChatbotAnalyticsComponent */], __WEBPACK_IMPORTED_MODULE_9__job_detail_job_detail_component__["a" /* JobDetailComponent */], __WEBPACK_IMPORTED_MODULE_10__employer_details_employer_details_component__["a" /* EmployerDetailsComponent */], __WEBPACK_IMPORTED_MODULE_11__employee_details_employee_details_component__["a" /* EmployeeDetailsComponent */], __WEBPACK_IMPORTED_MODULE_12__account_settings_account_settings_component__["a" /* AccountSettingsComponent */], __WEBPACK_IMPORTED_MODULE_14__admin_job_edit_admin_job_edit_component__["a" /* AdminJobEditComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/carrot-analytics/carrot-analytics.component.css":
/***/ (function(module, exports) {

module.exports = "h3 {\n    padding-bottom: 20px;\n    border-bottom: 1px solid #a0a0a0;\n  }\n  \n  h4 {\n    padding-bottom: 20px;\n    padding-top: 20px;\n    border-top: 1px solid #a0a0a0;\n  }\n  \n  .result {\n      margin-top: 30px;\n      border: 1px solid rgba(125,125,125,0.6);\n      display: inline-block;\n      padding: 1px;\n  }\n  \n  .result.rounded > img {\n      border-radius: 100px;\n  }\n  \n  .pull-left {\n      min-width: 400px;\n      float: left;\n      margin: 10px;\n      padding: 10px;\n      background-color: rgba(0,0,0,0.05);\n  }\n  \n  .file-upload {\n    height: 25px;\n    width: 100px;\n    position: relative;\n    border-radius: 3px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    float: right;\n    \n    border: 1px solid #FFF;\n    overflow: hidden;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(50%, #2590EB), color-stop(50%, #FFFFFF));\n    background-image: linear-gradient(to bottom, #2590EB 50%, #FFFFFF 50%);\n    background-size: 100% 200%;\n    -webkit-transition: all 1s;\n    transition: all 1s;\n    color: #FFF;\n    font-size: 10px;\n  }\n  \n  .file-upload:hover {\n    background-position: 0 -100%;\n    color: #2590Eb;\n  }\n  \n  .text {\n    font-size: 14px;\n  }\n  \n  input[type='file'] {\n    height: 25px;\n    width: 100px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    cursor: pointer;\n  }"

/***/ }),

/***/ "./src/app/admin/carrot-analytics/carrot-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"large strong\">Carrot Analytics</div>\n      <br>\n      <div class=\"panel pad20\">\n        <p class=\"gray\">Carrot stuff</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/carrot-analytics/carrot-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrotAnalyticsComponent; });
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

var CarrotAnalyticsComponent = /** @class */ (function () {
    function CarrotAnalyticsComponent() {
    }
    CarrotAnalyticsComponent.prototype.ngOnInit = function () {
    };
    CarrotAnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carrot-analytics',
            template: __webpack_require__("./src/app/admin/carrot-analytics/carrot-analytics.component.html"),
            styles: [__webpack_require__("./src/app/admin/carrot-analytics/carrot-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarrotAnalyticsComponent);
    return CarrotAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/admin/chatbot-analytics/chatbot-analytics.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/chatbot-analytics/chatbot-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"large strong\">Bot Analytics</div>\n      <br>\n      <div class=\"panel pad20\">\n        <p class=\"gray\">Bot stuff</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/chatbot-analytics/chatbot-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotAnalyticsComponent; });
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

var ChatbotAnalyticsComponent = /** @class */ (function () {
    function ChatbotAnalyticsComponent() {
    }
    ChatbotAnalyticsComponent.prototype.ngOnInit = function () {
    };
    ChatbotAnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chatbot-analytics',
            template: __webpack_require__("./src/app/admin/chatbot-analytics/chatbot-analytics.component.html"),
            styles: [__webpack_require__("./src/app/admin/chatbot-analytics/chatbot-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatbotAnalyticsComponent);
    return ChatbotAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/admin/employee-details/employee-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/employee-details/employee-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"panel pad20\">\n        <p>\n          <strong class=\"large\">Employee Profile</strong>\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"align-center\">\n              <img class=\"img-fit img-circle\" [src]=\"employeeDetails['profilePic']\" height=\"100\" width=\"100\">\n              <br>\n              <br>\n              <div class=\"strong capitalize\">{{employeeDetails['first name'] + ' ' + employeeDetails['last name']}}</div>\n              <p class=\"green strong\"> {{ employeeDetails['salaryHour'] ? ' $' + employeeDetails['salaryHour'] : 'Salary not specified'}}</p>\n              <p class=\"strong\">{{employeeDetails['gender']}}</p>\n              <strong class=\"gray\">EXPERIENCE</strong>\n              <p class=\"strong\">2 years</p>\n              <br>\n              <strong class=\"gray\">LANGUAGE</strong>\n              <p class=\"strong\">{{employeeDetails['languages'] && employeeDetails['languages'].length > 0 ? employeeDetails['languages'].join(',')\n                : 'N/A'}}</p>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pad20\">\n              <h5 class=\"strong\">About Me</h5>\n              <p>{{employeeDetails['profile']['self_description'] || 'N/A'}}</p>\n              <br>\n              <h5 class=\"strong\">Job Experience</h5>\n              <span *ngIf=\"employeeDetails['experience']; else notExeperience\">\n                <ng-container *ngFor=\"let experience of employeeDetails['experience']\">\n                  <strong>{{experience['title']}} @ {{experience['company']}}</strong>\n                  <p class=\"gray\"> {{ experience['description'] }} </p>\n                </ng-container>\n              </span>\n              <ng-template #notExeperience *ngIf=\"!employeeDetails['experience']\">\n                N/A\n              </ng-template>\n              <br>\n              <h5 class=\"strong\">Personality Metrics</h5>\n              <ng-container *ngIf=\"employeeDetails['personality'];else notPersonality\">\n                <ng-container *ngIf=\"empoyeeDetails['personality']['primary'] === 'A' && empoyeeDetails['personality']['secondary'] === 'A'; else analyticalBlock\">\n                  <h5>Driver</h5>\n                  <p>The Driver is a high achiever – a mover and shaker who is definitely not averse to risk. The individual\n                    is extroverted, strong-willed, direct, practical, organised, forceful, and decisive. Look for someone\n                    who tells it the way it is and is very persuasive. Watch out or you’ll be worn down and bowled over.\n                    A driver is task- rather than relationship-oriented and wants immediate results.</p>\n                </ng-container>\n                <ng-template #analyticalBlock *ngIf=\"empoyeeDetails['personality']['primary'] === 'B' && empoyeeDetails['personality']['secondary'] === 'B'; else amiableBlock\">\n                  <h5>Analytical</h5>\n                  <p>The Analytical is polite but reserved, logical, fact- and task-oriented. This person’s focus is on precision\n                    and perfection. Other strengths include persistence, diligence, caution, and a systematic approach.</p>\n                </ng-template>\n                <ng-template #amiableBlock *ngIf=\"empoyeeDetails['personality']['primary'] === 'C' && empoyeeDetails['personality']['secondary'] === 'C'; else expressiveBlock\">\n                  <h5>Amiable</h5>\n                  <p>Devoted, consistent, dependable, and loyal, the Amiable is a hard worker and will persevere long after\n                    others have given up. He or she is a team player, cooperative and easy to get along with, trustful, sensitive\n                    and a good listener. Working in groups with cooperative individuals, the Amiable tries to avoid confrontation.\n                    He or she enjoys company, performs best in a stable environment, and often has a stabilizing effect on\n                    others.</p>\n                </ng-template>\n                <ng-template #expressiveBlock *ngIf=\"empoyeeDetails['personality']['primary'] === 'D' && empoyeeDetails['personality']['secondary'] === 'D'\">\n                  <h5>Expressive</h5>\n                  <p>The Expressive, a verbally adept personality, is engaging, accommodating, supportive of others, persuasive,\n                    socially adept, and relationship- rather than task-oriented. He or she loves to be one of the gang, and\n                    is always ready for something new and exciting, especially if the gang is ready to participate. Additional\n                    strengths include enthusiasm, diplomatic skills, and the ability to inspire others.</p>\n                </ng-template>\n              </ng-container>\n              <ng-template #notPersonality>\n                <p>N/A</p>\n              </ng-template>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"border-left align-center\">\n              <div class=\"pad20\">\n                <h6 class=\"gray\">HANDPHONE NUMBER</h6>\n                <p>{{employeeDetails['handphone']}}</p>\n                <h6 class=\"gray\">EMAIL ADDRESS</h6>\n                <p>{{employeeDetails['emailAddress']}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/employee-details/employee-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(commonServiceService, route) {
        var _this = this;
        this.commonServiceService = commonServiceService;
        this.route = route;
        this.employeeDetails = {};
        this.counts = {};
        this.hideEmployeeDetail = true;
        this.route.params.subscribe(function (params) { return _this.employeeId = params.id; });
        this.commonServiceService.get('/admin/employees/' + this.employeeId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (res) {
            _this.employeeDetails = res.employee;
            // this.counts = res.counts;
            // this.hideEmployeeDetail = false;
        });
    }
    EmployeeDetailsComponent.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(body);
    };
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
    };
    EmployeeDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__("./src/app/admin/employee-details/employee-details.component.html"),
            styles: [__webpack_require__("./src/app/admin/employee-details/employee-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_common_service_service__["a" /* CommonServiceService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/employee-management/employee-management.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/employee-management/employee-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"clearfix\"></div>\n    <div class=\"container-fluid\">\n      <div class=\"content-wrap\">\n        <div class=\"panel pad10\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"large strong\">Employee Management</div>\n            </div>\n            <div class=\"col-md-7\">\n              <form class=\"form-inline\" action=\"/admin/workers\" method=\"get\">\n                <input class=\"form-control\" type=\"text\" name=\"searchQuery\" style=\"width: 300px;\" placeholder=\"Search by employee name\">\n                <button class=\"form-control\" type=\"submit\">\n                  <i class=\"fa fa-search\"></i>\n                </button>\n              </form>\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <p class=\"strong\">\n                <span>{{ employeeList ? employeeList.length : 0}} employees</span>\n              </p>\n            </div>\n            <div class=\"col-md-8\">\n              <div class=\"pull-right\">\n                <a class=\"dropdown-toggle\" href=\"#filters\" data-toggle=\"collapse\" aria-expanded=\"\">\n                  <i class=\"fa fa-filter\"></i>\n                  <span>FILTER</span>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"collapse in\" id=\"filters\">\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                <strong>DATE JOINED</strong>\n                <ul class=\"list-unstyled\">\n                  <li class=\"top10\">\n                    <a class=\"gray\" href=\"/admin/workers?createdAt=earliest\">earliest</a>\n                  </li>\n                  <li class=\"top10\">\n                    <a class=\"gray\" href=\"/admin/workers?createdAt=latest\">latest</a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-md-2\">\n                <strong>JOB TYPE</strong>\n                <ul class=\"list-unstyled\">\n                  <li class=\"top10\">\n                    <a class=\"gray\" href=\"/admin/workers?jobType=Part-timer\">Part-timer</a>\n                  </li>\n                  <li class=\"top10\">\n                    <a class=\"gray\" href=\"/admin/workers?jobType=Full-timer\">Full-timer</a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-md-2\">\n                <strong>GENDER</strong>\n                <ul class=\"list-unstyled\">\n                  <li class=\"top10\">\n                    <a class=\"gray\" href=\"/admin/workers?gender=male\">male</a>\n                  </li>\n                  <li class=\"top10\">\n                    <a class=\"gray\" href=\"/admin/workers?gender=female\">female</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngFor=\"let employee of employeeList\">\n            <hr>\n            <a [routerLink]=\"['../employee-details', employee['_id']]\">\n              <div class=\"row pad20\">\n                <div class=\"col-md-2\">\n                  <div class=\"align-center\">\n                    <img class=\"img-fit img-circle\" [src]=\"employee['profilePic'] || '/assets/img/logo.png'\"\n                      height=\"100\" width=\"100\">\n                  </div>\n                </div>\n                <div class=\"col-md-10\">\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <div class=\"strong capitalize black\">{{employee['first name'] +' '+ employee['last name']}}</div>\n                      <p class=\"green strong\"> {{employee['salaryHour'] ? '$'+employee['salaryHour'] : 'Salary not specified'}}</p>\n                      <p class=\"strong black\">{{employee['gender']}}</p>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <strong class=\"gray\">EXPERIENCE</strong>\n                      <p class=\"strong black\">2 years</p>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <strong class=\"gray\">LANGUAGE</strong>\n                      <p class=\"strong black\">{{employee['languages'] || 'N/A'}}</p>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <strong class=\"gray\">PERSONALITY</strong>\n                      <p class=\"black\" hidden>N/A</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/employee-management/employee-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
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
    function EmployeeManagementComponent(commonServiceService) {
        this.commonServiceService = commonServiceService;
        this.employeeList = [];
        var self = this;
        this.commonServiceService.get('/admin/employee')
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (result) {
            self.employeeList = result['employees'];
        });
    }
    EmployeeManagementComponent.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(body);
    };
    EmployeeManagementComponent.prototype.ngOnInit = function () {
    };
    EmployeeManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-management',
            template: __webpack_require__("./src/app/admin/employee-management/employee-management.component.html"),
            styles: [__webpack_require__("./src/app/admin/employee-management/employee-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_common_service_service__["a" /* CommonServiceService */]])
    ], EmployeeManagementComponent);
    return EmployeeManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/employer-details/employer-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/employer-details/employer-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <p>\n        <span class=\"large strong\">Employer Profile</span>\n      </p>\n      <div [hidden]=\"!hideEmployerDetail\">\n        Loading...\n      </div>\n      <div class=\"col-md-12\" [hidden]=\"hideEmployerDetail\">\n        <div class=\"row card pad20\">\n          <div class=\"col-md-3\">\n            <div class=\"align-center\">\n              <img class=\"img-thumbnail\" height=\"75\" length=\"75\" [src]=\"employerDetail['profilePic'] || 'assets/img/logo.png'\">\n            </div>\n          </div>\n          <div class=\"col-md-9\">\n            <h3 class=\"strong capitalize\">{{ (employerDetail['firstName'] || employerDetail['lastName']) ? employerDetail['firstName'] + ' ' + employerDetail['lastName'] : 'N/A' }}</h3>\n            <p class=\"medium strong\">Email</p>\n            <p>{{employerDetail['email']}}</p>\n            <p class=\"medium strong\">Company Name</p>\n            <p>{{employerDetail['companyName'] ? employerDetail['companyName'] : 'N/A'}}</p>\n            <p class=\"medium strong\">Date Joined</p>\n            <p>{{employerDetail['createdAt'] | date}}</p>\n            <p class=\"medium strong\">Jobs Created</p>\n            <p>{{counts['jobsCount']}}</p>\n            <p class=\"medium strong\">Invitations Sent</p>\n            <p>{{ counts['invitationsCount']}}</p>\n            <p class=\"medium strong\">Employees Shortlisted</p>\n            <p>{{ counts['shortlistedCount']}}</p>\n            <p class=\"medium strong\">Carrots</p>\n            <p>Total : {{employerDetail['carrots']['total']}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/employer-details/employer-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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




var EmployerDetailsComponent = /** @class */ (function () {
    function EmployerDetailsComponent(commonServiceService, route) {
        var _this = this;
        this.commonServiceService = commonServiceService;
        this.route = route;
        this.employerDetail = {
            carrots: {}
        };
        this.counts = {};
        this.hideEmployerDetail = true;
        this.route.params.subscribe(function (params) { return _this.employerId = params.id; });
        this.commonServiceService.get('/admin/employers/' + this.employerId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (res) {
            _this.employerDetail = res.employer;
            _this.counts = res.counts;
            _this.hideEmployerDetail = false;
        });
    }
    EmployerDetailsComponent.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(body);
    };
    EmployerDetailsComponent.prototype.ngOnInit = function () {
    };
    EmployerDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employer-details',
            template: __webpack_require__("./src/app/admin/employer-details/employer-details.component.html"),
            styles: [__webpack_require__("./src/app/admin/employer-details/employer-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_common_service_service__["a" /* CommonServiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], EmployerDetailsComponent);
    return EmployerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/employer-management/employer-management.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/employer-management/employer-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"panel pad10\">\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div class=\"large strong\">Employer Management</div>\n          </div>\n          <div class=\"col-md-7\">\n            <form class=\"form-inline\" action=\"/admin/employers/search\" method=\"get\">\n              <input class=\"form-control\" type=\"text\" name=\"searchQuery\" style=\"width: 300px;\" placeholder=\"Search by employer name, company\">\n              <button class=\"form-control\" type=\"submit\">\n                <i class=\"fa fa-search\"></i>\n              </button>\n            </form>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <p class=\"strong\">\n              <span>{{employerList ? employerList.length : 0}} employers</span>\n            </p>\n          </div>\n          <div class=\"col-md-9\">\n            <div class=\"pull-right\">\n              <a class=\"dropdown-toggle\" href=\"#filters\" data-toggle=\"collapse\" aria-expanded=\"\">\n                <i class=\"fa fa-filter\"></i>\n                <span>FILTER</span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"collapse in\" id=\"filters\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <strong>DATE CREATED</strong>\n              <ul class=\"list-unstyled\">\n                <li class=\"top10\">\n                  <a class=\"gray\" href=\"/admin/employers?createdAt=earliest\">earliest</a>\n                </li>\n                <li class=\"top10\">\n                  <a class=\"gray\" href=\"/admin/employers?createdAt=latest\">latest</a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-md-2\">\n              <strong>LAST ACTIVITY</strong>\n              <ul class=\"list-unstyled\">\n                <li class=\"top10\">\n                  <a class=\"gray\" href=\"/admin/employers?updatedAt=recent\">recent</a>\n                </li>\n                <li class=\"top10\">\n                  <a class=\"gray\" href=\"/admin/employers?updatedAt=old\">old</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div *ngFor=\"let employer of employerList\">\n        <a [routerLink]=\"['../employer-details', employer['_id'] ]\" >\n          <div class=\"pad10\">\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                <img class=\"img-circle\" height=\"75\" width=\"75\" [src]=\"employer['profilePic'] || '/assets/img/logo.png'\">\n              </div>\n              <div class=\"col-md-2\">\n                <div class=\"strong black\">{{employer['email']}}</div>\n                <p class=\"black\">Date created:<br/> {{employer['createdAt'] | date}}</p>\n              </div>\n              <div class=\"col-md-2\">\n                <h6 class=\"gray\">COMPANY NAME</h6>\n                <span class=\"black\">{{employer['companyName'] ? employer['companyName'] : 'N/A'}}</span>\n              </div>\n              <div class=\"col-md-3\">\n                <h6 class=\"gray\">FULL NAME</h6>\n                <div class=\"strong medium black\">{{(employer['firstName'] || employer['lastName']) ? ((employer['firstName'] ? employer['firstName'] : '') + (employer['lastName'] ? ' ' + employer['lastName'] : '')) : 'N/A'}}</div>\n              </div>\n              <div class=\"col-md-3\">\n                <h6 class=\"gray\">CARROTS</h6>\n                <span class=\"black\">Total : {{ employer['carrots']['total']}}</span>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/employer-management/employer-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployerManagementComponent = /** @class */ (function () {
    function EmployerManagementComponent(commonServiceService) {
        this.commonServiceService = commonServiceService;
        this.employerList = [];
        var self = this;
        this.commonServiceService.get('/admin/employers')
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (result) {
            self.employerList = result['employers'];
        });
    }
    EmployerManagementComponent.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(body);
    };
    EmployerManagementComponent.prototype.ngOnInit = function () {
    };
    EmployerManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employer-management',
            template: __webpack_require__("./src/app/admin/employer-management/employer-management.component.html"),
            styles: [__webpack_require__("./src/app/admin/employer-management/employer-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_common_service_service__["a" /* CommonServiceService */]])
    ], EmployerManagementComponent);
    return EmployerManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/job-detail/job-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/job-detail/job-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"content-wrap\">\n    <div class=\"panel\" >\n      <img *ngIf=\"job && job['coverImage']\" class=\"img-fit\" [src]=\"job['coverImage']\" style=\"height:300px;width:100%;\">\n      <br>\n      <div class=\"pad20\">\n        <p class=\"large strong capitalize\">{{job['jobTitle']}}\n          <span class=\"left20\">\n            <a [routerLink]=\"['../../job-edit',job._id]\">\n              <i class=\"fa fa-edit small gray\"></i>\n            </a>\n            <a class=\"left20\" href=\"/api/jobs/delete/5a4f2c71a1550f001455ac48\" onclick=\"return confirm('delete now?');\">\n              <i class=\"fa fa-trash small gray\"></i>\n            </a>\n          </span>\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                <i class=\"fa fa-map-marker\"></i>\n                <span>{{job['workRegion']+ ', ' + job['location']}}</span>\n                <br>\n                <i class=\"fa fa-clock-o\"></i>\n                <span>{{job['jobType'] + ', ' + job['startTime'] + '-' + job['endTime'] + ', '+job['workPeriod']}}</span>\n                <br>\n                <i class=\"fa fa-calendar\"></i>\n                <span>Starts on {{ job['startDate'] | date}}, Ends on {{job['endDate'] | date}}</span>\n                <br>\n                <img class=\"img-fit\" src=\"assets/img/carrot.png\" height=\"30\" widht=\"30\">\n                <span>10 carrots spent successfully</span>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"pull-right medium green\"> {{job['salary'] ? '$'+job['salary'] + ' '+ job['salaryType'] : 'salary is not specified'}}</div>\n              </div>\n            </div>\n            <h4>Job Description</h4>\n            <p>{{job['description']}}\n            </p>\n            <h4>Duties and Responsibilities</h4>\n            <p>{{job['jobRole']}}\n            </p>\n            <h4>Requirements</h4>\n            <p>{{job['requirement']}}</p>\n          </div>\n          <div class=\"col-md-3 border-left\">\n            <div class=\"align-center bottom10\">\n              <p class=\"gray\">EMPLOYER</p>\n              <a [routerLink]=\"['../../employer-details', job['employerId']]\">\n                <div class=\"medium strong\">{{job['companyName']}}</div>\n                <br>\n                <small class=\"strong top10 left10 pull-left\"></small>\n              </a>\n            </div>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/job-detail/job-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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




var JobDetailComponent = /** @class */ (function () {
    function JobDetailComponent(route, commonServiceService) {
        this.route = route;
        this.commonServiceService = commonServiceService;
        this.job = {};
        var self = this;
        this.route.params.subscribe(function (params) { return self.jobId = params.id; });
        this.commonServiceService.get('/admin/jobs/' + self.jobId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (result) {
            self.job = result['job'];
        });
    }
    JobDetailComponent.prototype.ngOnInit = function () {
    };
    JobDetailComponent.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(body);
    };
    JobDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job-detail',
            template: __webpack_require__("./src/app/admin/job-detail/job-detail.component.html"),
            styles: [__webpack_require__("./src/app/admin/job-detail/job-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__common_common_service_service__["a" /* CommonServiceService */]])
    ], JobDetailComponent);
    return JobDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/job-management/job-management.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/job-management/job-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"panel pad10\">\n        <p>\n          <span class=\"large strong\">Job Management</span>\n        </p>\n        <h4 class=\"strong\">{{jobs ? jobs.length : 0}} jobs</h4>\n        <hr>\n        <div class=\"jobs-container\" *ngFor=\"let job of jobs\">\n          <a [routerLink]=\"['../job-detail', job['_id']]\">\n            <div class=\"pad10\">\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <h6 class=\"gray\">COMPANY</h6>\n                  <div class=\"strong black capitalize\">{{job['companyName']}}</div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"strong capitalize black\">{{job['jobTitle']}}</div>\n                  <span class=\"green\"> {{job['salary'] ? '$'+job['salary']+' '+job['salaryType'] : 'salary not specified'}}</span>\n                  <p class=\"black\">Date created: {{job['createdAt'] | date}}</p>\n                </div>\n                <div class=\"col-md-1\">\n                  <h6 class=\"gray\">JOB ID</h6>\n                  <span class=\"black\" style=\"word-wrap: break-word;\">{{job['_id']}}</span>\n                </div>\n                <div class=\"col-md-2\">\n                  <h6 class=\"gray\">WORK START</h6>\n                  <p class=\"black\">{{job['startDate'] | date}}</p>\n                </div>\n                <div class=\"col-md-2\">\n                  <h6 class=\"gray\">FULFILMENT</h6>\n                  <span class=\"black\">Required {{job['requiredNumber']}}</span>\n                  <br>\n                  <span class=\"black\">Shortlisted {{job['shortlisted']}}</span>\n                </div>\n                <div class=\"col-md-2\">\n                  <strong class=\"pull-right badge-{{job['jobStatus']==='completed' ? 'gray' : (job['jobStatus']==='urgent'?'red':'green')}}\">{{job['jobStatus']}}</strong>\n                  <br>\n                </div>\n              </div>\n            </div>\n          </a>\n          <hr>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/job-management/job-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobManagementComponent = /** @class */ (function () {
    function JobManagementComponent(commonServiceService) {
        this.commonServiceService = commonServiceService;
        this.jobs = [];
        var self = this;
        this.commonServiceService.get('/admin/jobs/')
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (result) {
            self.jobs = result['jobs'];
        });
    }
    JobManagementComponent.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(body);
    };
    JobManagementComponent.prototype.ngOnInit = function () {
    };
    JobManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job-management',
            template: __webpack_require__("./src/app/admin/job-management/job-management.component.html"),
            styles: [__webpack_require__("./src/app/admin/job-management/job-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_common_service_service__["a" /* CommonServiceService */]])
    ], JobManagementComponent);
    return JobManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"clearfix\"></div>\n  <div class=\"container-fluid\">\n    <div class=\"content-wrap\">\n      <div class=\"large strong\">User Traction</div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <a href=\"/admin/jobs\">\n            <div class=\"panel pad20 btn-block\">\n              <p class=\"gray\">Graph</p>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n              <br>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <i class=\"fa fa-circle light-green\"></i>\n                <span class=\"black small\">Employee Sign up</span>\n              </div>\n              <div class=\"col-md-3\">\n                <i class=\"fa fa-circle yellow\"></i>\n                <span class=\"black small\">Employer Sign up</span>\n              </div>\n              <div class=\"col-md-2\">\n                <i class=\"fa fa-circle orange\"></i>\n                <span class=\"black small\">Jobs posted</span>\n              </div>\n              <div class=\"col-md-2\">\n                <i class=\"fa fa-circle green\"></i>\n                <span class=\"black small\">Job Application</span>\n              </div>\n              <div class=\"col-md-2\">\n                <i class=\"fa fa-circle red\"></i>\n                <span class=\"black small\">Shortlisted</span>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"panel pad20\">\n            <p class=\"strong gray\">TODAY</p>\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                <p class=\"strong\">{{dashboardInfo.totalCounts['totalWorkersCount']}}</p>\n                <p class=\"strong\">{{dashboardInfo.totalCounts['totalEmployersCount']}}</p>\n              </div>\n              <div class=\"col-md-10\">\n                <p class=\"strong\">EMPLOYEES</p>\n                <p class=\"strong\">EMPLOYERS</p>\n              </div>\n            </div>\n            <p class=\"strong gray\">THIS WEEK</p>\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                <p class=\"strong\">{{dashboardInfo.totalCounts['totalWorkersCount']}}</p>\n                <p class=\"strong\">{{dashboardInfo.totalCounts['totalEmployersCount']}}</p>\n              </div>\n              <div class=\"col-md-10\">\n                <p class=\"strong\">EMPLOYEES</p>\n                <p class=\"strong\">EMPLOYERS</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"large strong\">Overall Conversation Funnels</div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <p class=\"strong\">EMPLOYERS</p>\n        </div>\n        <div class=\"col-md-3 col-xs-6\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <div class=\"panel dash-card-yellow align-center\">\n                <h3 class=\"strong\">{{dashboardInfo.totalCounts['totalEmployersCount']}}</h3>\n                <span>Employers</span>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <p class=\"align-center large gray\">180%</p>\n              <strong class=\"small\">CONVERSION</strong>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-xs-6\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <div class=\"panel dash-card-dark-yellow align-center\">\n                <h3 class=\"strong\">{{dashboardInfo.totalCounts['totalJobsCount']}}</h3>\n                <span>Jobs Posted</span>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <p class=\"align-center large gray\">180%</p>\n              <strong class=\"small\">CONVERSION</strong>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <div class=\"panel dash-card-brown align-center\">\n                <h3 class=\"strong\">{{dashboardInfo.matchesStats['invited']}}</h3>\n                <span>Invitations Sent</span>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <p class=\"align-center large gray\">180%</p>\n              <strong class=\"small\">CONVERSION</strong>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <div class=\"panel dash-card-red align-center\">\n                <h3 class=\"strong\">{{dashboardInfo.matchesStats['accepted']}}</h3>\n                <span>Accepted Invitations</span>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <p class=\"align-center large gray\">180%</p>\n              <strong class=\"small\">CONVERSION</strong>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <p class=\"strong\">EMPLOYEES</p>\n        </div>\n        <div class=\"col-md-3 col-xs-6\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <div class=\"panel dash-card-green align-center\">\n                <h3 class=\"strong\">{{dashboardInfo.totalCounts['totalWorkersCount']}}</h3>\n                <span>Employees</span>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <p class=\"align-center large gray\">180%</p>\n              <strong class=\"small\">CONVERSION</strong>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-xs-6\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <div class=\"panel dash-card-dark-green align-center\">\n                <h3 class=\"strong\">{{dashboardInfo.totalCounts['totalMatchesCount']}}</h3>\n                <span>Jobs Applications</span>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <p class=\"align-center large gray\">180%</p>\n              <strong class=\"small\">CONVERSION</strong>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <div class=\"panel dash-card-purple align-center\">\n                <h3 class=\"strong\">{{dashboardInfo.matchesStats['accepted']}}</h3>\n                <span>Accepted Applications</span>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <p class=\"align-center large gray\">180%</p>\n              <strong class=\"small\">CONVERSION</strong>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <div class=\"panel dash-card-light-red align-center\">\n                <h3 class=\"strong\">{{dashboardInfo.matchesStats['shortlisted']}}</h3>\n                <span>Shortlisted</span>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <p class=\"align-center large gray\">180%</p>\n              <strong class=\"small\">CONVERSION</strong>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_service_service__ = __webpack_require__("./src/app/common/common-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(CommonServiceService) {
        var _this = this;
        this.CommonServiceService = CommonServiceService;
        this.dashboardInfo = {
            totalCounts: {},
            matchesStats: {}
        };
        this.CommonServiceService.get('/admin')
            .map(function (res) { return res.json(); })
            .catch(this.handleError).subscribe(function (result) {
            _this.dashboardInfo = result;
        });
    }
    OverviewComponent.prototype.handleError = function (error) {
        var body = JSON.parse(JSON.stringify(error)) || '';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(body);
    };
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__("./src/app/admin/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/admin/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_common_service_service__["a" /* CommonServiceService */]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map