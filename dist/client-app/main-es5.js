(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/tweet/tweet.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/tweet/tweet.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"signup\">\n  <div class=\"container pt-3 pb-2\">\n    <div class=\"row\">\n      <div class=\"col-12 mb-4\">\n        <a class=\"navbar-brand\" [routerLink]=\"['']\" routerLinkActive=\"router-link-active\">\n          <div class=\"logo\">\n          </div>\n        </a>\n      </div>\n      <div class=\"col-lg-4 col-xs-12 m-auto\">\n        <form #signupForm = \"ngForm\">\n          <div class=\"dashboard\" style=\"background: #fff;\">\n            <p class=\"p-16\">Tweet Save.</p>\n            <p class=\"p-12\">Save Tweet or Messages</p>\n    \n            <div>\n              <div class=\"input-group\">\n                <textarea #message=\"ngModel\" [(ngModel)]=\"signup.message\"\n                name=\"message\" class=\"form-control\" placeholder=\"Message\" required cols=\"30\" rows=\"5\"></textarea>\n              </div>\n              <div *ngIf=\"message?.invalid && (message?.dirty || message?.touched)\" class=\"text-danger\">\n                <div class=\"space\" *ngIf=\"message.errors?.required\">\n                    Tweet Message  is required.\n                </div>\n              </div>\n            </div>\n            <div>\n              <div class=\"input-group mt-3\">\n                <div class=\"input-group-prepend pl-3 pr-1\">\n                  <i class=\"ion-person\" style=\"font-size: 20px; color: #ddd;\"></i>\n                </div>\n                <input type=\"text\" #source=\"ngModel\" [(ngModel)]=\"signup.source\"\n                name=\"source\" class=\"form-control\" placeholder=\"Source\">\n              </div>\n            </div>\n            <div class=\"p-12 my-2\" style=\"color: #333;\">\n              By clicking the submit button below you agreed to submit this tweet message which will be used for resaerch purpose\n            </div>\n            <button [disabled]=\"!signupForm.form.valid\" (click)=\"create()\" type=\"submit\" class=\"btn btn-Orange w-100 mt-4 rounded\">SUBMIT</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-receipt></app-receipt>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" [routerLink]=\"['']\" routerLinkActive=\"router-link-active\">\n                <div class=\"d-flex row\">\n                    <div>\n                        <img src=\"../assets/img/lightt.svg\" alt=\"logo\">\n                    </div>\n                    <div class=\"maxx px-3 py-1\"><b>Hurbith</b></div>\n                </div>\n            </a>\n            <button class=\"navbar-toggler ml-auto\" type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\"\n                aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n                <ul class=\"navbar-nav ml-auto smooth-scroll\">\n                    <li class=\"nav-item px-3\">\n                        <a class=\"nav-link\" [routerLink]=\"['']\" routerLinkActive=\"router-link-active\">Home</a>\n                    </li>\n                    <li class=\"nav-item px-3\">\n                        <a class=\"nav-link\" routerLink=\"/login\" data-offset=\"90\">Login</a>\n                    </li>\n                    <li class=\"nav-item px-3 login\">\n                        <a class=\"nav-link\" routerLink=\"/signup\">\n                            <img src=\"../assets/img/login@3x.png\" height=\"15px;\"> &nbsp;&nbsp;&nbsp;Sign Up</a>\n                    </li>\n\n                </ul>\n\n            </div>\n        </div>\n    </nav>\n\n    <section id=\"home\">\n        <div id=\"homecarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                    <!-- <img src=\"../assets/img/home.png\" alt=\"\"> -->\n                    <div class=\"carousel-1\"></div>\n                </div>\n                <div class=\"carousel-item\">\n                    <!-- <img src=\"../assets/img/home.png\" alt=\"\"> -->\n                    <div class=\"carousel-2\"></div>\n                </div>\n                <div class=\"carousel-item\">\n                    <!-- <img src=\"../assets/img/home.png\" alt=\"\"> -->\n                    <div class=\"carousel-3\"></div>\n                </div>\n            </div>\n        </div>\n        <ol class=\"carousel-indicators home\">\n            <div data-target=\"#homecarousel\"\n                style=\"width: 25px; background: #f16722; height: 4px; border-radius: 6px;\" data-slide-to=\"0\"\n                class=\"active\"></div>\n            <li data-target=\"#homecarousel\" data-slide-to=\"0\" class=\"active\">\n            </li>\n            <li data-target=\"#homecarousel\" data-slide-to=\"1\"></li>\n            <li data-target=\"#homecarousel\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"maintext\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"text \">\n                            <h3 style=\"color: #f16722;\">TRADE IN JUST A FEW MINUTE</h3>\n                            <h1>THE MOST TRUSTED PLATFORM <br>\n                                FOR TRADING CRYPTOCURRENCY\n                            </h1>\n                            <a href=\"login\">\n                                <button class=\"btn btn-Orange ml-0\" style=\"width: 200px;\">\n                                    GET STARTED\n                                </button>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-3 pt-xs-1 mt-xs-1 mb-2 text-left\">\n                        <div class=\"row\">\n                            <div class=\"col-12 text-right\">\n                                <p class=\"p-18\" style=\"color: #f16722;\">Download Our App</p>\n                            </div>\n                            <div class=\"col-6\">\n                                <div class=\"btnWhite p-1\">\n                                    <div class=\"d-flex \">\n                                        <div>\n                                            <img src=\"../assets/img/playstore.png\" alt=\"playstore\" height=\"30px\">\n                                        </div>\n                                        <div class=\"pl-2\">\n                                            <b><small>Get it on</small><br>\n                                                Google Play\n                                            </b>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-6\">\n                                <div class=\"btnWhite p-1\">\n                                    <div class=\"d-flex\">\n                                        <div>\n                                            <img src=\"../assets/img/appleapp.png\" alt=\"apple\" height=\"30px\">\n                                        </div>\n                                        <div class=\"pl-2\">\n                                            <b><small>Download on the</small><br>\n                                                App Store\n                                            </b>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-12 mt-4\">\n                                <div class=\"rounded py-4 px-3\" style=\"background: #fff;\">\n                                    <p style=\"color: #333;\" class=\"p-14\">Recharge Now</p>\n                                    <p style=\"color: #333;\" class=\"p-14\">What would you like to do?</p>\n                                    <div class=\"selectBox2 mb-4\">\n                                    <select name=\"\" id=\"\" class=\"form-control\">\n                                        <option value=\"\">Select a service</option>\n                                        <option value=\"\">Electricity</option>\n                                        <option value=\"\">Water</option>\n                                    </select>\n                                </div>\n                                   <a href=\"user-bill\"> <button class=\"btn btnOutOrange w-100 ml-0\">\n                                        PROCEED\n                                    </button> </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div> -->\n                </div>\n            </div>\n            \n        </div>\n    </section>\n    <section id=\"about\" class=\"py-5\" style=\"background: #fafafa;\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-left\" data-aos=\"fade-up\" data-aos-duration=\"1500\" data-aos-once=\"true\">\n                    <p class=\"oTxt\">WHY YOU NEED US?</p>\n                    <p class=\"bTxt\">HURBITH</p>\n                    <p class=\"p-17 mb-5\"> We offer individuals the ability to trade a variety of digital assets on a secure, insurance backed platform.\n                    </p>\n                    <div class=\"row\">\n                        <div class=\"col-lg-6 col-xs-12 mb-4\">\n                            <div class=\"smallBox p-3 aa\" data-aos=\"fade-up\" data-aos-duration=\"1500\">\n                                <img src=\"../assets/img/clock.svg\" alt=\"time\" class=\"mb-3\">\n                                <h5>Fast, Easy & Convenient</h5>\n                                <p class=\"p-14\">\n                                    Hurbith offers an intuitive interface with real time orderbooks, charting tools, trade history, and a simple order process so you can trade from day one.\n                                </p>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-lg-6 col-xs-12 mb-4\" >\n                            <div class=\"smallBox p-3 bb\" data-aos=\"fade-up\" data-aos-duration=\"1500\">\n                                <img src=\"../assets/img/wallet.svg\" alt=\"time\" class=\"mb-3\">\n                                <h5>Instant Wallet</h5>\n                                <p class=\"p-14\">\n                                    You can now pay top up your Instant Wallet and\n                                    trade at your convenience.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6 col-xs-12 mb-4\" >\n                            <div class=\"smallBox p-3 cc\" data-aos=\"fade-up\" data-aos-duration=\"1500\">\n                                <img src=\"../assets/img/energy.svg\" alt=\"time\" class=\"mb-3\">\n                                <h5>Trading Tips</h5>\n                                <p class=\"p-14\">\n                                    Stay up to date with the latest information on\n                                    crypotocurrency and save big on your crypto\n                                    spending.\n                                </p>\n                            </div>\n                        </div> -->\n                        <div class=\"col-lg-6 col-xs-12 mb-4\">\n                            <div class=\"smallBox p-3 dd\" data-aos=\"fade-up\" data-aos-duration=\"1500\">\n                                <img src=\"../assets/img/icon.svg\" alt=\"time\" class=\"mb-3\">\n                                <h5>Instant Rewards and Referrals</h5>\n                                <p class=\"p-14\">\n                                    Spread the word and refer a friend to download\n                                    our app and get REWARDED instantly .\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6  mt-3\">\n                    <h5 class=\"p-17 text-left\">How It Works</h5>\n                    <p class=\"orangeLine\"></p>\n                    <div class=\"row\">\n                        <div class=\"col-lg-4 col-xs-12 mb-3\" data-aos=\"zoom-in-up\" data-aos-duration=\"1500\" data-aos-once=\"true\">\n                            <p class=\"text-center\">\n                                <img src=\"../assets/img/Group 8570.png\" alt=\"\" height=\"90px\">\n                            </p>\n                            <p class=\"text-center p-15\">\n                                <b class=\"p-14\" style=\"font-weight: bold;\">Onboard</b><br>\n                                Sign up\n                            </p>\n                        </div>\n                        <div class=\"col-lg-4 col-xs-12 mb-3\" data-aos=\"zoom-in-up\" data-aos-duration=\"1600\" data-aos-once=\"true\">\n                            <p class=\"text-center\">\n                                <img src=\"../assets/img/Group 8571.png\" alt=\"\" height=\"90px\">\n                            </p>\n                            <p class=\"text-center p-15\">\n                                <b class=\"p-14\" style=\"font-weight: bold;\">View Address To pay</b><br>\n                                Easy crypto address\n                            </p>\n                        </div>\n                        <div class=\"col-lg-4 col-xs-12 mb-3\" data-aos=\"zoom-in-up\" data-aos-duration=\"1700\" data-aos-once=\"true\">\n                            <p class=\"text-center\">\n                                <img src=\"../assets/img/Group 8572.png\" alt=\"\" height=\"90px\">\n                            </p>\n                            <p class=\"text-center p-15\">\n                                <b class=\"p-14\" style=\"font-weight: bold;\">Congratulations</b><br>\n                                Relax and enjoy,<br>\n                                Hurbith at all time\n                            </p>\n                        </div>\n                      \n                    </div>\n                    <div>\n                        <p class=\"text-center\">\n                            <a href=\"signup\">\n                                <button class=\"btn btnOrange mt-5 ml-0\" data-aos=\"slide-up\" data-aos-duration=\"1500\" data-aos-once=\"true\">\n                                    SIGNUP NOW\n                                </button>\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section id=\"update\" class=\"py-5 text-left\" style=\"background: #946a6a; background-image:url('../assets/images/v.jpg');\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p class=\"oTxt\">OUR LATEST UPDATE</p>\n                    <p class=\"bTxt\">Energy Management Tips</p>\n                    <p class=\"p-17 text-white\">\n                        Hurbith offers an intuitive interface with real time orderbooks, charting tools, trade history, and a simple order process so you can trade from day one.\n                    </p>\n                    <p class=\"bTxt\">Energy Management Tips</p>\n\n                </div>\n                <!-- <div class=\"col-lg-12 col-xs-12 mb-3\">\n                    <p class=\"read-more-wrap text-white\">\n                        Hurbith offers an intuitive interface with real time orderbooks, charting tools, trade history, and a simple order process so you can trade from day one.\n                    </p>\n                </div> -->\n                <!-- <div class=\"col-lg-3 col-xs-12 mb-3\">\n                    <div class=\"whiteBox aa\" data-aos=\"zoom-in-up\" data-aos-duration=\"1500\" >\n                        <p class=\"soTxt\">FEB 19, 2019</p>\n                        <p class=\"sbTxt wT\">Top 10 Rules for Electric Safety</p>\n                        <div class=\"p-14\">\n                            <input type=\"checkbox\" class=\"read-more-state\" id=\"post-1\">\n\n                            <p class=\"read-more-wrap\">\n                                DON’T plug a bunch of stuff into one outlet\n                                or extension cord. DO ask grown-ups to put\n                                safety caps on all\n                                <span class=\"read-more-target\">\n                                    unused electrical outlets.\n                                    DON’T yank an electrical cord from the wall.\n                                    DO make sure all electric cords are tucked away, neat and tidy.\n                                    DO look up and look out for power lines before you climb a tree.\n                                </span>\n                            </p>\n\n                            <label for=\"post-1\" class=\"read-more-trigger\"></label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-xs-12 mb-3\">\n                    <div class=\"whiteBox bb\" data-aos=\"zoom-in-up\" data-aos-duration=\"1600\">\n                        <p class=\"soTxt\">APRIL 29, 2019</p>\n                        <p class=\"sbTxt wT\">Need for Electricity</p>\n                        <div class=\"p-14\">\n                            <input type=\"checkbox\" class=\"read-more-state\" id=\"post-2\">\n\n                            <p class=\"read-more-wrap\">\n                                Electricity is now an important\n                                part of homes & industries.\n                                Almost whole the devices at\n                                <span class=\"read-more-target\">\n                                    homes, businesses and industries\n                                    are running because of electricity.\n                                </span>\n                            </p>\n\n                            <label for=\"post-2\" class=\"read-more-trigger\"></label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-xs-12 mb-3\">\n                    <div class=\"whiteBox cc\" data-aos=\"zoom-in-up\" data-aos-duration=\"1700\">\n                        <p class=\"soTxt\">MAY 20, 2019</p>\n                        <p class=\"sbTxt wT\">Fun Facts About Electricity.</p>\n                        <div class=\"p-14\">\n                            <input type=\"checkbox\" class=\"read-more-state\" id=\"post-3\">\n\n                            <p class=\"read-more-wrap\">\n                                Electricity travels at the speed of\n                                light - more than 186,000 miles\n                                per second! A spark of static electricity\n                                <span class=\"read-more-target\">\n                                    can measure up to three thousand (3,000)\n                                    volts. A bolt of lightning can measure up\n                                    to three million (3,000,000) volts – and it\n                                    lasts less than one second!\n                                </span>\n                            </p>\n\n                            <label for=\"post-3\" class=\"read-more-trigger\"></label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-xs-12 mb-3\">\n                    <div class=\"whiteBox dd\" data-aos=\"zoom-in-up\" data-aos-duration=\"1800\">\n                        <p class=\"soTxt\">JUNE 02, 2019</p>\n                        <p class=\"sbTxt wT\">Can humans survive without electricity?</p>\n                        <div class=\"p-14\">\n                            <input type=\"checkbox\" class=\"read-more-state\" id=\"post-4\">\n\n                            <p class=\"read-more-wrap\">\n                                Electricity travels at the speed of\n                                light - more than 186,000 miles\n                                per second! A spark of static electricity\n                                <span class=\"read-more-target\">\n                                    can measure up to three thousand (3,000)\n                                    volts. A bolt of lightning can measure up\n                                    to three million (3,000,000) volts – and it\n                                    lasts less than one second!\n                                </span>\n                            </p>\n\n                            <label for=\"post-4\" class=\"read-more-trigger\"></label>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n    </section>\n    <section id=\"footer\" style=\"background: #f3f3f3;\">\n        \n        <div class=\"col-12\">\n            <p class=\"text-center py-4 boT\">What Our Clients Say</p>\n            <div class=\"bd-example\">\n                <div id=\"carouselExampleCaptions\" class=\"carousel slide text-left\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\" style=\"box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.14)\">\n                            <div class=\"whiteBox p-b\" style=\"min-height: 300px; box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.14)\">\n                                <div class=\"row p-xs-5\">\n                                    <div class=\"col-lg-3 col-xs-12\">\n                                        <img src=\"../assets/img/image.png\" alt=\"image\">\n                                    </div>\n                                    <div class=\"col-lg-9 col-xs-12\">\n                                        <p class=\"p-15\" style=\"color: #323366;\">Oni Adedayo\n                                        </p>\n                                        <p class=\"p-15\" style=\"color: #f16722;\">\n                                            Business Head (Energy\n                                            Resource)\n                                        </p>\n                                        <p class=\"p-14\">\n                                            I have employed the services of some trading platform in\n                                            time past but a friend introduced me to Hurbith\n                                            and\n                                            they didn’t disappoint me at all. They delivered\n                                            top-notch\n                                            service and support all the way. I was impressed.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <div class=\"whiteBox p-b\"\n                                style=\"min-height: 300px; box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.14);\">\n                                <div class=\"row p-xs-5\">\n                                    <div class=\"col-lg-3 col-xs-12\">\n                                        <img src=\"../assets/img/boy.png\" alt=\"image\">\n                                    </div>\n                                    <div class=\"col-lg-9 col-xs-12\">\n                                        <p class=\"p-15\" style=\"color: #323366;\">Derin Akintoye</p>\n                                        <p class=\"p-15\" style=\"color: #f16722;\">\n                                            Managing Director\n                                            (Akinbert\n                                            Power Source)\n                                        </p>\n                                        <p class=\"p-14\">\n                                            Infinite Light powered the whole of my company and\n                                            because\n                                            of their amazing customer service, I had to bring them\n                                            over\n                                            to power my house to light up the whole place and they\n                                            did\n                                            a great job.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <ol class=\"carousel-indicators\">\n                        <div data-target=\"#carouselExampleCaptions\"\n                            style=\"width: 25px; background: #f16722; height: 4px; border-radius: 6px;\"\n                            data-slide-to=\"0\" class=\"active\"></div>\n                        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\">\n                        </li>\n                        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n                    </ol>\n                </div>\n            </div>\n        </div>\n        <hr>\n        <div class=\"py-5\" style=\"background-color: #243745;\">\n            <p class=\"text-center\">\n                <a href=\"/login\">\n                    <button class=\"btn btnOrange ml-0\" data-aos=\"slide-up\" data-aos-duration=\"1500\" data-aos-once=\"true\">\n                       Get Started\n                    </button>\n                </a>\n            </p>\n        </div>\n        <div class=\"container py-3\">\n            <div class=\"d-flex row\">\n                <div class=\"p-11\">\n                    <img src=\"\" height=\"30px\" alt=\"Hurbith\">&nbsp; Copyright © 2021. All rights reserved.\n                </div>\n                <div class=\"ml-auto\">\n                    <a class=\"pl-4\">\n                        <i class=\"ion-social-facebook\"></i>\n                    </a>\n                    <a class=\"pl-4\">\n                        <i class=\"fa fa-google-plus\"></i>\n                    </a>\n                    <a class=\"pl-4\">\n                        <i class=\"fa fa-linkedin\"></i>\n                    </a>\n                    <a class=\"pl-4\">\n                        <i class=\"fa fa-twitter \"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pagenotfound/pagenotfound.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pagenotfound/pagenotfound.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"text-align: center; font-size: 2rem; margin-top: 10%; color: brown\">\n  <b>Sorry, Error 404: Page Not Found</b>\n</p>\n"

/***/ }),

