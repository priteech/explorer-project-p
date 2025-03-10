"use strict";
exports.__esModule = true;
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
var counter_reducer_1 = require("../store/counter-reducer");
exports.appConfig = {
    providers: [
        http_1.provideHttpClient(),
        core_1.provideZoneChangeDetection({ eventCoalescing: true }), router_1.provideRouter(app_routes_1.routes), platform_browser_1.provideClientHydration(platform_browser_1.withEventReplay()),
        store_1.provideStore({
            counter: counter_reducer_1.counterReducer
        })
    ]
};