/***/ "./src/app/account/tweet/tweet.component.css":
/*!***************************************************!*\
  !*** ./src/app/account/tweet/tweet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-Orange {\n    font-family: Avenir;\n    /* max-width: 200px; */\n    color: #fff !important;\n    font-size: 16px;\n    font-weight: 500;\n    border-radius: 1px;\n    border: solid 0.5px #f16722;\n    background-color: #113f47 !important;\n    transition: .3s ease-in-out;\n\n}\n\n.space{\n    font-family: Avenir;\n    font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC90d2VldC90d2VldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQywyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3R3ZWV0L3R3ZWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLU9yYW5nZSB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICAvKiBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIGJvcmRlcjogc29saWQgMC41cHggI2YxNjcyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzZjQ3ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXG59XG5cbi5zcGFjZXtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/tweet/tweet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/tweet/tweet.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/user-auth.service */ "./src/app/auth/user-auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, router, authService, toast) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.toast = toast;
        this.signup = {
            message: "",
            source: "",
        };
        this.referralNum = Math.floor(Math.random() * 100000);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.create = function () {
        var _this = this;
        var message = this.signup.message;
        var source = this.signup.source;
        this.authService.submitTweet(message, source).subscribe(function (res) {
            if (res.status == true) {
                _this.toast.success("Tweet Message Submitted Successfully.", "Success", {
                    timeOut: 4000,
                    positionClass: 'toast-top-center'
                });
            }
            else {
                _this.toast.error("Failed To Submit Tweet Message", "Submission Error", {
                    timeOut: 4000,
                    positionClass: 'toast-top-center'
                });
            }
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./tweet.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/tweet/tweet.component.html"),
            styles: [__webpack_require__(/*! ./tweet.component.css */ "./src/app/account/tweet/tweet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/tweet/tweet.component */ "./src/app/account/tweet/tweet.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");





var routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: _account_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    // end lazy-loading
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/fesm5/angular4-paystack.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _account_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account/tweet/tweet.component */ "./src/app/account/tweet/tweet.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/user-auth.service */ "./src/app/auth/user-auth.service.ts");
/* harmony import */ var _transactions_bill_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transactions/bill.service */ "./src/app/transactions/bill.service.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");























function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _account_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_22__["PagenotfoundComponent"],
            ],
            imports: [
                highcharts_angular__WEBPACK_IMPORTED_MODULE_14__["HighchartsChartModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                angular4_paystack__WEBPACK_IMPORTED_MODULE_12__["Angular4PaystackModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_13__["NgxPrintModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:4000/dashboard'],
                        blacklistedRoutes: ['localhost:4000/api/login']
                    }
                })
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]
            ],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_20__["UserAuthService"], _transactions_bill_service__WEBPACK_IMPORTED_MODULE_21__["BillService"],
                { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: false } }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-auth.service */ "./src/app/auth/user-auth.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route) {
        if (!localStorage.getItem('access_token')) {
            this.router.navigate(['login']);
            return false;
        }
        var expectedRole = route.data.expectedRole;
        var token = localStorage.getItem('access_token');
        // decode the token to get its payload
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        if (localStorage.getItem('access_token') && tokenPayload.role !== expectedRole) {
            console.log('here');
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/user-auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/user-auth.service.ts ***!
  \*******************************************/
/*! exports provided: UserAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function() { return UserAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UserAuthService = /** @class */ (function () {
    function UserAuthService(httpClient) {
        this.httpClient = httpClient;
        // set backend server url instance
        // apiServer = 'http://localhost:4000';
        this.apiServer = "https://tweet-be.herokuapp.com";
        // assume the API uses Jwtoken to authenticate user access
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
    }
    // signup user
    UserAuthService.prototype.submitTweet = function (message, source) {
        var obj = {
            message: message,
            source: source,
        };
        return this.httpClient.post(this.apiServer + "/tweet/tweets", obj);
    };
    // log user in
    UserAuthService.prototype.login = function (email, password) {
        var msg = {
            email: email,
            password: password
        };
        return this.httpClient.post(this.apiServer + "/api/login", msg)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            if (result) {
                localStorage.setItem('access_token', result.token);
                localStorage.setItem('userid', result.id);
            }
            return result;
        }));
    };
    // log user out
    UserAuthService.prototype.logout = function () {
        localStorage.removeItem('access_token');
    };
    Object.defineProperty(UserAuthService.prototype, "loggedIn", {
        // check if user is logged in
        get: function () {
            return (localStorage.getItem('access_token') !== null);
        },
        enumerable: true,
        configurable: true
    });
    // send report message to admin
    UserAuthService.prototype.contact = function (fullname, email, phoneNumber, message) {
        var obj = {
            fullname: fullname,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
        };
        return this.httpClient.post(this.apiServer + "/contact/contacts", obj);
    };
    // fetch all users
    UserAuthService.prototype.getUsers = function () {
        return this.httpClient.get(this.apiServer + "/api/users").toPromise();
    };
    // to fetch each Users data by Id
    UserAuthService.prototype.getUsersId = function (id) {
        this.id = localStorage.userid;
        return this
            .httpClient
            .get(this.apiServer + "/api/users/" + this.id).toPromise();
    };
    // update user info in db
    UserAuthService.prototype.updateUser = function (firstname, lastname, email, phoneNumber) {
        var obj = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phoneNumber: phoneNumber,
        };
        this.id = localStorage.userid;
        return this
            .httpClient
            .put(this.apiServer + "/api/users/" + this.id, obj);
    };
    // to fetch each Users data by user_Id
    UserAuthService.prototype.gettransactionId = function (id) {
        this.id = localStorage.userid;
        console.log(this.id);
        return this
            .httpClient
            .get(this.apiServer + "/transaction/transact/" + this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    // to fetch each Users data by Id
    UserAuthService.prototype.gettransaction = function (id) {
        this.id = localStorage.userid;
        return this
            .httpClient
            .get(this.apiServer + "/transaction/transactions/" + this.id);
    };
    // confirm password exist in db
    UserAuthService.prototype.checkpwdexist = function (password) {
        var pwd = {
            password: password
        };
        this.id = localStorage.userid;
        return this
            .httpClient
            .post(this.apiServer + "/api/password/" + this.id, pwd);
    };
    // update password in db
    UserAuthService.prototype.updatepwd = function (password) {
        var pwd = {
            password: password
        };
        this.id = localStorage.userid;
        return this
            .httpClient
            .put(this.apiServer + "/api/password/" + this.id, pwd);
    };
    UserAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserAuthService);
    return UserAuthService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-Orange {\n    font-family: Avenir;\n    /* max-width: 200px; */\n    color: #fff;\n    font-size: 16px;\n    font-weight: 500;\n    border-radius: 1px;\n    border: solid 0.5px #f16722;\n    background-color: #f16722 !important;\n    transition: .3s ease-in-out;\n\n}\n\n.btnOutOrange {\n    font-family: Avenir;\n    /* max-width: 200px; */\n    color: #000;\n    font-size: 16px;\n    font-weight: 500;\n    border-radius: 4px;\n    border: dashed 0.5px #f16722 !important;\n    background-color: #ffffff !important;\n}\n\n.btn-White {\n    font-family: Avenir;\n    /* max-width: 200px; */\n    color: #000;\n    font-size: 16px;\n    font-weight: 500;\n    border-radius: 1px;\n    border: solid 0.5px #f16722 !important;\n    background-color: #ffffff !important;\n    transition: .3s ease-in-out !important;\n}\n\n.btnOrange {\n    width: 300px;\n    background-color: #f16722 !important;\n    color: #fff;\n    height: 48px;\n    font-family: Avenir;\n    font-size: 14px;\n    font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tT3JhbmdlIHtcbiAgICBmb250LWZhbWlseTogQXZlbmlyO1xuICAgIC8qIG1heC13aWR0aDogMjAwcHg7ICovXG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIGJvcmRlcjogc29saWQgMC41cHggI2YxNjcyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE2NzIyICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXG59XG5cbi5idG5PdXRPcmFuZ2Uge1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgLyogbWF4LXdpZHRoOiAyMDBweDsgKi9cbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiBkYXNoZWQgMC41cHggI2YxNjcyMiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1XaGl0ZSB7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pcjtcbiAgICAvKiBtYXgtd2lkdGg6IDIwMHB4OyAqL1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNmMTY3MjIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5PcmFuZ2Uge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE2NzIyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBdmVuaXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import * as AOS from 'aos'
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // AOS.init();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/transactions/bill.service.ts":
/*!**********************************************!*\
  !*** ./src/app/transactions/bill.service.ts ***!
  \**********************************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BillService = /** @class */ (function () {
    function BillService(httpClient) {
        this.httpClient = httpClient;
        // backend server instance
        // apiServer = 'http://localhost:4000';
        this.apiServer = "https://infinitelight-api.herokuapp.com";
    }
    BillService.prototype.processPayment = function (bill, state, disco, meter, amount, email, ref, user_id) {
        var billData = {
            bill: bill, state: state, disco: disco, meter: meter, amount: amount, email: email, ref: ref, user_id: user_id
        };
        return this.httpClient.post(this.apiServer + "/transaction/transactions", billData);
    };
    BillService.prototype.getTransData = function () {
        return this.httpClient.get(this.apiServer + "/transaction/latesttransact");
    };
    BillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BillService);
    return BillService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/feyisewaawotedu/Projects/Personal/InfiniteLight--FE copy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map